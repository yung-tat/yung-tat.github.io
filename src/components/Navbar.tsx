import * as React from 'react';
import { AiOutlineMeh } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { dropdown } from '../components/Anims';

export interface INavbarProps {
}

interface state {
  toggle: boolean;
}

export default class Navbar extends React.Component<INavbarProps, state> {
  constructor(props: state) {
    super(props);
    this.state = {
      toggle: false,
    }
  }

  toggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }

  public render() {
    return (
      <>
        <div className='hidden text-xl py-4 sm:flex'>
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
        <div 
          style={{backgroundColor: "#0f172a"}}
          className='visible sm:hidden text-xl py-4 flex items-center px-6 border-b border-slate-800'
        >
          <Link
            to="/"
            className='rounded flex items-center mr-4 px-2 py-2 hover:bg-slate-700'
          >
            <AiOutlineMeh className='mr-3 text-3xl'/>
            Issac Liu
          </Link>
          <button
            className='ml-auto rounded p-4 hover:bg-slate-700'
            onClick={ this.toggle }
          >
            <GiHamburgerMenu />
          </button>
        </div>
        { this.state.toggle &&
          <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={dropdown}
            className='visible sm:hidden flex flex-col text-center text-lg'
          >
            <Link 
              onClick={ this.toggle }
              to="works"
              className='rounded w-auto px-2 py-2 hover:bg-slate-700 border-b border-slate-800'
            >
              Works
            </Link>
            <Link 
              onClick={ this.toggle }
              to="stack"
              className='rounded w-auto px-2 py-2 hover:bg-slate-700 border-b border-slate-800'
            >
              Stack
            </Link>
            <Link 
              onClick={ this.toggle }
              to="contacts"
              className='rounded w-auto px-2 py-2 hover:bg-slate-700 border-b border-slate-800'
            >
              Contacts
            </Link>
          </motion.div>
        }
      </>
    );
  }
}
