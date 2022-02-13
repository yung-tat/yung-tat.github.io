import * as React from 'react';
import { motion } from 'framer-motion';
import { routeAnim } from '../components/Anims';
import WorkItem from '../components/WorkItem';

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
        className='max-w-xl m-auto centered text-gray-200 font-semibold pb-32 px-4 sm:px-0'
      >
        <h1 className='text-2xl underline underline-offset-4 mb-4'>Works</h1>
        <div className='grid grid-cols-2 gap-4'>
          <WorkItem 
            name="This Website" 
            href="" 
            desc="This site was made with react and deployed on github pages. Styled with tailwind."
          />
          <WorkItem 
            name="Bacon Number calculator" 
            href="https://github.com/yung-tat/Timbles-Challenges" 
            desc="Made with python, data manipulation, graph structures, accessed through flask api. Under Challenge 1."
          />
          <WorkItem 
            name="Youtube live checker" 
            href="" 
            desc="Uses the youtube api to give updates when a streamer goes live (from a list of streamers). Originally made for Hololive. I accidentally deleted it so you gotta trust me on this one."
          />
          <WorkItem 
            name="Chess" 
            href="" 
            desc="Created a chess game in C++ for a uni course. With AI opponents and everything! But I can't give you the link cause I'm not allowed to."
          />
        </div>
      </motion.div>
    );
  }
}
