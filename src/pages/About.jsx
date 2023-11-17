
import styles from "../styles/about.module.css";
import PhotoOne from "../images/aboutPhoto.webp";
import PhotoTwo from "../images/aboutPhotoTwo.webp";

import { motion } from "framer-motion";
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
            <article className={styles.aboutContent}>
                <h5>about</h5>
                <p>hi everybody, i'm men who love life. enjoy him, mainly while running, hiking, reading and creating stuff with code.</p>
                <p>and what is my strong side, i think mainly improvisation in everything, simple asimilation to actual condition and i think i like problem-solving...</p>
                <p>now about coding. my first and prefered language is <span>JavaScript</span>, but in the future i want write <span>TypeScript</span>, then in <span>HTML</span> and <span>CSS</span> i have strong foundation. from more specific technology is my favorite <span>REACT.js</span>, and i want learn <span>NEXT.js</span> above it, then <span>GIT</span> and basic of <span>SQL</span> is standart. and i have on list <span>Node.JS</span>, more on <span>SQL</span> and dive deeper into frontend development universe.</p>
                <aside>
                    <h5>connect</h5>
                    <p>same as connect</p>
                </aside>
                <h5>work</h5>
                <p>nothing from software development world yet. passionately learning and waiting for opportunities.</p>
            </article>
        </section>
    );
};

export default About;
