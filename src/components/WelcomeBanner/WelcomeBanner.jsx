import "./WelcomeBanner.css";

const WelcomeBanner = () => {
  return (
    <div className="welcome-banner">
      <div className="welcome-content">
        <h1>Bienvenido a TCG Masters</h1>
        <p>Tu tienda especializada en Trading Card Games</p>
        <div className="welcome-categories">
          <span>Pokémon</span>
          <span>•</span>
          <span>Yu-Gi-Oh!</span>
          <span>•</span>
          <span>Magic</span>
          <span>•</span>
          <span>One Piece</span>
          <span>•</span>
          <span>Flesh and Blood</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;