
import styles from "../../styles/head.module.css";
import profilePhoto from "../../images/profile.webp";

const Head = () => {

    return (
        <section className={styles.headSection}>
            <h3>Adam Lednicky</h3>
            <p>just guy who trying code...</p>
            <img src={profilePhoto} alt="my profile" />
            {/* here will be total amout of my contributions from github API */}
            <article>
                <p>Hi and Welcome my fellow readers on my personal website. it's pleasure to have you here. i'm aspiring <span>frontend/web developer</span>, who wants to build something what works mainly with <span>JS</span>, <span>React</span> and <span>CSS</span>, but in the my great future i want work with <span>tailwindCSS</span>, <span>NEXT.js</span> or <span>TypeScript</span> and of course, much more...</p>
            </article>
        </section>
    );
};

export default Head;