
import styles from "../styles/about.module.css";
import PhotoOne from "../images/aboutPhotoResize.webp";
import PhotoTwo from "../images/aboutPhotoTwoResize.webp";
import PhotoThree from "../images/aboutThree.jpg";
import PhotoFour from "../images/aboutFour.jpg";
import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as LinkedIn } from "../images/linkedin.svg";
import { ReactComponent as Gmail } from "../images/gmail.svg";
import { ReactComponent as Instagram } from "../images/instagram.svg";

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
            <aside className={styles.asidePhoto}>
                <motion.img
                src={PhotoOne} alt="me"
                initial={{rotate: -5}}
                whileHover={{rotate: 5}}
                />
                <motion.img
                src={PhotoTwo} alt="me too"
                initial={{rotate: 9}}
                whileHover={{rotate: -9}}
                />
                <motion.img
                src={PhotoThree} alt="tooo"
                initial={{rotate: -9}}
                whileHover={{rotate: 9}}
                />
                <motion.img
                src={PhotoFour} alt="tooooo"
                initial={{rotate: 4}}
                whileHover={{rotate: -4}}
                />
            </aside>
            <article className={styles.aboutContent}>
                <h5>about</h5>
                <p>hi everybody, i'm men who love life. enjoy him, mainly while running, hiking, reading and creating stuff with code.</p>
                <p>and what is my strong side, i think mainly improvisation in everything, simple asimilation to actual condition and i think i like problem-solving...</p>
                <p>now about coding. my first and prefered language is <span>JavaScript</span>, but in the future i want write <span>TypeScript</span>, then in <span>HTML</span> and <span>CSS</span> i have strong foundation. from more specific technology is my favorite <span>REACT.js</span>, and i want learn <span>NEXT.js</span> above it, then <span>GIT</span> and basic of <span>SQL</span> is standart. and i have on list <span>Node.JS</span>, more on <span>SQL</span> and diveing deeper into frontend development universe.</p>
                <aside className={styles.asideContact}>
                    <h5>connect</h5>
                    <ul>
                        <motion.li 
                        whileHover={{ opacity: 1, x: 40, scale: 1.2 }}
                        initial={{ opacity: .85, x: 0 }}
                        ><a href="mailto:adaled00@gmail.com" ><Gmail className={styles.socialIcon} /><p>Gmail</p></a></motion.li>
                        <motion.li
                        whileHover={{ opacity: 1, x: 40, scale: 1.2 }}
                        initial={{ opacity: .85, x: 0 }}
                        ><a href="https://github.com/unikorm" target="_blank" rel="noopener noreferrer" ><Github className={styles.socialIcon} /><p>Github</p></a></motion.li>
                        <motion.li
                        whileHover={{ opacity: 1, x: 40, scale: 1.2 }}
                        initial={{ opacity: .85, x: 0 }}
                        ><a href="https://www.linkedin.com/in/adam-lednicky-17159b243" target="_blank" rel="noopener noreferrer" ><LinkedIn className={styles.socialIcon} /><p>LinkedIn</p></a></motion.li>
                        <motion.li
                        whileHover={{ opacity: 1, x: 40, scale: 1.2 }}
                        initial={{ opacity: .85, x: 0 }}
                        ><a href="https://www.instagram.com/u.m.i.nat" target="_blank" rel="noopener noreferrer" ><Instagram className={styles.socialIcon} /><p>Instagram</p></a></motion.li>
                    </ul>
                </aside>
                <h5>work</h5>
                <p>nothing from software development world yet. passionately learning and waiting for opportunities.</p>
            </article>
        </section>
    );
};

export default About;
