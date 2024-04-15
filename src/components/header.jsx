import Chartwheel from "./chartwheel";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">Contacto</a>
          </li>
          <li>
            <a href="/product">Lotes</a>
          </li>
          <li>
            <a href="/galery">Galeria</a>
          </li>
        </ul>
      </nav>
      <h1>Barrio Mandalas de Agua</h1>
      <Chartwheel />
    </header>
  );
};

export default Header;
