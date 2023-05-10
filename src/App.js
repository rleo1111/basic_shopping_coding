import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navi from "./component/Navi";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navi />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
