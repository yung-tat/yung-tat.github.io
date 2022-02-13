import React, { Component } from 'react';
import { BiChevronDown } from "react-icons/bi"
import StackDropDown from './StackDropDown';

export interface IStackListProps {
}

export interface state {
  frontend: boolean;
  backend: boolean;
  database: boolean;
  devops: boolean;
  os: boolean;
  other: boolean;
}

class StackList extends Component<IStackListProps, state> {
  constructor(props: IStackListProps) {
    super(props);
    this.state = {
      frontend: false,
      backend: false,
      database: false,
      devops: false,
      os: false,
      other: false,
    }
  }

  handleDropDown = (stateName: string, onoff: boolean) => {
    let newState: any = {};
    newState[stateName] = !onoff;
    this.setState(newState)
  }

  render() {
    return (
      <>
        <StackDropDown handleClick={() => {this.handleDropDown("frontend", this.state.frontend)}} stateName="frontend" label="Front-End"/>
        {this.state.frontend }
        <StackDropDown handleClick={() => {this.handleDropDown("backend", this.state.backend)}} stateName="backend" label="Back-End"/>
        {this.state.backend }
        <StackDropDown handleClick={() => {this.handleDropDown("database", this.state.database)}} stateName="database" label="Database"/>
        {this.state.database }
        <StackDropDown handleClick={() => {this.handleDropDown("devops", this.state.devops)}} stateName="devops" label="Dev Ops"/>
        {this.state.devops }
        <StackDropDown handleClick={() => {this.handleDropDown("os", this.state.os)}} stateName="os" label="Operating Systems"/>
        {this.state.os }
        <StackDropDown handleClick={() => {this.handleDropDown("other", this.state.other)}} stateName="other" label="Other"/>
        {this.state.other }
      </>
    );
  }
}

export default StackList;