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
    <Nav className="navigation" activeKey="/home">
      <img className="logo" src={logo} alt="로고" />
      <Nav.Item>
        <Nav.Link className="link" href="/home">
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
        <button className="button register" onClick={handleRegisterButton}>
          Register
        </button>
      </div>
    </Nav>
  );
}

export default Navi;
