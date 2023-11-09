
import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {

    const container = {
        visible: {
          transition: {
            delayChildren: 0.3,
            // staggerChildren: 0.2
          }
        }
    };
      
      const items = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
    };

    const childrenWithVariants = React.Children.map(children, child => (
        <motion.div variants={items}>{child}</motion.div>
    ));

  return (
    <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
    >
      {childrenWithVariants}
    </motion.div>
  );
};

export default PageTransition;
