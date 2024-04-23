import "./Header.css";
import Cart from "../Cart/Cart";
import NavBar from "../NavBar/NavBar";
import Brand from "../Brand/Brand";

const Header = () => {
  return (
    <div className="header">
      <Brand />
      <NavBar />
      <Cart />
    </div>
  );
};

export default Header;
