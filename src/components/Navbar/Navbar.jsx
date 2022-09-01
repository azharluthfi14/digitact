import "./Navbar.styles.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="navbar__logo">
          Digitact
        </a>
        <div className="navbar__menu">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Home
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Services
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Features
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Portofolio
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <a href="#" className="button button__navbar has-before has-after">
          Let's Talk 👋
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
