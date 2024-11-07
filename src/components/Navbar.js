import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  const changeLanguage = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
    closeMenu();
  };

  return (
    <header>
      <div className="first-line">
        <div className="title">
          <Link to="/" className="name">
            Héloïse Baland
          </Link>
          <div className="subtitle">{t("navbar.subtitle")}</div>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {!menuOpen && <MdMenu />}
          {menuOpen && <IoMdClose />}
        </div>
      </div>
      {menuOpen &&
        <div className="navbar-mobile">
          <ul>
            <CustomLink to="/" closeMenu={closeMenu}>{t("navbar.home")}</CustomLink>
            <CustomLink to="/gallery" closeMenu={closeMenu}>{t("navbar.gallery")}</CustomLink>
            <CustomLink to="/cv" closeMenu={closeMenu}>{t("navbar.cv")}</CustomLink>
            <CustomLink to="/contact" closeMenu={closeMenu}>{t("navbar.contact")}</CustomLink>
            <li>
              <LanguageSelect changeLanguage={changeLanguage} defaultLanguage={i18n.language} />
            </li>
          </ul>
        </div>
      }
      <div className="navbar">
        <nav>
          <ul>
            <CustomLink to="/">{t("navbar.home")}</CustomLink>
            <CustomLink to="/gallery">{t("navbar.gallery")}</CustomLink>
            <CustomLink to="/cv">{t("navbar.cv")}</CustomLink>
            <CustomLink to="/contact">{t("navbar.contact")}</CustomLink>
          </ul>
        </nav>
        <LanguageSelect changeLanguage={changeLanguage} defaultLanguage={i18n.language} />
      </div>
    </header>
  );
}

function CustomLink({ to, children, closeMenu, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: to === "/" });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} onClick={closeMenu} {...props}>
        {children}
      </Link>
    </li>
  );
}
