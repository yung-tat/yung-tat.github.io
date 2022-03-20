import * as React from 'react';
import { AiFillLinkedin, AiFillPhone } from 'react-icons/ai';
import { BsFillHouseFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';

export interface IResumeProps {
}

export default class Resume extends React.Component<IResumeProps> {
  public render() {
    
    const pageStyle: any = {
      width: "21cm",
      height: "29.7cm",

      background: "#fafaff",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)"
    };

    const darkBg = {
      backgroundColor: "#30343f",
      color: "#fafaff"
    }

    const lightBg = {
      backgroundColor: "#fafaff",
      color: "#30343f"
    }

    const hlBg = {
      backgroundColor: "#e4d9ff",
      color: "#30343f"
    }

    const titleDiv = {
      borderBottom: "2px solid #30343f",
      fontWeight: 700,
    }

    const separate = {
      borderBottom: "1px dashed #30343f"
    }

    const frontend = ["HTML", "CSS", "React", "Redux", "Tailwind CSS", "BootStrap"]
    const backend = ["Django", "NestJs", "RabbitMQ"]
    const database = ["PostGres SQL", "SQLite"]
    const devops = ["Git", "GitHub", "Docker", "AWS", "Jira", "Asana", "Slack"]
    const os = ["Windows", "MacOs", "Linux"]
    const languages = ["JavaScript", "TypeScript", "Java", "Python", "C", "C++", "Racket", "Unity", "Bash"]

    return (
      <div
        className='mb-16'
        style={
          pageStyle
        }
      >
        <div 
          className='py-10 flex flex-col items-center gap-2'
          style={darkBg}
        >
          <div className='text-5xl'>Issac Liu</div>
          <div className='text-xl'>Honours Mathematics 2B - 20894194</div>
          <div className='flex items-center gap-8'>
            <div className='flex items-center'>
              <HiMail/>
              <div className='pl-2'>i9liu@uwaterloo.ca</div>
            </div>
            <div className='flex items-center'>
              <AiFillPhone/>
              <div className='pl-2'>647-466-5557</div>
            </div>
            <div className='flex items-center'>
              <AiFillLinkedin/>
              <a href="https://www.linkedin.com/in/issac-liu-890b281b1/" className='pl-2'>LinkedIn</a>
            </div>
            <div className='flex items-center'>
              <BsFillHouseFill/>
              <div className='pl-2'>Mississauga, ON</div>
            </div>
          </div>
        </div>
        <div
          className='grid grid-cols-5 px-8 py-6 gap-4'
          style={lightBg}
        >
          <div className="w-full col-span-3">
            {/* Education */}
            <div className="text-xl" style={titleDiv}>
              Education
            </div>
            <div>
              <div className='flex items-center'>
                <div className='text-lg pr-1'>University of Waterloo</div>
                <div className='font-light text-sm'>- Waterloo, On</div>
              </div>
              <div className='text-sm pr-1'>Sept 2020 - Present</div>
              <ul className='list-outside list-disc px-4'>
                <li className='text-sm'>Candidate for Honours Bachelor of Mathemattics in Computational Mathematics, Co-op</li>
                <li className='text-sm'>University of Waterloo's Presidents Scholarship Recipient</li>
              </ul>
            </div>
            {/* Work Experience */}
            <div className="text-xl mt-2"  style={titleDiv}>
                Work Experience
            </div>
            <div className='pb-2 mb-2' style={separate}>
              <div className='text-lg pr-1'>Front-End Developer Intern</div>
              <div className='flex gap-2'>
                <div className='text-sm'>Timbles Innovations Inc.</div>
                <div className='font-light text-sm pr-1'>May - Sept 2021</div>
              </div>
              <ul className='list-outside list-disc px-4'>
                <li className='text-sm'>Fixed bugs and added features to a web app built with React, Redux, and Django to aid in development of an early startup</li>
                <li className='text-sm'>Demonstrated strong intuition and collaboration ability by understanding code structure and maintaining an existing web app</li>
              </ul>
            </div>
            <div>
              <div className='text-lg pr-1'>Full-Stack Web Developer</div>
              <div className='flex gap-2'>
                <div className='text-sm'>SkyViewSuites</div>
                <div className='font-light text-sm pr-1'>Jan - Apr 2022</div>
              </div>
              <ul className='list-outside list-disc px-4'>
                <li className='text-sm'>Developed, tested, and deployed the React front-end and NestJS microservice APIs of the admin system web app for other SkyViewSuites employees</li>
                <li className='text-sm'>Collaborated with coworkers in different departments to fully understand and implement their needs</li>
                <li className='text-sm'>Quickly adapted to an existing codebase and learned new technologies to seamlessly integrate to the dev team</li>
              </ul>
            </div>
            {/* Technical Skills */}
            <div className="text-xl mt-2"  style={titleDiv}>
                Technical Skills
            </div>
            <div>
              <div>Front-End</div>
              <div className='flex flex-wrap gap-1'>
                {frontend.map((item: string) => <div className='bg-gray-200 rounded-full py-0.5 px-2 text-xs'>
                  {item}
                </div>)}
              </div>
              <div>Back-End</div>
              <div className='flex flex-wrap gap-1'>
                {backend.map((item: string) => <div className='bg-gray-200 rounded-full py-0.5 px-2 text-xs'>
                  {item}
                </div>)}
              </div>
              <div>Database</div>
              <div className='flex flex-wrap gap-1'>
                {database.map((item: string) => <div className='bg-gray-200 rounded-full py-0.5 px-2 text-xs'>
                  {item}
                </div>)}
              </div>
              <div>Dev Ops</div>
              <div className='flex flex-wrap gap-1'>
                {devops.map((item: string) => <div className='bg-gray-200 rounded-full py-0.5 px-2 text-xs'>
                  {item}
                </div>)}
              </div>
              <div>Operating Systems</div>
              <div className='flex flex-wrap gap-1'>
                {os.map((item: string) => <div className='bg-gray-200 rounded-full py-0.5 px-2 text-xs'>
                  {item}
                </div>)}
              </div>
              <div>Languages</div>
              <div className='flex flex-wrap gap-1'>
                {languages.map((item: string) => <div className='bg-gray-200 rounded-full py-0.5 px-2 text-xs'>
                  {item}
                </div>)}
              </div>
            </div>
          </div>
          <div className='w-full rounded col-span-2'>
            {/* Projects */}
            <div className="text-xl"  style={titleDiv}>
              Projects
            </div>
            <div className='pb-2 mb-2' style={separate}>
              <div className='text-lg pr-1'>Bacon Number Calculator</div>
              <ul className='list-outside list-disc px-4'>
                <li className='text-sm'>Cleaned and manipulated a dataset with 10000+ movies from IMDB to find an actor's distance from Kevin Bacon</li>
                <li className='text-sm'>Data manipulation done with basic Python, calculations done using a graph structure from the NetworkX Python library</li>
              </ul>
            </div>
            <div className='pb-2 mb-2' style={separate}>
              <div className='text-lg pr-1'>YouTube Live Checker</div>
              <ul className='list-outside list-disc px-4'>
                <li className='text-sm'>Utilized Python libraries to output newly live channels from a given list of channel ids in a clean format which could be easily passed to a twitter bot</li>
                <li className='text-sm'>Bypassed YouTube's costly API to check a channel's live status using web scraping in Python</li>
              </ul>
            </div>
            <div>
              <div className='text-lg pr-1'>Various Game Mechanic Demos</div>
              <ul className='list-outside list-disc px-4'>
                <li className='text-sm'>Snake Game written in JavaScript</li>
                <li className='text-sm'>Source Engine-esque object pick up system and 2D roguelike shooting and movement created in Unity</li>
              </ul>
            </div>
            {/* Interests */}
            <div className="text-xl mt-2"  style={titleDiv}>
              Interests
            </div>
            <ul className='list-outside list-disc px-4'>
              <li>Self-teach Piano</li>
              <li>Play Soccer, Badminton, and Ping Pong</li>
              <li>Recreate mechanics from my favorite games in Unity and play around with ReactJS</li>
              <li>Learn Japanese</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
