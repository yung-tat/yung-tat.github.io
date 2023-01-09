import * as React from "react";

export interface ITimelineProps {}

export default class Timeline extends React.Component<ITimelineProps> {
  public render() {
    return (
      <ol className="relative border-l border-white ml-4 my-4">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 2002
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Born in St. Catherines 🇨🇦
          </h3>
          <p className="hidden mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Ya boy pulled up.
          </p>
        </li>
        <li className="hidden mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Sometime in 2010
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            I found Minecraft
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            The only reason why I went into programming
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            September 2020
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Began studying at the University of Waterloo
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Started a degree in Honours Mathematics and later specialized in
            Computational Mathematics
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April - August 2021
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Internship at Timbles
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Started by web dev journey at an ed-tech startup called "Timbles".
          </p>
        </li>
        <li className="mb-4 ml-4">
          <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January - April 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Internship at SkyViewSuites
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            My first official co-op as a Web Developer at furnished rental
            agency based in Toronto.
          </p>
        </li>
        <li className="mb-4 ml-4">
          <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            September - December 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Internship at NorthernLabs
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            My second co-op as a Web Developer at venture studio called
            NorthernLabs
          </p>
        </li>
      </ol>
    );
  }
}
