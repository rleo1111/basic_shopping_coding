import "../css/ThirdSection.css";
import thirdImage from "../assets/Rectangle.png";

function ThirdSection() {
  return (
    <div className="third-section">
      <div className="left-container">
        <img className="third-image" src={thirdImage} alt="image" />
      </div>
      <div className="right-container">
        <h4 className="third-title">Sed ut perspiciatis unde omnis</h4>
        <p className="third-content">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem.
        </p>
      </div>
    </div>
  );
}

export default ThirdSection;
