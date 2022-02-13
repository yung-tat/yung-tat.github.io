import * as React from 'react';
import { motion } from 'framer-motion';
import { routeAnim } from '../components/Anims';

export interface IContactsProps {
}

export default class Contacts extends React.Component<IContactsProps> {
  public render() {
    return (
      <motion.div 
        initial='out'
        animate='in'
        exit='out'
        variants={routeAnim}
        className='max-w-xl m-auto centered text-gray-200 font-semibold pb-40'
      >
        
      </motion.div>
    );
  }
}
