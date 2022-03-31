import {HeaderLogo, HeaderNavigation} from "./header";


// * Footer section START

const FooterSection = () => {
  return (
    <header class="footer header">
      <div class="wrapper layout-3-column header__wrapper">
        <HeaderLogo />
        <HeaderNavigation />
        <div>
          <h3>Contacts</h3>
          <p class="contacts">
            <a class="contacts-link" href="mailto:genius_trees@yandex.ru">genius_trees@yandex.ru</a>
          </p>
          <p>
            <a class="contacts-link" href="tel:+78003332222"> 8 800 333 22 22</a>
          </p>
        </div>
      </div>
    </header>
  );
};

// * Footer section END

export {FooterSection};