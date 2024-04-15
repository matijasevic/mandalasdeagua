import Cart from "./cart";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#021373",
    color: "white",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const navStyle = {
    listStyleType: "none",
    display: "flex",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 10px",
  };

  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navStyle}>
          <li>
            <a href="/" style={linkStyle}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" style={linkStyle}>
              Contacto
            </a>
          </li>
          <li>
            <a href="/product" style={linkStyle}>
              Lotes
            </a>
          </li>
          <li>
            <a href="/galery" style={linkStyle}>
              Galeria
            </a>
          </li>
        </ul>
      </nav>
      <h1>Barrio Mandalas de Agua</h1>
      <Cart />
    </header>
  );
};

export default Header;
