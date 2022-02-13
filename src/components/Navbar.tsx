import * as React from 'react';
import { AiOutlineMeh } from 'react-icons/ai'
import { Link } from 'react-router-dom';

export interface INavbarProps {
}

export default class Navbar extends React.Component<INavbarProps> {
  public render() {
    return (
      <div className='text-xl py-4 flex'>
        <Link
          to="/"
          className='rounded flex items-center mr-4 px-2 py-2 hover:bg-slate-700'
        >
          <AiOutlineMeh className='mr-3 text-3xl'/>
          Issac Liu
        </Link>
        <div className='border-r-2 mr-4 border-gray-200'></div>
        <Link 
          to="works"
          className='rounded mr-4 px-2 py-2 hover:bg-slate-700'
        >
          Works
        </Link>
        <Link 
          to="stack"
          className='rounded mr-auto px-2 py-2 hover:bg-slate-700'
        >
          Stack
        </Link>
        <Link 
          to="contacts"
          className='rounded mr-4 px-2 py-2 hover:bg-slate-700'
        >
          Contacts
        </Link>
      </div>
    );
  }
}
