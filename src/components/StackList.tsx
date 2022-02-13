import React, { Component } from 'react';
import StackDropDown from './StackDropDown';
import StackContainer from './StackContainer';
import StackIcon from "./StackIcon"
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaDocker, FaAws, FaLinux, FaJava, FaPython, FaUnity } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiDjango, SiNestjs, SiRabbitmq, SiPostgresql, SiJira, SiAsana, SiMacos, SiTypescript, SiJavascript, SiCplusplus, SiC, SiRacket, SiUnity } from "react-icons/si"
import { BsBootstrapFill, BsSlack, BsTerminal, BsWindows } from "react-icons/bs";
import { DiSqllite, DiGitBranch, DiJavascript1 } from "react-icons/di"

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
        {this.state.frontend && 
        <StackContainer>
          <StackIcon icon={FaHtml5} label="HTML" color="green" fill={100}/>
          <StackIcon icon={FaCss3Alt} label="CSS" color="green" fill={70}/>
          <StackIcon icon={FaReact} label="React" color="green" fill={65}/>
          <StackIcon icon={SiRedux} label="Redux" color="green" fill={90}/>
          <StackIcon icon={SiTailwindcss} label="Tailwind CSS" color="green" fill={80}/>
          <StackIcon icon={BsBootstrapFill} label="BootStrap" color="green" fill={60}/>
        </StackContainer>}
        <StackDropDown handleClick={() => {this.handleDropDown("backend", this.state.backend)}} stateName="backend" label="Back-End"/>
        {this.state.backend && 
        <StackContainer>
          <StackIcon icon={SiDjango} label="Django" color="green" fill={50}/>
          <StackIcon icon={SiNestjs} label="Nest.JS" color="green" fill={80}/>
          <StackIcon icon={SiRabbitmq} label="Rabbit MQ" color="green" fill={60}/>
        </StackContainer>}
        <StackDropDown handleClick={() => {this.handleDropDown("database", this.state.database)}} stateName="database" label="Database"/>
        {this.state.database && 
        <StackContainer>
          <StackIcon icon={SiPostgresql} label="Postgres SQL" color="green" fill={85}/>
          <StackIcon icon={DiSqllite} label="SQLite" color="green" fill={30}/>
        </StackContainer>}
        <StackDropDown handleClick={() => {this.handleDropDown("devops", this.state.devops)}} stateName="devops" label="Dev Ops"/>
        {this.state.devops && 
        <StackContainer>
          <StackIcon icon={DiGitBranch} label="Git" color="green" fill={80}/>
          <StackIcon icon={FaGithub} label="GitHub" color="green" fill={60}/>
          <StackIcon icon={FaDocker} label="Docker" color="green" fill={40}/>
          <StackIcon icon={FaAws} label="AWS" color="green" fill={40}/>
          <StackIcon icon={SiJira} label="Jira" color="green" fill={90}/>
          <StackIcon icon={SiAsana} label="Asana" color="green" fill={100}/>
          <StackIcon icon={BsSlack} label="Slack" color="green" fill={100}/>
        </StackContainer>}
        <StackDropDown handleClick={() => {this.handleDropDown("os", this.state.os)}} stateName="os" label="Operating Systems"/>
        {this.state.os && 
        <StackContainer>
          <StackIcon icon={BsWindows} label="Windows" color="green" fill={100}/>
          <StackIcon icon={SiMacos} label="Mac Os" color="green" fill={90}/>
          <StackIcon icon={FaLinux} label="Linux" color="green" fill={65}/>
        </StackContainer>}
        <StackDropDown handleClick={() => {this.handleDropDown("other", this.state.other)}} stateName="other" label="Languages & Other"/>
        {this.state.other && 
        <StackContainer>
          <StackIcon icon={SiJavascript} label="Javascript" color="green" fill={80}/>
          <StackIcon icon={SiTypescript} label="Typescript" color="green" fill={80}/>
          <StackIcon icon={FaJava} label="Java" color="green" fill={75}/>
          <StackIcon icon={FaPython} label="Python" color="green" fill={75}/>
          <StackIcon icon={SiC} label="C" color="green" fill={85}/>
          <StackIcon icon={SiCplusplus} label="C++" color="green" fill={85}/>
          <StackIcon icon={SiRacket} label="Racket" color="green" fill={90}/>
          <StackIcon icon={FaUnity} label="Unity" color="green" fill={65}/>
          <StackIcon icon={BsTerminal} label="Terminal" color="green" fill={80}/>
        </StackContainer>}
      </>
    );
  }
}

export default StackList;