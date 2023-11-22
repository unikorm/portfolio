
import styles from "../styles/projects.module.css";

import { useEffect } from "react";

const Projects = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={styles.sectionProjects}>
            <h3>Projects</h3>
            <p>Here are some of the projects I've worked on so far.</p>
            <ul>
                
            </ul>
        </section>
    );
};

export default Projects;