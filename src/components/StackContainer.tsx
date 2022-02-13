import * as React from 'react';
import { motion } from 'framer-motion';
import { routeAnim } from '../components/Anims';

export interface IStackContainerProps {
}

export default class StackContainer extends React.Component<IStackContainerProps> {
  public render() {
    return (
      <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={routeAnim}
      className="border rounded border-t-0 border-slate-800 grid grid-cols-4"
    >
        {this.props.children}
      </motion.div>
    );
  }
}
