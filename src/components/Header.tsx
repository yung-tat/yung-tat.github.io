import * as React from 'react';

export interface IHeaderProps {
}

export default class Header extends React.Component<IHeaderProps> {
  public render() {
    return (
      <div className='max-w-xl m-auto centered text-gray-200'>
        <div className='flex items-center py-5'>
          <div className='mr-auto'>
            <h1 className='text-5xl'>Issac Liu</h1>
            <h2 className='text-xl text-gray-400'>Web Developer - Aspiring Game Developer</h2>
            <h2 className='text-sm text-gray-400'>(Aspiring GOAT Too)</h2>
          </div>
          <img 
            className='w-40 rounded-full border-2 border-gray-200'
            src={require("../assets/Cropped.jpeg")} 
            alt="Profile Pic ahlie"
          />
        </div>
      </div>
    );
  }
}
