import * as React from 'react';

export interface IWorkItemProps {
  name: string;
  href: string;
  desc: string;
}

export default class WorkItem extends React.Component<IWorkItemProps> {
  public render() {
    return (
      <div className='h-50 rounded border border-slate-600 p-4 overflow-hidden'>
        <a 
          href={this.props.href}
          target="_blank"
          rel="noreferrer"
          className='text-xl underline underline-offset-2 mb-4'
        >
          {this.props.name}
        </a>
        <p className='text-md font-light text-slate-400'>
          {this.props.desc}
        </p>
      </div>
    );
  }
}
