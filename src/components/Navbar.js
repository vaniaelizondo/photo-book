import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <header>
      <div className="title">
        <Link to="/" className="name">
          Héloïse Baland
        </Link>
        <div className="subtitle">{t("navbar.subtitle")}</div>
      </div>
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

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: to === "/" });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
