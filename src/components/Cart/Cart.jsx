import cartImg from "../../assets/cart.png";
// import CircleNumb from "../CircleNumb/CircleNumb";

const Cart = () => {
  return (
    <>
      <div
        style={{ margin: "10px", cursor: "pointer" }}
        onClick={() => alert("agregando ando al carrito chiquito!")}
      >
        {/* <CircleNumb number={5} /> */}
        <img src={cartImg} alt="carrito" />
      </div>
    </>
  );
};

export default Cart;
