import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  return (
    <div
      style={{ height: '75vh' }}
      className={` h-screen flex xl:flex-row  gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      <motion.div
        style={{ alignSelf: 'center' }}
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100  rounded-2xl"
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Trendsetting <span className="text-[#915EFF]">Designs</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            While quality is paramount, we also understand the importance of
            staying on-trend. Fashion is ever-evolving, and we strive to be at
            the forefront of the latest styles and trends in the industry
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
