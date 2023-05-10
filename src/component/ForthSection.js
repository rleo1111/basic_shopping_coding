import "../css/ForthSection.css";
import forthImage from "../assets/Rectangle.png";

function ForthSection() {
  return (
    <div className="forth-container">
      <h4 className="forth-title">You’re in good company</h4>
      <p className="forth-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <div className="forth-images-container">
        <img className="forth-image" src={forthImage} alt="image" />
        <img className="forth-image" src={forthImage} alt="image" />
        <img className="forth-image" src={forthImage} alt="image" />
        <img className="forth-image" src={forthImage} alt="image" />
        <img className="forth-image" src={forthImage} alt="image" />
        <img className="forth-image" src={forthImage} alt="image" />
        <img className="forth-image" src={forthImage} alt="image" />
        <img className="forth-image" src={forthImage} alt="image" />
      </div>
    </div>
  );
}

export default ForthSection;
