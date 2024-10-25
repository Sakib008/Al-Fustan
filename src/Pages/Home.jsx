import hero from "../assets/hero-man.jpg";
import KurtaWhite from "../assets/section-man-kurta.jpg";
import twoBrother from "../assets/section-man-wedding2.jpg";
import sherwani from "../assets/mwd18.jpg";
import sherwaniWedding from "../assets/mwd26.jpg";
import halfShirt from "../assets/mwc5.jpg";
import tshirtWithTrouser from "../assets/mtj8.jpg";

export function Home() {
  return (
    <div className="home">
      <img src={hero} alt="hero-section" className="hero-img" />

      <h2>Category</h2>
      <div className="category">
        <div className="left">
          <img src={KurtaWhite} alt="Wedding-Kurta" />
        </div>
        <div className="right">
          <div className="up">
            <img src={twoBrother} alt="Black-Suit" />
            <img src={sherwani} alt="Normal-Sherwani" />
          </div>
          <div className="down">
            <img src={sherwaniWedding} alt="Wedding-Sherwani" />
            <img src={tshirtWithTrouser} alt="Trouser" />
            <img src={halfShirt} alt="Half-Shirt" />
          </div>
        </div>
      </div>
    </div>
  );
}
