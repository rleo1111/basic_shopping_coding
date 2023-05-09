import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navi from "./component/Navi";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navi />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
