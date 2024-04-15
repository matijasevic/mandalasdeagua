import charwheelImg from "../assets/chartwheel.png";

const Chartwheel = () => {
  return (
    <>
      <div onClick={() => alert("agregando ando al carrito chiquito!")}>
        <img src={charwheelImg} alt="carrito" />
      </div>
    </>
  );
};

export default Chartwheel;
