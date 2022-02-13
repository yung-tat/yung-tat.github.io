import * as React from 'react';
import { motion } from 'framer-motion';
import { dropdown } from '../components/Anims';

export interface IStackContainerProps {
}

export default class StackContainer extends React.Component<IStackContainerProps> {
  public render() {
    return (
      <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={dropdown}
      className="border rounded border-t-0 border-slate-800 grid grid-cols-3 sm:grid-cols-4"
      >
        {this.props.children}
      </motion.div>
    );
  }
}
