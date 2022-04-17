import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {

    const containerVarient = {
        visible:{
            opacity:1,
            transition:{
                staggerChildren: 0.2,    
            }
        },

    }

    const itemVarient = {
        visible:{
            opacity:1,
            scale:[1,1.2],
            transition:{
                type:"tween",
                scale:{
                    yoyo:Infinity
                },
            }
        }
    }


  return (
 
    <motion.div className='container' variants={containerVarient} animate="visible">
         <motion.div className='item' variants={itemVarient}></motion.div>
         <motion.div className='item' variants={itemVarient}></motion.div>
         <motion.div className='item' variants={itemVarient}></motion.div>
         <motion.div className='item' variants={itemVarient}></motion.div>
         <motion.div className='item' variants={itemVarient}></motion.div>

     </motion.div>
  )
}

export default Loader