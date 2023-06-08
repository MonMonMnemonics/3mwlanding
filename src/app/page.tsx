"use client";

import { ReactNode } from "react";
import { activeProjects, openProjects, closedProjects, otherProjects} from "./projectList"
import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub  } from "@fortawesome/free-brands-svg-icons"

function scrollTo(mode: number) {
  switch (mode) {
    case 1: {
      const e = document.getElementById("About");
      if (e) {
        e.scrollIntoView({
          behavior: "smooth",
          block: "center"
        })
      }
      break;
    }

    case 2: {
      const e = document.getElementById("Projects");
      if (e) {
        e.scrollIntoView({
          behavior: "smooth",
          block: "center"
        })
      }
      break;
    }

    case 3: {
      const e = document.getElementById("Portfolio");
      if (e) {
        e.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      }
      break;
    }

    default: {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
      break;
    }
  }
}

const dividerDiv = <div className="w-full h-1 bg-gray-900"></div>;

var pointDown: boolean = false;
function movePoint(e : any): void {
  if (pointDown && e.isTrusted) {
    e.preventDefault();
    e.currentTarget.parentElement.scrollLeft -= e.movementX;
  }  
}

function ProjectCard(project: any): ReactNode {
  return (
    <div key={project.name} className="font-roboto flex flex-col items-center content-center min-w-[340px] max-w-[500px] w-[33vw] select-none">
      <div className="flex flex-col bg-cream text-black w-full rounded-3xl py-1 h-full">
        <div className="border-b-2 border-black border-dashed pb-1">
          <h1 className="text-center text-xl font-extrabold">
            {project.name}
          </h1>
          {project.position &&
            <h1 className="text-center text-base">
              {project.position}
            </h1>
          }
        </div>
        <div className="px-5 py-1">
          { project.description &&
            <p>{project.description}</p>
          }
          <p className="text-center">--- *** ---</p>
          { project.techstacks && 
            <p>{project.techstacks}</p>
          }
          { project.features && <p>Notable features:</p>}
          { project.features &&
            <ul className="list-disc list-inside">
              {project.features.map((e: string, index:number) => {
                return <li key={project.name+"ft"+index}>{e}</li>
              })}
            </ul> 
          }
          { project.workedFeature && <p>Features worked on:</p>}
          { project.workedFeature &&
            <ul className="list-disc list-inside">
              {project.workedFeature.map((e: string, index:number) => {
                return <li key={project.name+"ftw"+index}>{e}</li>
              })}
            </ul> 
          }
          { project.github &&
            <a className=" cursor-pointer" href={project.github} target="_blank">
              <FontAwesomeIcon icon={faGithub} /> Github Code
            </a>
          }
          { project.githubs && <p>Source code(s):</p>}
          { project.githubs &&
            <ul className="list-disc list-inside">
              {project.githubs.map((e: any, index:number) => {
                return (<li key={project.name+"GH"+index}>
                  <a className=" cursor-pointer" href={e.link} target="_blank">
                    <FontAwesomeIcon icon={faGithub} /> {e.desc} Code
                  </a>                  
                </li>)
              })}
            </ul> 
          }
        </div>
        { project.link &&
          <div className="flex border-t-2 border-black pt-1 px-5 w-full justify-center mt-auto">
            <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
             onClick={() => {window.open(project.link)}}
            >
              Website
            </button>
          </div>
        }
      </div>
    </div>
  )
}

function ProjectCards({projects} : {projects: any[]}) {
  return (
    <div className="projectCards w-full overflow-x-auto pb-3">
      <div className="flex justify-center min-w-full w-fit space-x-4 hover:cursor-grab active:cursor-grabbing" 
       onPointerDown={() => {pointDown = true}} onPointerUp={() => {pointDown = false}} onPointerLeave={() => {pointDown = false}} onPointerMove={movePoint}
      >
        {projects.map(e => {return ProjectCard(e)})}
      </div>
    </div>
  )
}

function NavbarComp() {
  return (
    <nav className="fixed w-screen border-gray-200 bg-gray-900 font-inter">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center cursor-pointer" onClick={() => {scrollTo(-1)}}>
          <img src="/3mwlogo.png" className="h-8 mr-3" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">3MWorkshop</span>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" onClick={() => {scrollTo(1)}}>
                About
              </button>
            </li>
            <li>
              <button className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" onClick={() => {scrollTo(2)}}>
                Active projects
              </button>
            </li>
            <li>
              <button className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" onClick={() => {scrollTo(3)}}>
                Portfolio
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>    
  )
}

function FooterComp() {
  return (
    <div className="w-screen border-gray-200 bg-gray-900 font-inter">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="font-roboto flex items-center">
          Contact me at <a href="mailto:mikatzukiathanas@gmail.com" className="ml-1"><FontAwesomeIcon icon={faEnvelope} style={{color: "white"}} /> mikatzukiathanas@gmail.com</a>
        </div>
      </div>
    </div>    
  )
}

export default function Home() {
  return (
    <main className="flex flex-col items-center px-13">
      <div className='flex h-screen flex-col items-center content-center w-full'>
        <NavbarComp/>

        <div className="flex flex-col items-center justify-center h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black to-90%">
          <div className="flex flex-col items-center">
            <img src="/logo2.png" className="h-3/5" alt="Logo"/>
            <h1 className="font-kalam text-center text-2xl mt-10">
              Welcome to MonMonMnemonics Workshop<br/>
              This is just a centralized server for any of my hobby projects<br/>
              as well as any other things that pique my interest.
            </h1>
          </div> 
        </div>
      </div>

      {dividerDiv}

      <div id="About" className="font-roboto flex flex-col items-center content-center max-w-screen-xl"
       style={{padding:"17px"}}
      >
        <h1 className="text-center text-4xl font-extrabold">
          About
        </h1>
        <div className="mt-3">
          <div className="float-left flex flex-col items-center justify-center h-[256px] w-[256px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-black to-70%">
            <img src="/profile.png" className="h-[200px]" alt="ProfilePict" />
          </div>
          <p className="text-justify">
            Hi, I&apos;m MonMonMnemonics, or people use to call me just MonMon.<br/>
            <br/>
            I&apos;m a Particle Physicist by trade and doing PhD in theoretical hadron physics right now.<br/>
            While on the side, I&apos;m also doing programming both as a part-time job and as a simple hobby.<br/>
            <br/>
            I&apos;ve been doing programming for a long-long time, my first paid programming job was a finance software using VB6.
            Then from there, I&apos;ve done all kinds of programming languages such as PoS with Delphi and Hotel management software using VB.net which was later rewritten in C#.<br/>
            <br/>
            As a long-time programmer, it&apos;s interesting to see how the interest shifted from desktop applications to web applications around 2015. My first dip into web application development was with Django,
            which didn&apos;t work out well with the client and got scrapped, then from there I tried my hands in all kinds of frameworks such as flask, .net, Symfony, and JS for both backend and frontend. But due to its portability, I ended up using JS the most.<br/>
            <br/>
            With that being said, just like with Physics, I love to learn new things and experiment with programming.
            As such, I often start a new project or take a programming job to learn new technologies or techniques, and after so many hobby projects, it started to get too burdensome to get a different domain each time.
            Thus this website serves as a centralized server for my ongoing passion projects as well as a repository to keep track of what I tried in which project.
            <br/>
          </p>
        </div>
      </div>

      {dividerDiv}
      <div id="Projects" className="font-roboto flex flex-col items-center content-center w-screen"
       style={{padding:"21px"}}
      >
        <h1 className="text-center text-4xl font-extrabold mb-4">
          Active Projects
        </h1>
        <ProjectCards projects={activeProjects}/>
      </div>

      {dividerDiv}
      <div id="Portfolio" className="font-roboto flex flex-col items-center content-center w-screen"
       style={{padding:"21px"}}
      >
        <h1 className="text-center text-4xl font-extrabold mb-4">
          Past Projects
        </h1>
        <h1 className="text-center text-2xl mb-2">
          --- Open Source ---
        </h1>
        <ProjectCards projects={openProjects}/>
        <h1 className="text-center text-2xl">
          --- Closed Source ---
        </h1>
        <h1 className="text-center text-m mb-2">
          I have all if not a bulk of the code to be functional.
        </h1>
        <ProjectCards projects={closedProjects}/>
        <h1 className="text-center text-2xl">
          --- Other projects ---
        </h1>
        <ProjectCards projects={otherProjects}/>
      </div>
      <FooterComp/>
    </main>
  )
}
