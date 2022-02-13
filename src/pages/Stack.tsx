import * as React from 'react';
import StackList from '../components/StackList';
import { motion } from 'framer-motion';
import { routeAnim } from '../components/Anims';

export interface IStackProps {
}

export default class Stack extends React.Component<IStackProps> {
  public render() {
    return (
      <motion.div 
        initial='out'
        animate='in'
        exit='out'
        variants={routeAnim}
        className='max-w-xl m-auto centered text-gray-200 font-semibold pb-40'
      >
        <h1 className='text-2xl underline underline-offset-4 mb-2'>My Stack</h1>
        <StackList />
      </motion.div>
    );
  }
}
