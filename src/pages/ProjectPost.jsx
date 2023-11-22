
import styles from "../styles/projectPost.module.css";
import data from "../projects.json";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
 
const ProjectPost = () => {

    const { id } = useParams();
    const { projects } = data;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const formatDate = (date) =>
    new Date(date).toLocaleString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
  });

    const project = projects[id];

    if (!project) {
        return (
            <p>cosi je na p***</p>
        );
    };

    return (
        <section className={styles.projectPostSection}>
            <h3>{project.title}</h3>
            <span>{formatDate(project.when)}</span>
            <p>{project.content}</p>
        </section>
    );
};

export default ProjectPost;