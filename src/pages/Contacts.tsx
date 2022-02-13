import * as React from 'react';
import { motion } from 'framer-motion';
import { routeAnim } from '../components/Anims';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

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
        className='max-w-xl m-auto centered text-gray-200 pb-40'
      >
        <h1 className='text-3xl'>You can reach me on:</h1>
        <ul className='text-semibold text-2xl ml-4'>
          <li className='my-4'>
            <a href="https://www.instagram.com/yungtat_/" target="_blank" rel="noreferrer" className='flex items-center text-xl'>
              <BsInstagram className='mr-4'/>
              Instagram
            </a>
          </li>
          <li className='my-4'>
            <a href="mailto:issac.liuyt@gmail.com" target="_blank" rel="noreferrer" className='flex items-center text-xl'>
              <HiOutlineMail className='mr-4'/>
              Mail
            </a>
          </li>
          <li className='my-4'>
            <a href="https://www.linkedin.com/in/issac-liu-890b281b1/" target="_blank" rel="noreferrer" className='flex items-center text-xl'>
              <BsLinkedin className='mr-4'/>
              LinkedIn
            </a>
          </li>
          <li className='my-4'>
            <a href="https://github.com/yung-tat" target="_blank" rel="noreferrer" className='flex items-center text-xl'>
              <BsGithub className='mr-4'/>
              GitHub
            </a>
          </li>
        </ul>
      </motion.div>
    );
  }
}
