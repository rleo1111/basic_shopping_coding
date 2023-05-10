import logo from "../assets/logo.svg";
import circle from "../assets/Ellipse.png";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="first-container">
        <div className="footer-item left">Community</div>
        <div className="footer-item left">Mobile app</div>
        <div className="footer-item left">Company</div>
        <img className="footer-logo" src={logo} alt="logo" />
        <div className="footer-item right">Help desk</div>
        <div className="footer-item right">Blog</div>
        <div className="footer-item right">Resources</div>
      </div>
      <div>
        <img className="footer-circle" src={circle} alt="circle" />
        <img className="footer-circle" src={circle} alt="circle" />
        <img className="footer-circle" src={circle} alt="circle" />
        <img className="footer-circle" src={circle} alt="circle" />
      </div>
      <div className="footer-message">
        © Photo, Inc. 2019. We love our users!
      </div>
    </div>
  );
}

export default Footer;
