
import styles from "../styles/header.module.css";
import logo_64 from "../images/logo-64.svg";
import light_theme from "../images/light-50.png";
import dark_theme from "../images/dark-50.png";

const Header = () => {

    return (
        <header>
            <section className={styles.sectionLogo}>
                <img src={logo_64} alt="moje logo" />
            </section>
            <section className={styles.sectionTheme}>
                <img src={light_theme} alt="ikonka svetleho modu" />
                <img src={dark_theme} alt="ikonka pre tmavy rezim" />
            </section>
        </header>
    );
};

export default Header;