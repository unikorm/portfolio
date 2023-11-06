
import styles from "../../styles/head.module.css";
import profilePhoto from "../../images/profile.webp";
import { token } from "../../privat";

import { useState, useEffect } from "react";

const Head = () => {

    const ghUserName = "unikorm";
    const apiUrl = `https://api.github.com/users/${ghUserName}/repos`;
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const body = {
        "query": `query {
        user(login: "${ghUserName}") {
          name
          contributionsCollection {
            contributionCalendar {
              colors
              totalContributions
              weeks {
                contributionDays {
                  color
                  contributionCount
                  date
                  weekday
                }
                firstDay
              }
            }
          }
        }
      }`
    };

    const [contributions, setContributions] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers });
                if (!response.ok) {
                    throw new Error("Network doesn't work very well");
                };
                const data = await response.json();
                const totalContributions = data.reduce((total, repo) => total + repo.stargazers_count, 0);
                setContributions(totalContributions);
                console.log(data);
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
            {contributions !== null ? 
                <p>{contributions} my total contributions on GitHub so far</p>
                : <p>my total contributions on GitHub so far</p> }
            <article>
                <p>Hi and Welcome my fellow readers on my personal website. it's pleasure to have you here. i'm aspiring <span>frontend/web developer</span>, who wants to build something what works mainly with <span>JS</span>, <span>React</span> and <span>CSS</span>, but in my great future i want work with <span>tailwindCSS</span>, <span>NEXT.js</span> or <span>TypeScript</span> and of course, much more...</p>
            </article>
        </section>
    );
};

export default Head;