
import styles from "../../styles/head.module.css";
import profilePhoto from "../../images/profile.webp";
import { token } from "../../privat";

import { useState, useEffect } from "react";

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
            <img src={profilePhoto} alt="my profile" />
            {contributions !== undefined ? 
                <p><span className={styles.spanContributions}>{contributions}</span> contributions on GitHub btw...</p>
            : <p></p>
            }
            <article>
                <p>Hi and Welcome my fellow readers on my personal website. it's pleasure to have you here. i'm aspiring <span className={styles.textHight}>frontend/web developer</span>, who wants to build something what works mainly with <span className={styles.textHight}>JS</span>, <span className={styles.textHight}>React</span> and <span className={styles.textHight}>CSS</span>, but in my great future i want work with <span className={styles.textHight}>tailwindCSS</span>, <span className={styles.textHight}>NEXT.js</span> or <span className={styles.textHight}>TypeScript</span> and of course, much more...</p>
            </article>
        </section>
    );
};

export default Head;