import React from "react";
import ReactDOM from "react-dom";
import "./sass/index.css";
import logo from "./img/logo.png";
import one from "./img/straregies/one.jpg";
import two from "./img/straregies/two.jpg";
import three from "./img/straregies/three.jpg";
import four from "./img/straregies/four.jpg";
import promoImg from "./img/backgrounds/5.png";

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

// * Promo section START

const PromoSection = () => {
  return (
    <section class="promo">
      <div class="wrapper promo__wrapper">
        <div class="promo__content">
          <h1 class="promo__title">Create nature. Plant trees</h1>
          <p class="promo__text">
            Trees are real geniuses of nature. Trees generate life. Create life
            by planting trees. We will tell you about this in our project.
          </p>
          <div class="promo__buttons">
            <button class="button button_colored">Get started</button>
            <a href="#" class="link-button">
              <span class="ico ico_play"></span>
              <span class="link-button__text">Watch the Video</span>
            </a>
          </div>
        </div>
        <div class="promo__img">
          <img class="promo__img-pic" src={promoImg} alt="promo-img" />
        </div>
      </div>
    </section>
  );
};

// * Promo section END

// * Tools section START

const ToolsSection = () => {
  return (
    <section class="tools">
      <div class="wrapper tools__wrapper">
        <h2 class="tools__title">
          The ability to plant trees is your superpower
        </h2>
        <div class="layout-4-column tool-container">
          <div class="tool">
            <div class="tool__icon">
              <span class="icon-square icon-square_violet">
                <span class="ico ico_arrow"></span>
              </span>
            </div>
            <h4 class="tool__title">Seeds</h4>
            <p class="tool__text">
              Learn how to find the right seeds and germinate them
            </p>
          </div>
          <div class="tool">
            <div class="tool__icon">
              <span class="icon-square icon-square_yellow">
                <span class="ico ico_snake"></span>
              </span>
            </div>
            <h4 class="tool__title">Seedlings</h4>
            <p class="tool__text">Try to grow a small tree in your window</p>
          </div>
          <div class="tool">
            <div class="tool__icon">
              <span class="icon-square icon-square_red">
                <span class="ico ico_heart"></span>
              </span>
            </div>
            <h4 class="tool__title">Locations</h4>
            <p class="tool__text">
              Find a comfortable suitable place for your tree
            </p>
          </div>
          <div class="tool">
            <div class="tool__icon">
              <span class="icon-square icon-square_blue">
                <span class="ico ico_clock"></span>
              </span>
            </div>
            <h4 class="tool__title">Care</h4>
            <p class="tool__text">How to protect a tree from bad weather</p>
          </div>
        </div>
        <div class="tools__button">
          <button class="button button_colored">Sign Up Now</button>
        </div>
      </div>
    </section>
  );
};

// * Tools section END

// * Strategies section START

const StrategiesSection = () => {
  return (
    <section class="strategies">
      <div class="wrapper">
        <h2 class="strategies__title">Nature Improvement Strategies</h2>
        <p class="strategies__description">
          There are more than 40,000 active and kind people in our community.
          Join now!
        </p>
        <div class="strategies__tags tags">
          <span class="tag tag_selected">All</span>
          <span class="tag tag_bordered">Trees</span>
          <span class="tag tag_bordered">Climate</span>
          <span class="tag tag_bordered">Landscape</span>
        </div>
        <div class="layout-3-column strategy-wrapper">
          <article class="strategy block-shadowed">
            <img class="strategy__image" src={one} alt="strategy" />
            <div class="strategy__content">
              <h3 class="strategy__name">
                Increasing Prosperity With Positive Thinking
              </h3>
              <div class="strategy__tags tags">
                <span class="tag tag_colored">Trees</span>
                <span class="tag tag_colored">Landscape</span>
              </div>
            </div>
          </article>
          <article class="strategy block-shadowed">
            <img class="strategy__image" src={two} alt="strategy" />
            <div class="strategy__content">
              <h3 class="strategy__name">
                Motivation Is The First Step To Success
              </h3>
              <div class="strategy__tags tags">
                <span class="tag tag_colored">Climate</span>
              </div>
            </div>
          </article>
          <article class="strategy block-shadowed">
            <img class="strategy__image" src={three} alt="strategy" />
            <div class="strategy__content">
              <h3 class="strategy__name">
                Success Steps For Your Personal Or Life of Nature
              </h3>
              <div class="strategy__tags tags">
                <span class="tag tag_colored">Climate</span>
                <span class="tag tag_colored">Landscape</span>
                <span class="tag tag_colored">Trees</span>
              </div>
            </div>
          </article>
          <article class="strategy strategy_wide block-shadowed">
            <img class="strategy__image" src={four} alt="strategy" />
            <div class="strategy__content">
              <h3 class="strategy__name">Enjoy communication with nature</h3>
              <div class="strategy__tags tags">
                <span class="tag tag_colored">Climate</span>
                <span class="tag tag_colored">Landscape</span>
                <span class="tag tag_colored">Trees</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

// * Strategies section END

// * Footer section START

const FooterSection = () => {
  return (
    <header class="footer">
      <div class="wrapper footer__wrapper">
        <HeaderLogo />
        <HeaderNavigation />
      </div>
    </header>
  );
};

// * Footer section END

const App = () => {
  return (
    <div>
      <HeaderSection />
      <PromoSection />
      <ToolsSection />
      <StrategiesSection />
      <FooterSection />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
