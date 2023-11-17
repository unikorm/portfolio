
import styles from "../../styles/blogSection.module.css";
import data from "../../blog.json";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogSection = () => {

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
        <section className={styles.blogSection}>
            <p>latest posts</p>
            <ul className={styles.articleBlogSection}>
                {postsArray.map((post) => (
                    <motion.li
                    key={post.id}
                    initial={{ opacity: .8 }}
                    whileHover={{ x: 7, opacity: 1 }}>
                        <Link to="/" key={post.id} >
                        <p>{formatDate(post.when)}</p>
                        <p>{post.title}</p>
                        </Link>
                    </motion.li>   
                ))}
            </ul>
            <Link to="/"><p>see all</p></Link>
        </section>
    );
};

export default BlogSection;
