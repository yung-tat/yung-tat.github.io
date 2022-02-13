import * as React from 'react';
import Timeline from "../components/Timeline"
import { motion } from 'framer-motion';
import { routeAnim } from '../components/Anims';

export interface IAboutProps {
}

export default class About extends React.Component<IAboutProps> {
  public render() {
    return (
      <motion.div 
        initial='out'
        animate='in'
        exit='out'
        variants={routeAnim}
        className='max-w-xl m-auto centered text-gray-200 font-semibold pb-40'
      >
        <h1 className='text-2xl underline underline-offset-4 mb-2'>About Me</h1>
        <p className='text-justify text-md mb-2 font-normal'>
          Yo, I'm a student at the University of Waterloo majoring in Honours Mathematics
          and specializing in Computational Mathematics. I do web dev stuff and I'd
          love to do game dev in the future. I also made this website myself.
        </p>
        <p className='text-justify text-md mb-2 font-normal'>
          よろしくお願いします。🙇
        </p>
        <br />
        <h1 className='text-2xl underline underline-offset-4 mb-2'>My Timeline</h1>
        <Timeline />
        <br />
        <h1 className='text-2xl underline underline-offset-4 mb-1'>My Interests</h1>
        <ul className='list-disc text-md mb-2 font-normal ml-4'>
          <li className='mb-1'>
            Music - Kanye West 🐐 / City Pop / Joe Hisaishi
            <a
              href="https://open.spotify.com/playlist/58kAOJxF8zbY7u7Y8DM3h2?si=3932e55f695f46e5"
              className='text-light text-xs text-gray-600 ml-2'
              target="_blank"
              rel="noreferrer"
            >
              Spotify Playlist
              </a>
          </li>
          <li className='mb-1'>
            Movies - Good Burger / The Nice Guys / Your Name / SpiderMan 3
          </li>
          <li className='mb-1'>
            Shows - The Boys / Attack on Titan / Neon Genesis Evangelion
          </li>
          <li className='mb-1'>
            Sports - Soccer
            <small className='text-light text-xs text-gray-600 ml-2'>
              I'm terrible tho
            </small>
          </li>
          <li className='mb-1'>
            Hobbies - Playing Games / Learning Languages 🇯🇵
          </li>
        </ul>
      </motion.div>
    );
  }
}
