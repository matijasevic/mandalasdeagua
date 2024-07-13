import "./Header.css";
import Cart from "../Cart/Cart";
import NavBar from "../NavBar/NavBar";
import Brand from "../Brand/Brand";
import ToggleButton from "../ToggleButton/ToggleButton";

const Header = () => {
  return (
    <div className="header">
      <Brand />
      <NavBar />
      <ToggleButton />
      <Cart />
    </div>
  );
};

export default Header;
