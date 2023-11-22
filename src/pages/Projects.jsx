
import styles from "../styles/projects.module.css";
import data from "../projects.json";
import ProjectPost from "./ProjectPost";

import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const [isProjectPost, setIsProjectPost] = useState(false);

    useEffect(() => {

        const handleRouteChange = () => {
            setIsProjectPost(location.pathname.startsWith("/projects/"));
        };

        window.addEventListener("popstate", handleRouteChange);
        handleRouteChange();

        return () => {
            window.removeEventListener("popstate", handleRouteChange);
        };

    }, [location.pathname]);

    const formatDate = (date) =>
      new Date(date).toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    });

    const convertPostsToArray = (object) => {
        return Object.keys(object).map((id) => object[id]);
    };

    const { projects } = data;
    const projectsArray = convertPostsToArray(projects);

    return (

        isProjectPost ? (
            <ProjectPost />
        ) : (
            <section className={styles.sectionProjects}>
            <h3>Projects</h3>
            <p>Here are some of the projects I've worked on so far.</p>
            <ul>
                {projectsArray.map((project) => (
                    <motion.li
                    key={project.id}
                    initial={{ opacity: .8 }}
                    whileHover={{ x: 7, opacity: 1 }}>
                    <Link to={`/projects/${project.id}`} key={project.id} >
                        <p>{formatDate(project.when)}</p>
                        <p>{project.title}</p>
                    </Link>
                    </motion.li>
                ))}
            </ul>
            </section>
        )
    );
};

export default Projects;