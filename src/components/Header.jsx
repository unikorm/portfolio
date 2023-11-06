
import styles from "../styles/header.module.css";
import logo_64 from "../images/logo-64.svg";
import light_theme from "../images/light-50.png";
import dark_theme from "../images/dark-50.png";

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();
    const scrollToTop = () => {
        if ( location.pathname !== "/" ) {
            window.scrollTo(0, 0);
        } else {
            window.scrollTo({top: 0, behavior: "smooth"})
        };
    };

    return (
        <header>
            <section className={styles.sectionLogo}>
                <Link to="/"
                onClick={scrollToTop}
                ><img src={logo_64} alt="moje logo" /></Link>
            </section>
            <section className={styles.sectionTheme}>
                <img src={light_theme} alt="ikonka svetleho modu" />
                <img src={dark_theme} alt="ikonka pre tmavy rezim" />
            </section>
        </header>
    );
};

export default Header;