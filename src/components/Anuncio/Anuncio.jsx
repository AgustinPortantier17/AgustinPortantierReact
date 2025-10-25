import { useState, useEffect } from "react";
import "./Anuncio.css";

const Announcement = () => {
  const [mostrarAnuncio, setMostrarAnuncio] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarAnuncio(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!mostrarAnuncio) {
    return null;
  }

  return (
    <aside className="anuncioSection">
      <div className="anuncioInfo">
        <h3>¡Ofertas Especiales! 🎉</h3>
        <p>Hasta 20% de descuento en productos seleccionados.</p>
      </div>

      <div className="anuncioInfo">
        <h3>¿Quieres practicar? ✨</h3>
        <p>Visítanos para jugar y divertirte</p>
        <ul className="anuncioFechas">
          <li>Miercoles de Flesh And Blood</li>
          <li>Jueves de One Piece Card Game</li>
          <li>Viernes de Yu-Gi-Oh!</li>
          <li>Sábados de Pokémon TCG</li>
          <li> Domingos de Magic: The Gathering</li>
        </ul>
      </div>

      <div className="anuncioInfo">
        <h3>Envío gratis 🚚</h3>
        <p>En compras superiores a $4000</p>
      </div>
    </aside>
  );
};

export default Announcement;
