import "./Hero.css";
import heroImage from "../../assets/images/hero-section.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            Handcrafted <span>Teakwood</span> Furniture
          </h1>

          <p>
            Experience timeless craftsmanship with premium teakwood furniture
            designed to add elegance, durability, and comfort to your home.
          </p>

          <div className="hero-btns">
            <button className="primary-btn">Explore Collection</button>
            <button className="secondary-btn">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

