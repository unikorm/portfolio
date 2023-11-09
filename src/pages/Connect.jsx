
import styles from "../styles/connect.module.css";
import profilePhoto from "../images/profile.webp";

import { motion } from "framer-motion";

const Connect = () => {

    return (
        <section className={styles.connectSection}>
            <article>
                <motion.img 
                src={profilePhoto} 
                alt="my profile"
                whileHover={{ scale: .7, opacity: .7 }}
                />
                <h4>Adam Lednicky</h4>
                <p>Just one Homo Sapiens from planet called Earth trying to develop something working ready to connect with other human beings and diferent speacies...</p>
            </article>
        </section>
    );
};

export default Connect;