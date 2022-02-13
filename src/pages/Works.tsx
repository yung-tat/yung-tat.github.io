import * as React from 'react';
import { motion } from 'framer-motion';
import { routeAnim } from '../components/Anims';

export interface IWorksProps {
}

export default class Works extends React.Component<IWorksProps> {
  public render() {
    return (
      <motion.div 
        initial='out'
        animate='in'
        exit='out'
        variants={routeAnim}
        className='max-w-xl m-auto centered text-gray-200 font-semibold pb-40'
      >
        Sorry, still working on this one... this website is one of my works tho
      </motion.div>
    );
  }
}
