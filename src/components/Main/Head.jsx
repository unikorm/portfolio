
import styles from "../../styles/head.module.css";
import profilePhoto from "../../images/profile.webp";
import { token } from "../../privat";
import pngArrow from "../../images/arrow-24.png";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
            whileHover={{ scale: 1.3, rotate: 320 }}
            />
            {contributions !== undefined ? 
                <p><a href="https://github.com/unikorm" target="_blank" rel="noopener noreferrer" className={styles.contributions}>{contributions}</a> contributions on GitHub btw...</p>
            : <p></p>
            }
            <article className={styles.articleAbout}>
                <p>Hi and Welcome my fellow readers on my personal website. it's pleasure to have you here. i'm aspiring <span className={styles.textHight}>frontend/web developer</span>, who wants to build something what works mainly with <span className={styles.textHight}>JS</span>, <span className={styles.textHight}>React</span> and <span className={styles.textHight}>CSS</span>, but in my great future i want work with <span className={styles.textHight}>tailwindCSS</span>, <span className={styles.textHight}>NEXT.js</span> or <span className={styles.textHight}>TypeScript</span> and of course, much more...</p>
            </article>
            <article className={styles.articleMenu}>
                <Link to="/connect"><img src={pngArrow} alt="arrow" /><p>ways to connect</p></Link>
                <Link to="/about"><img src={pngArrow} alt="arrow" /><p>about myself</p></Link>
                <Link to="/"><img src={pngArrow} alt="arrow" /><p>projects</p></Link>
            </article>

        </section>
    );
};

export default Head;