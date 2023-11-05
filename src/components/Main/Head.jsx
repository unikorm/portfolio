
import styles from "../../styles/head.module.css";
import profilePhoto from "../../images/profile.webp";

const Head = () => {

    return (
        <section className={styles.headSection}>
            <h3>Adam Lednicky</h3>
            <p>just guy who trying code...</p>
            <img src={profilePhoto} alt="my profile" />
        </section>
    );
};

export default Head;