
import styles from "../styles/blogPost.module.css";
import data from "../blog.json";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {

    const { id } = useParams();
    const { posts } = data;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const formatDate = (date) =>
      new Date(date).toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    });

    const post = posts[id];

    if (!post) {
        return (
            <p>cosi je na p***</p>
        );
    };


    return (
        <section className={styles.blogPostSection}>
            <h3>{post.title}</h3>
            <span>{formatDate(post.when)}</span>
            <p>{post.content}</p>
        </section>
    );
};

export default BlogPost;