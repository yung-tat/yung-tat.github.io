import * as React from 'react';

export interface IStackIconProps {
  fill: number;
  color: string;
  icon: any;
  label: string;
}

export default class StackIcon extends React.Component<IStackIconProps> {
  public render() {
    const Icon = this.props.icon
    return (
      <div
        className='h-36 flex flex-col items-center justify-center border border-slate-800 rounded box-content'
      >
        <Icon className='w-20 h-20 text-gray-200' />
        <div className='text-gray-200'>{this.props.label}</div>
        <div className='w-28 h-4 border border-slate-800 bg-slate-700 rounded overflow-hidden'>
          <div
            className={'bg-' + this.props.color + '-400 visible h-full rounded'}
            style={{width: this.props.fill + "%"}}
          >
          </div>
        </div>
      </div>
    );
  }
}
