import * as React from 'react';

export interface IHeaderProps {
}

export default class Header extends React.Component<IHeaderProps> {
  public render() {
    return (
      <div className='max-w-xl m-auto centered text-gray-200'>
        <div className='flex items-center py-5 flex-col-reverse sm:flex-row px-4 sm:px-0'>
          <div className='flex flex-col items-center sm:items-start sm:mr-auto'>
            <h1 className='text-4xl sm:text-5xl'>Issac Liu</h1>
            <h2 className='text-lg sm:text-xl text-gray-400 text-center sm:text-left'>Web Developer - Aspiring Game Developer</h2>
            <h2 className='text-sm text-gray-400 font-light'>Student in Computational Mathematics</h2>
          </div>
          <img 
            className='w-40 rounded-full border-2 border-gray-200 mb-4 sm:mb-0'
            src={require("../assets/Cropped.jpeg")} 
            alt="Profile Pic ahlie"
          />
        </div>
      </div>
    );
  }
}
