import React from "react";
import ReactDOM from "react-dom";
import "./sass/index.css";

// Components
import { HeaderSection } from "./components/header";
import { FooterSection } from "./components/footer";

// Images
import one from "./img/straregies/1.jpg";
import two from "./img/straregies/2.jpg";
import three from "./img/straregies/3.jpg";
import four from "./img/straregies/4.jpg";
import five from "./img/straregies/5.jpg";
import six from "./img/straregies/6.jpg";
import promoImg from "./img/backgrounds/5.png";

// * Promo section START

const PromoSection = () => {
  return (
    <section className="promo">
      <div className="wrapper promo__wrapper">
        <div className="promo__content">
          <h1 className="promo__title">Create nature. Plant trees</h1>
          <p className="promo__text">
            Trees are real geniuses of nature. Trees generate life. Create life
            by planting trees. We will tell you about this in our project.
          </p>
          <div className="promo__buttons">
            <button className="button button_colored">Get started</button>
            <a href="#" className="link-button">
              <span className="ico ico_play"></span>
              <span className="link-button__text">Watch the Video</span>
            </a>
          </div>
        </div>
        <div className="promo__img">
          <img className="promo__img-pic" src={promoImg} alt="promo-img" />
        </div>
      </div>
    </section>
  );
};

// * Promo section END

// * Tools section START

const ToolsSection = () => {
  return (
    <section className="tools">
      <div className="wrapper tools__wrapper">
        <h2 className="tools__title">
          The ability to plant trees is your superpower
        </h2>
        <div className="layout-4-column tool-container">
          <div className="tool">
            <div className="tool__icon">
              <span className="icon-square icon-square_violet">
                <span className="ico ico_arrow"></span>
              </span>
            </div>
            <h4 className="tool__title">Seeds</h4>
            <p className="tool__text">
              Learn how to find the right seeds and germinate them
            </p>
          </div>
          <div className="tool">
            <div className="tool__icon">
              <span className="icon-square icon-square_yellow">
                <span className="ico ico_snake"></span>
              </span>
            </div>
            <h4 className="tool__title">Seedlings</h4>
            <p className="tool__text">
              Try to grow a small tree in your window
            </p>
          </div>
          <div className="tool">
            <div className="tool__icon">
              <span className="icon-square icon-square_red">
                <span className="ico ico_heart"></span>
              </span>
            </div>
            <h4 className="tool__title">Locations</h4>
            <p className="tool__text">
              Find a comfortable suitable place for your tree
            </p>
          </div>
          <div className="tool">
            <div className="tool__icon">
              <span className="icon-square icon-square_blue">
                <span className="ico ico_clock"></span>
              </span>
            </div>
            <h4 className="tool__title">Care</h4>
            <p className="tool__text">How to protect a tree from bad weather</p>
          </div>
        </div>
        <div className="tools__button">
          <button className="button button_colored">Sign Up Now</button>
        </div>
      </div>
    </section>
  );
};

// * Tools section END

// * Strategies section START

const StrategiesSection = () => {
  return (
    <section className="strategies">
      <div className="wrapper">
        <h2 className="strategies__title">Nature Improvement Strategies</h2>
        <p className="strategies__description">
          There are more than 40,000 active and kind people in our community.
          Join now!
        </p>
        <div className="strategies__tags tags">
          <span className="tag tag_selected">All</span>
          <span className="tag tag_bordered">Trees</span>
          <span className="tag tag_bordered">Climate</span>
          <span className="tag tag_bordered">Landscape</span>
        </div>
        <div className="layout-3-column strategy-wrapper">
          <article className="strategy block-shadowed">
            <img className="strategy__image" src={one} alt="strategy" />
            <div className="strategy__content">
              <h3 className="strategy__name">
                Increasing Prosperity With Positive Thinking
              </h3>
              <div className="strategy__tags tags">
                <span className="tag tag_colored">Trees</span>
                <span className="tag tag_colored">Landscape</span>
              </div>
            </div>
          </article>
          <article className="strategy block-shadowed">
            <img className="strategy__image" src={two} alt="strategy" />
            <div className="strategy__content">
              <h3 className="strategy__name">
                Motivation Is The First Step To Success
              </h3>
              <div className="strategy__tags tags">
                <span className="tag tag_colored">Climate</span>
              </div>
            </div>
          </article>
          <article className="strategy block-shadowed">
            <img className="strategy__image" src={three} alt="strategy" />
            <div className="strategy__content">
              <h3 className="strategy__name">
                Success Steps For Your Personal Or Life of Nature
              </h3>
              <div className="strategy__tags tags">
                <span className="tag tag_colored">Climate</span>
                <span className="tag tag_colored">Landscape</span>
                <span className="tag tag_colored">Trees</span>
              </div>
            </div>
          </article>
          <article className="strategy strategy_wide block-shadowed">
            <img className="strategy__image" src={four} alt="strategy" />
            <div className="strategy__content">
              <h3 className="strategy__name">
                Enjoy communication with nature
              </h3>
              <div className="strategy__tags tags">
                <span className="tag tag_colored">Climate</span>
                <span className="tag tag_colored">Landscape</span>
                <span className="tag tag_colored">Trees</span>
              </div>
            </div>
          </article>
          <article className="strategy block-shadowed">
            <img className="strategy__image" src={five} alt="strategy" />
            <div className="strategy__content">
              <h3 className="strategy__name">
                Success Steps For Your Personal Or Life of Nature
              </h3>
              <div className="strategy__tags tags">
                <span className="tag tag_colored">Climate</span>
                <span className="tag tag_colored">Landscape</span>
                <span className="tag tag_colored">Trees</span>
              </div>
            </div>
          </article>
          <article className="strategy strategy_wide block-shadowed">
            <img className="strategy__image" src={six} alt="strategy" />
            <div className="strategy__content">
              <h3 className="strategy__name">
                Enjoy communication with nature
              </h3>
              <div className="strategy__tags tags">
                <span className="tag tag_colored">Climate</span>
                <span className="tag tag_colored">Landscape</span>
                <span className="tag tag_colored">Trees</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

// * Strategies section END

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
