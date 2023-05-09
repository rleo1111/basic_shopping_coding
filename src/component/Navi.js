import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navi() {
  const navigate = useNavigate();
  const handleLoginButton = () => {
    navigate("/login");
  };
  const handleRegisterButton = () => {
    navigate("/register");
  };
  return (
    <div className="navigation-bar">
      <Nav activeKey="/home">
        <img className="logo" src={logo} alt="logo" />
        <Nav.Item>
          <Nav.Link className="link" href="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="link" eventKey="link-1">
            LInk1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="link" eventKey="link-2">
            Link2
          </Nav.Link>
        </Nav.Item>
        <div className="right-buttons">
          <button className="button login" onClick={handleLoginButton}>
            Login
          </button>
          <button
            className="button color-blue register"
            onClick={handleRegisterButton}
          >
            Register
          </button>
        </div>
      </Nav>
    </div>
  );
}

export default Navi;
