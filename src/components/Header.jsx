
import styles from "../styles/header.module.css";
import logo_64 from "../images/logo-64.svg";
import light_theme from "../images/light-50.png";
import dark_theme from "../images/dark-50.png";
import { ThemeContext } from "../App";

import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const location = useLocation();
    const scrollToTop = () => {
        if ( location.pathname !== "/" ) {
            window.scrollTo(0, 0);
        } else {
            window.scrollTo({top: 0, behavior: "smooth"})
        };
    };

    const updateThemeVariables = (theme) => {
        const root = document.documentElement;
        if (theme === "light") {
          root.style.setProperty("--background", "#cad2c5");
          root.style.setProperty("--color", "#39395f");
          root.style.setProperty("--second-color", "#531d05");
        } else {
          root.style.setProperty("--background", "#2a1b3d");
          root.style.setProperty("--color", "#a4b3b6");
          root.style.setProperty("--second-color", "#a9c25de1");
        };
    };

    const handleToggling = () => {
        toggleTheme();
        updateThemeVariables(theme);
    };

    return (
        <header>
            <section className={styles.sectionLogo}>
                <Link to="/"
                onClick={scrollToTop}
                ><img src={logo_64} alt="moje logo" /></Link>
            </section>
            <section className={styles.sectionTheme}>
                {
                    (theme === "dark") ? (
                        <img src={light_theme} onClick={handleToggling} alt="ikonka svetleho modu" />
                    ) : (
                        <img src={dark_theme} onClick={handleToggling} alt="ikonka pre tmavy rezim" />
                    )
                }
            </section>
        </header>
    );
};

export default Header;