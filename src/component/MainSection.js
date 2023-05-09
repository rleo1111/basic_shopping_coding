import { useEffect } from "react";
import "../css/MainSection.css";
import { useDispatch, useSelector } from "react-redux";
import { changeShow } from "../store";

function MainSection() {
  const show = useSelector((state) => state.show);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeShow());
  }, []);
  return (
    <div className={`main-section ${show}`}>
      <h4 className="main-title">
        The largest Community <br /> of Photo enthusiasts
      </h4>
      <button className="button color-blue get-started">Get Started</button>
    </div>
  );
}

export default MainSection;
