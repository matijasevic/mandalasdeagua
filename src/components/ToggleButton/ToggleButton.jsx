import { useRef } from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
  const toogleRef = useRef(null);
  const handleClick = () => {
    toogleRef.current.className == "ligth"
      ? (toogleRef.current.className = "dark")
      : (toogleRef.current.className = "ligth");
  };
  return (
    <div onClick={handleClick} className="toogleButtonContainer">
      <div ref={toogleRef} className="ligth"></div>
    </div>
  );
};

export default ToggleButton;
