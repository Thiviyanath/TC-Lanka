import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Careers", "/careers"],
  ["Blog", "/blog"],
];

export default function Navbar() {
  const { i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <motion.header
      className="nav-shell"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Link className="brand" to="/">
        TC<span>LANKA</span>
      </Link>

      <nav>
        {links.map(([name, path]) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {name}
          </NavLink>
        ))}
      </nav>

      <div className="nav-right">
        <div className="lang-switch">
          <button onClick={() => changeLang("en")}>EN</button>
          <button onClick={() => changeLang("de")}>DE</button>
        </div>

        <Link className="nav-cta" to="/contact">
          Start Project
        </Link>
      </div>
    </motion.header>
  );
}