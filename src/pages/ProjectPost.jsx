
import styles from "../styles/projects.module.css";
import data from "../projects.json";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
 
const ProjectPost = () => {

    const { id } = useParams();
    const { projects } = data;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const project = projects[id];

    if (!project) {
        return (
            <p>cosi je na p***</p>
        );
    };

    return (
        <section>
            <p>{project.content}</p>
        </section>
    );
};

export default ProjectPost;