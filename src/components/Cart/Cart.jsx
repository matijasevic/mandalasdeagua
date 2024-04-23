import CircleNumb from "../CircleNumb/CircleNumb";
import "./Cart.css";

const Cart = () => {
  return (
    <>
      <div
        className="cart"
        onClick={() => alert("agregando ando al carrito chiquito!")}
      >
        <CircleNumb />
      </div>
    </>
  );
};

export default Cart;
