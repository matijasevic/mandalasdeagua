import CircleNumb from "../CircleNumb/CircleNumb";
import imgSrc from "../../assets/carrito-de-compras.png";
import "./Cart.css";

const Cart = () => {
  return (
    <>
      <div
        className="cart"
        onClick={() => alert("agregando ando al carrito chiquito!")}
      >
        <CircleNumb />
        {/* <img src={imgSrc} alt="carrito" /> */}
      </div>
    </>
  );
};

export default Cart;
