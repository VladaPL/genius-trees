import { HeaderLogo, HeaderNavigation } from "./header";

// * Footer section START

const FooterSection = () => {
  return (
    <header className="footer header">
      <div className="wrapper layout-2-column header__wrapper">
        <HeaderLogo />
        <div>
          <HeaderNavigation />
          <div className="layout-3-column contacts header__wrapper">
            <h4 className="contacts-item">Contacts</h4>
            <div className="contacts-item">
              <a className="contacts-link" href="mailto:genius_trees@yandex.ru">
                genius_trees@yandex.ru
              </a>
            </div>
            <div className="contacts-item">
              <a className="contacts-link" href="tel:+78003332222">
                8 800 333 22 22
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// * Footer section END

export { FooterSection };
