
import styles from "../styles/about.module.css";
import PhotoOne from "../images/aboutPhoto.webp";
import PhotoTwo from "../images/aboutPhotoTwo.webp";

import { motion } from "framer-motion";

const About = () => {

    return (
        <section className={styles.sectionAbout}>
            <h3>Just a quick glimpse</h3>
            <span>about ME</span>
            <aside>
                <motion.img
                src={PhotoOne} alt="me"
                initial={{rotate: 5, x: 30}}
                />
                <motion.img
                src={PhotoTwo} alt="me too"
                initial={{rotate: -5, x: -84, y: -5}}
                />
            </aside>
            <article>
                <h5>about</h5>
                <p></p>
                <aside>
                    <h5>connect</h5>
                    <p></p>
                </aside>
                <h5>work</h5>
                <p></p>
            </article>
        </section>
    );
};

export default About;
