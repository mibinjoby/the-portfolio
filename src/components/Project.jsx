import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import project from '../assets/project.png'

const projects = [
    {
        img: project,
        title: "project #1",
        decription:"UI for frontend development using React.",
        links:{
            site:"#",
            github:"#"
        },
    },
]

const Project = () => {
  return (
    <div className='max-w[1000px] mx-auto p-6 md:my-20' id='project'>

        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Projects</h2>

        {projects.map((project,index) => (

            <div key={index} className={`flex flex-col md:flex-row ${index % 2 !==0  ? 'md:flex-row-reverse':''}mb-12`}>
                <div className='w-full md:w-1/2 p-4 '>

                    <img 
                    src="project.img" 
                    alt="project.title" className='w-full h-full object-cover rounded-lg shadow-lg'/>
                </div>

                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>

                <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>

                <p className='text-gray-300 mb-4'>{projects.description}</p>
                <div className='flex space-x-4'>

                    <a href={ project.links.site} className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 
                     transition duration-300'>viewsite</a>

                    <a href={ project.links.github} className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 
                     transition duration-300 '><AiOutlineGithub/></a>s
                    


                </div>

                </div>
            </div>
        ))}
      
    </div>
  ) 
}

export default Project


