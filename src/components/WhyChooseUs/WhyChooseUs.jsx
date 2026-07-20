import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="container">

        <div className="section-heading">
          <p className="section-tag">OUR LEGACY</p>

          <h2>
            Why Families Trust
            <span> Pintu Furniture</span>
          </h2>

          <p className="section-description">
            For over 50 years, Pintu Furniture has been crafting premium
            wooden furniture by combining traditional craftsmanship with
            modern precision. Passed down through three generations, our
            commitment to quality, durability, and customer satisfaction
            remains stronger than ever.
          </p>
        </div>

   <div className="marquee">

  <div className="marquee-track">

    <div className="marquee-item">
       <span>50+ Years</span>
    </div>

    <div className="marquee-item">
       <span>3rd Generation</span>
    </div>

    <div className="marquee-item">
       <span>A1 Quality Material</span>
    </div>

    <div className="marquee-item">
       <span>Handcrafted + Machinery</span>
    </div>

    <div className="marquee-item">
       <span>Experienced Workers</span>
    </div>

    <div className="marquee-item">
       <span>Custom Furniture</span>
    </div>

    {/* Duplicate for seamless loop */}

    <div className="marquee-item">
       <span>50+ Years</span>
    </div>

    <div className="marquee-item">
       <span>3rd Generation</span>
    </div>

    <div className="marquee-item">
       <span>A1 Quality Material</span>
    </div>

    <div className="marquee-item">
       <span>Handcrafted + Machinery</span>
    </div>

    <div className="marquee-item">
       <span>Experienced Workers</span>
    </div>

    <div className="marquee-item">
       <span>Custom Furniture</span>
    </div>

  </div>

</div>
<div className="trust-stats">

  <div className="stat-box">
    <h2>50+</h2>
    <p>Years of Legacy</p>
  </div>

  <div className="stat-box">
    <h2>3rd</h2>
    <p>Generation</p>
  </div>

  <div className="stat-box">
    <h2>A1</h2>
    <p>Quality Material</p>
  </div>

  <div className="stat-box">
    <h2>100%</h2>
    <p>Craftsmanship</p>
  </div>

</div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
