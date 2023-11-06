
import styles from "../../styles/blogSection.module.css";
import { posts } from "../../data.json";

import { Link } from "react-router-dom";

const BlogSection = () => {

    return (
        <section className={styles.blogSection}>
            <p>latest posts</p>
            <article>
                {/* here will be .map through posts */}
            </article>
            <Link to="/"><p>see all</p></Link>
        </section>
    );
};

export default BlogSection;