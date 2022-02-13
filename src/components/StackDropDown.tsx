import * as React from 'react';
import { BiChevronDown } from "react-icons/bi"

export interface IStackDropDownProps {
  handleClick: any;
  stateName: string;
  label: string;
}

export default class StackDropDown extends React.Component<IStackDropDownProps> {
  public render() {
    return (
      <button 
        id={this.props.stateName + "Button"}
        className="w-full border rounded border-slate-800 flex items-center p-3 font-semibold text-xl hover:bg-slate-800"
        type="button"
        onClick={this.props.handleClick}
      >
        {this.props.label}
        <BiChevronDown className='ml-auto'/>
      </button>
    );
  }
}
