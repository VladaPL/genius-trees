import React from "react";
import ReactDOM from "react-dom";

// * Header section START

const HeaderLogo = () => {
  return (
  <div class="header__logo-line">
      <span class="header__hamburger hamburger">
        <span class="hamburger__line"></span>
      </span>
      <a href="#">
        <img src="../src/img/logo.png" alt="logo" />
      </a>
    </div>
);
};

const HeaderTitle = () => {
  return (
<h1>Genius trees</h1>
);
};

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
  return (<header>
    <HeaderLogo />
    <HeaderTitle/>
    <HeaderNavigation/>
    <HeaderButtons/>
  </header>);
};

// * Header section END

// * Main section START



// * Main section END


// * Footer section START



// * Footer section END

const App = () => {
  return (
    <div>
    <HeaderSection/>
  </div>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));



