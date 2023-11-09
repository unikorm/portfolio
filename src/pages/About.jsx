
import styles from "../styles/about.module.css";
import PhotoOne from "../images/aboutPhoto.webp";

import { motion } from "framer-motion";

const About = () => {

    return (
        <section className={styles.sectionAbout}>
            <h3>Just a quick glimpse</h3>
            <span>about ME</span>
            <motion.img
            src={PhotoOne} alt="me"
            initial={{rotate: 5, x: 20}}
            />
            <h5>about</h5>
            <p></p>
            <h5>connect</h5>
            <p></p>
            <h5>work</h5>
            <p></p>
        </section>
    );
};

export default About;
