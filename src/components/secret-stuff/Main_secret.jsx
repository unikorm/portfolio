
import styles from "../../styles/styles_secret/main_secret.module.css";

import { motion } from "framer-motion";
import { useRef } from "react";

const MainSecret = () => {

    const constraintsRef = useRef(null);

    return (
        <div className={styles.wrapper}>
        <section className={styles.mainSectionSecret}>
            <motion.aside className={styles.funContainer} ref={constraintsRef}>
                <motion.div className={styles.funItem} drag dragConstraints={constraintsRef}>
                <p>👽</p>
                </motion.div>
            </motion.aside>
            
        </section>
        </div>
    );
};

export default MainSecret;