import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import "./ProductCarousel.css";

const ProductCarousel = ({ title, products, category }) => {
  const [itemsPerView, setItemsPerView] = useState(4);
  const startIndex = products.length;
  
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef(null);

  // Duplicar productos para efecto infinito (3 copias)
  const extendedProducts = [...products, ...products, ...products];

  // Actualizar itemsPerView según el tamaño de la pantalla
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setItemsPerView(1); // Móvil: 1 producto
      } else if (width <= 768) {
        setItemsPerView(2); // Tablet pequeña: 2 productos
      } else if (width <= 1024) {
        setItemsPerView(3); // Tablet/laptop pequeño: 3 productos
      } else {
        setItemsPerView(4); // Desktop: 4 productos
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    // Calcular el ancho de una card incluyendo gap
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const calculatedWidth = (containerWidth / itemsPerView);
      setCardWidth(calculatedWidth);
    }
  }, [itemsPerView, products]);

  const nextSlide = () => {
    if (!isAnimating && products.length > 0 && cardWidth > 0) {
      setIsAnimating(true);
      
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      
      setTimeout(() => {
        // Si llegamos al final del segundo set, resetear al inicio del segundo set sin animación
        if (nextIndex >= products.length * 2) {
          setCurrentIndex(startIndex);
        }
        setIsAnimating(false);
      }, 600);
    }
  };

  const prevSlide = () => {
    if (!isAnimating && products.length > 0 && cardWidth > 0) {
      setIsAnimating(true);
      
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      
      setTimeout(() => {
        // Si llegamos al inicio del primer set, resetear al inicio del segundo set sin animación
        if (prevIndex < products.length) {
          setCurrentIndex(startIndex + products.length - 1);
        }
        setIsAnimating(false);
      }, 600);
    }
  };

  if (products.length === 0) {
    return null;
  }

  const translateValue = -(currentIndex * cardWidth);

  const getCarouselClass = () => {
    if (category === 'PKM') return 'pokemon-carousel';
    if (category === 'OPC') return 'onepiece-carousel';
    if (category === 'FAB') return 'fab-carousel';
    if (category === 'YGO') return 'yugioh-carousel';
    if (category === 'MTG') return 'mtg-carousel';
    return '';
  };

  return (
    <div className={`product-carousel ${getCarouselClass()}`}>
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel-wrapper">
        <button 
          onClick={prevSlide} 
          className="carousel-btn prev" 
          disabled={isAnimating}
          aria-label="Ver productos anteriores"
        >
          &#8249;
        </button>
        
        <div className="carousel-items-container" ref={containerRef}>
          <div 
            className="carousel-track"
            style={{
              transform: `translateX(${translateValue}px)`,
              transition: isAnimating ? 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)' : 'none'
            }}
          >
            {extendedProducts.map((product, index) => (
              <div 
                key={`${product.id}-${index}`} 
                className="carousel-item"
                style={{ width: `${cardWidth}px` }}
              >
                <Item product={product} />
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={nextSlide} 
          className="carousel-btn next" 
          disabled={isAnimating}
          aria-label="Ver siguientes productos"
        >
          &#8250;
        </button>
      </div>
      
      <Link to={`/category/${category}`} className="view-all-link">
        Ver todos →
      </Link>
    </div>
  );
};

export default ProductCarousel;