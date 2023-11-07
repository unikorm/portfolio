
import styles from "../../styles/blogSection.module.css";
import data from "../../data.json";

import { Link } from "react-router-dom";

const BlogSection = () => {

    const convertPostsToArray = (object) => {
        return Object.keys(object).map((id) => object[id]);
    };
    const { posts } = data;
    const postsArray = convertPostsToArray(posts);

    return (
        <section className={styles.blogSection}>
            <p>latest posts</p>
            <article className={styles.articleBlogSection}>
                {postsArray.map((post) => (
                    <Link to="/" key={post.id} >
                        <p>{post.when}</p>
                        <p>{post.title}</p>
                    </Link>
                ))}
            </article>
            <Link to="/"><p>see all</p></Link>
        </section>
    );
};

export default BlogSection;

// export const formatDate = (date: string) =>
//   new Date(date).toLocaleString('en-US', {
//     month: 'short',
//     day: '2-digit',
//     year: 'numeric',
//   })     "2023-10-17"