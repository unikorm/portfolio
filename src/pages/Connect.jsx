
import styles from "../styles/connect.module.css";
import profilePhoto from "../images/profile.webp";
import Github from "../images/github.svg";
import LinkedIn from "../images/linkedin.svg";
import Gmail from "../images/gmail.svg";
import Instagram from "../images/instagram.svg";

import { motion } from "framer-motion";

const Connect = () => {

    return (
        <section className={styles.connectSection}>
            <article>
                <motion.img 
                src={profilePhoto} 
                alt="my profile"
                whileHover={{ scale: .7, opacity: .7 }}
                />
                <h4>Adam Lednicky</h4>
                <p>Just one Homo Sapiens from planet called Earth, attempting to develop something working ready to connect with other human beings and different speacies too...</p>
            </article>
            <ul>
                <li><a href="mailto:adaled00@gmail.com" ><img src={Gmail} alt="gmail icon" ></img>Gmail</a></li>
                <li><a href="https://github.com/unikorm" target="_blank" rel="noopener noreferrer" ><img src={Github} alt="github icon" ></img>Github</a></li>
                <li><a href="https://www.linkedin.com/in/adam-lednicky-17159b243" target="_blank" rel="noopener noreferrer" ><img src={LinkedIn} alt="linkedin icon" ></img>LinkedIn</a></li>
                <li><a href="https://www.instagram.com/u.m.i.nat" target="_blank" rel="noopener noreferrer" ><img src={Instagram} alt="instagram icon" ></img>Instagram</a></li>
            </ul>
        </section>
    );
};

export default Connect;