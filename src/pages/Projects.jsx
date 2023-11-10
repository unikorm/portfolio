
import styles from "../styles/projects.module.css";

import { useEffect } from "react";

const Projects = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={styles.sectionProjects}>
            <h3>here are some of my projects I done/doing</h3>
        </section>
    );
};

export default Projects;