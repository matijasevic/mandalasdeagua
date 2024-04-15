import cartImg from "../assets/cart.png";
import CircleNumb from "./circleNumb";

const Cart = () => {
  return (
    <>
      <div onClick={() => alert("agregando ando al carrito chiquito!")}>
        <CircleNumb number={5} />
        <img src={cartImg} alt="carrito" />
      </div>
    </>
  );
};

export default Cart;
