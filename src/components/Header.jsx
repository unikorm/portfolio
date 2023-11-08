
import styles from "../styles/header.module.css";
import logo_64 from "../images/logo-64.svg";
import light_theme from "../images/light-60.png";
import dark_theme from "../images/dark-50.png";
import { ThemeContext } from "../App";

import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";



const Header = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isDarkTheme, setIsDarkTheme] = useState(theme === "dark");

    const location = useLocation();
    const scrollToTop = () => {
        if ( location.pathname !== "/" ) {
            window.scrollTo(0, 0);
        } else {
            window.scrollTo({top: 0, behavior: "smooth"})
        };
    };

    const handleToggleTheme = () => {
        toggleTheme();
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <header>
            <section className={styles.sectionLogo}>
                <Link to="/"
                onClick={scrollToTop}
                ><img src={logo_64} alt="moje logo" /></Link>
            </section>
            <section className={styles.sectionTheme}>
                {/* {
                    (theme === "dark") ? (
                        <img src={light_theme} onClick={toggleTheme} alt="ikonka svetleho modu" />
                    ) : (
                        <img src={dark_theme} onClick={toggleTheme} alt="ikonka pre tmavy rezim" />
                    )
                } */}
                {/* <AnimatePresence>
                    <motion.img
                        key={ isDarkTheme ? "dark" : "light" }
                        src={ isDarkTheme ? light_theme : dark_theme }
                        onClick={ handleToggleTheme }
                        alt={ isDarkTheme ? "ikonka svetleho modu" : "ikonka tmaveho modu" }
                        initial={{ opacity: 1 }}
                        exit={{ opacity: .5 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </AnimatePresence> */}
                <img
                    src={ isDarkTheme ? light_theme : dark_theme }
                    alt={ isDarkTheme ? "ikonka svetleho modu" : "ikonka pre tmavy rezim" }
                    onClick={ handleToggleTheme }
                />
            </section>
        </header>
    );
};

export default Header;