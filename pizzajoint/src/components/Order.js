import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.5, when: "beforeChildren", staggerChildren: 0.4 },
  },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, when: "beforeChildren", staggerChildren: 2 },
  },
};
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>

      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <motion.div key={topping} variants={listVariants}>
            {topping}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
