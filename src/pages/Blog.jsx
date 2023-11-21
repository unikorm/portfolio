
import styles from "../styles/blog.module.css";
import data from "../blog.json";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Blog = () => {

    const formatDate = (date) =>
      new Date(date).toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    });

    const convertPostsToArray = (object) => {
        return Object.keys(object).map((id) => object[id]);
    };

    const { posts } = data;
    const postsArray = convertPostsToArray(posts);

return (
    <section className={styles.sectionBlog}>
        <h3>Blog</h3>
        <p>"X" posts about stuff what matter...</p>
        <ul>
            {postsArray.map((post) => (
                <motion.li
                key={post.id}
                initial={{ opacity: .8 }}
                whileHover={{ x: 7, opacity: 1 }}>
                    <Link to={`/${post.id}`} key={post.id} >
                    <p>{formatDate(post.when)}</p>
                    <p>{post.title}</p>
                    </Link>
                </motion.li>   
            ))}
        </ul>

    </section>
);

};

export default Blog;