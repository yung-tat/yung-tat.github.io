import * as React from 'react';
import Timeline from "../components/Timeline"
import StackList from '../components/StackList';

export interface IAboutProps {
}

export default class About extends React.Component<IAboutProps> {
  public render() {
    return (
      <div className='max-w-xl m-auto centered text-gray-200 font-semibold'>
        <h1 className='text-2xl underline underline-offset-4 mb-2'>About Me</h1>
          <p className='text-justify text-md mb-2 font-normal'>
            Yo, I'm a student at the University of Waterloo majoring in Honours Mathematics
            and specializing in Computational Mathematics. I do web dev stuff and I'd
            love to do game dev in the future. よろしくお願いします。🙇
          </p>
        <h1 className='text-2xl underline underline-offset-4 mb-2'>My Timeline</h1>
          <Timeline />
        <h1 className='text-2xl underline underline-offset-4 mb-1'>My Interests</h1>
        <h1 className='text-2xl underline underline-offset-4 mb-2'>My Stack</h1>
          <StackList />

      </div>
    );
  }
}
