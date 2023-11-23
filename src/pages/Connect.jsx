
import styles from "../styles/connect.module.css";
import profilePhoto from "../images/profile.jpeg";
import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as LinkedIn } from "../images/linkedin.svg";
import { ReactComponent as Gmail } from "../images/gmail.svg";
import { ReactComponent as Instagram } from "../images/instagram.svg";

import { motion } from "framer-motion";
import { useEffect } from "react";

const Connect = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={styles.connectSection}>
            <article>
                <motion.img 
                src={profilePhoto} 
                alt="my profile"
                whileHover={{ scale: .7 }}
                transition={{
                    type: "spring",
                    stiffness: 39,
                    damping: 2
                }}
                />
                <h4>Adam Lednicky</h4>
                <p>Just one Homo Sapiens from planet called Earth, attempting to develop something working ready to connect with other human beings and different speacies too...</p>
                <aside className={styles.connectTitle}>
                    <p>connect me through:</p>
                </aside>
            </article>
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
        </section>
    );
};

export default Connect;