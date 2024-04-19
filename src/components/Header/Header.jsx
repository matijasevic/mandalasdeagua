import "./Header.css";
import Cart from "../Cart/Cart";
import NavBar from "../NavBar/NavBar";
import Brand from "../Brand/Brand";

const Header = () => {
  return (
    <div className="header">
      <Brand />
      <h1 className="text-3xl font-bold underline">Barrio Mandalas de Agua</h1>
      <NavBar />
      <Cart />
    </div>
  );
};

export default Header;
