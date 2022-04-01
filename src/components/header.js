import logo from "../img/logo.png";

// * Header section START

const HeaderLogo = () => {
  return (
    <div className="header__logo-line">
      <span className="header__hamburger hamburger">
        <div className="hamburger__line"></div>
      </span>
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
      <h2 className="logo-text">Genius trees</h2>
    </div>
  );
};

// const HeaderTitle = () => {
//   return <h2 className="logo-text">Genius trees</h2>;
// };

const HeaderNavigation = () => {
  return (
    <nav className="header__navigation">
      <ul className="navigation">
        <li className="navigation__link">
          <a className="navigation__link" href="/">
            Home
          </a>
        </li>
        <li className="navigation__link">
          <a className="navigation__link" href="/articles">
            Articles
          </a>
        </li>
        <li className="navigation__link">
          <a className="navigation__link" href="/inspiration">
            Inspiration
          </a>
        </li>
        <li className="navigation__link">
          <a className="navigation__link" href="/where">
            Where to plant
          </a>
        </li>
      </ul>
    </nav>
  );
};

const HeaderButtons = () => {
  return (
    <div className="header__buttons">
      <button className="button button_bordered">Sign In</button>
      <button className="button button_colored">Sign Up</button>
    </div>
  );
};

const HeaderSection = () => {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <HeaderLogo />
        <HeaderNavigation />
        <HeaderButtons />
      </div>
    </header>
  );
};

// * Header section END

export { HeaderSection, HeaderLogo, HeaderNavigation };
