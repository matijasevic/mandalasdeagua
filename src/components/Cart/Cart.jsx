import CircleNumb from "../CircleNumb/CircleNumb";

const Cart = () => {
  return (
    <>
      <div
        className="cart"
        onClick={() => alert("agregando ando al carrito chiquito!")}
      >
        <CircleNumb number={5} />
        <img src="../../assets/carrito-de-compras.png" alt="carrito" />
      </div>
    </>
  );
};

export default Cart;
