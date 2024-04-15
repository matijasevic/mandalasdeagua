import charwheelImg from "../assets/chartwheel.png";
import CircleNumb from "./circleNumb";

const Chartwheel = () => {
  return (
    <>
      <div onClick={() => alert("agregando ando al carrito chiquito!")}>
        <CircleNumb number={5} />
        <img src={charwheelImg} alt="carrito" />
      </div>
    </>
  );
};

export default Chartwheel;
