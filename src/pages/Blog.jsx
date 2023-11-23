
import styles from "../styles/blog.module.css";
import data from "../blog.json";
import BlogPost from "./BlogPost";

import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Blog = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const [isBlogPost, setIsBlogPost] = useState(false);

    useEffect(() => {

        const handleRouteChange = () => {
            setIsBlogPost(location.pathname.startsWith("/blog/"));
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

    const numOFPosts = (data) => {
        const postCount = data.length;
        return `${postCount} ${postCount > 1 ? "posts" : "post"}`;
    };

    const convertPostsToArray = (object) => {
        return Object.keys(object).map((id) => object[id]);
    };

    const { posts } = data;
    const postsArray = convertPostsToArray(posts);

return ( 
    
    isBlogPost ? (
        <BlogPost />
    ) : (
        <section className={styles.sectionBlog}>
            <h3>Blog</h3>
            <p>{numOFPosts(postsArray)} about stuff what matter...</p>
            <ul>
                {postsArray.map((post) => (
                    <motion.li
                    key={post.id}
                    initial={{ opacity: .8 }}
                    whileHover={{ x: 7, opacity: 1 }}>
                    <Link to={`/blog/${post.id}`} key={post.id} >
                        <p>{formatDate(post.when)}</p>
                        <p>{post.title}</p>
                        </Link>
                    </motion.li>   
                ))}
            </ul>
        </section>
    )    
);

};

export default Blog;
