
import styles from "../../styles/head.module.css";
import profilePhoto from "../../images/profile.webp";
import { token } from "../../privat";
import { ReactComponent as ArrowIcon } from "../../images/arrow.svg";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animate, motion } from "framer-motion";

const Head = () => {

    const ghUserName = "unikorm";
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const body = {
        "query": `query {
        user(login: "${ghUserName}") {
          name
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }`
    };

    const [contributions, setContributions] = useState(undefined);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.github.com/graphql', { 
                    method: 'POST', 
                    body: JSON.stringify(body), 
                    headers: headers,
                });
                if (!response.ok) {
                    throw new Error("Network doesn't work very well");
                };
                const responseData = await response.json();
                const totalContributions = responseData.data.user.contributionsCollection.contributionCalendar.totalContributions;
                setContributions(totalContributions); 
            } catch (error) {
                console.error(error);
            };
        };
        fetchData();
    }, []);

    return (
        <section className={styles.headSection}>
            <h3>Adam Lednicky</h3>
            <p>just guy who trying code...</p>
            <motion.img 
            src={profilePhoto} 
            alt="my profile"
            // initial={{ scale: 0 }}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{
                type: "spring",
                stiffness: 39,
                damping: 2
            }}
            />
            {contributions !== undefined ? 
                <p><a href="https://github.com/unikorm" target="_blank" rel="noopener noreferrer" className={styles.contributions}>{contributions}</a> contributions on GitHub btw...</p>
            : <p>I love my princess...</p>
            }
            <article className={styles.articleAbout}>
                <p>Hi and Welcome my fellow readers on my personal website. it's pleasure to have you here. i'm aspiring <span className={styles.textHight}>frontend/web developer</span>, who wants to build something what works mainly with <span className={styles.textHight}>JS</span>, <span className={styles.textHight}>React</span> and <span className={styles.textHight}>CSS</span>, but in my great future i want work with <span className={styles.textHight}>tailwindCSS</span>, <span className={styles.textHight}>NEXT.js</span> or <span className={styles.textHight}>TypeScript</span> and of course, much more...</p>
            </article>
            <ul className={styles.articleMenu}>
                <motion.li
                whileHover={{ opacity: 1, x: 20 }}
                initial={{ opacity: .85, x: 0 }}
                ><Link to="/connect"><ArrowIcon className={styles.arrowIcon} /><p>ways to connect</p></Link></motion.li>
                <motion.li
                whileHover={{ opacity: 1, x: 20 }}
                initial={{ opacity: .85, x: 0 }}
                ><Link to="/about"><ArrowIcon className={styles.arrowIcon} /><p>about myself</p></Link></motion.li>
                <motion.li
                whileHover={{ opacity: 1, x: 20 }}
                initial={{ opacity: .85, x: 0 }}
                ><Link to="/projects"><ArrowIcon className={styles.arrowIcon} /><p>projects</p></Link></motion.li>
            </ul>

        </section>
    );
};

export default Head;