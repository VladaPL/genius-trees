import logo from "../img/logo.png";

// * Header section START

const HeaderLogo = () => {
  return (
    <div class="header__logo-line">
      <span class="header__hamburger hamburger">
        <div class="hamburger__line"></div>
      </span>
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
      <h2 class="logo-text">Genius trees</h2>
    </div>
  );
};

// const HeaderTitle = () => {
//   return <h2 class="logo-text">Genius trees</h2>;
// };

const HeaderNavigation = () => {
  return (
    <nav class="header__navigation">
      <ul class="navigation">
        <li class="navigation__link">Home</li>
        <li class="navigation__link">Articles</li>
        <li class="navigation__link">Inspiration</li>
        <li class="navigation__link">Where to plant</li>
      </ul>
    </nav>
  );
};

const HeaderButtons = () => {
  return (
    <div class="header__buttons">
      <button class="button button_bordered">Sign In</button>
      <button class="button button_colored">Sign Up</button>
    </div>
  );
};

const HeaderSection = () => {
  return (
    <header class="header">
      <div class="wrapper header__wrapper">
        <HeaderLogo />
        <HeaderNavigation />
        <HeaderButtons />
      </div>
    </header>
  );
};

// * Header section END

export {HeaderSection, HeaderLogo, HeaderNavigation};