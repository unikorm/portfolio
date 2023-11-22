
import styles from "../styles/blog.module.css";
import data from "../blog.json";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {

    const { id } = useParams();
    const { posts } = data;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const post = posts[id];

    if (!post) {
        return (
            <p>cosi je na p***</p>
        );
    };


    return (
        <section>
            <p>{post.content}</p>
        </section>
    );
};

export default BlogPost;