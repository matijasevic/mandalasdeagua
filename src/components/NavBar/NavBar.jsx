import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="NavBar">
      <ul>
        <li>
          <a
            className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
            href="/about"
          >
            Contacto
          </a>
        </li>
        <li>
          <a
            className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
            href="/product"
          >
            Lotes
          </a>
        </li>
        <li>
          <a
            className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out"
            href="/galery"
          >
            Galeria
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
