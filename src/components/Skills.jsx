
import React from 'react'
import { DiBootstrap, DiCss3, DiGithub, DiHtml5, DiJavascript, DiMongodb, DiNodejs, DiReact } from 'react-icons/di'

const skills = [
    {
        
        category:"Frontend",
        technologies: [
            {name: 'Html', icon: <DiHtml5 className='text-orange-600'/>},
            {name: 'Css', icon: <DiCss3 className='text-blue-600'/>},
            {name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600'/>},
            {name: 'Javascript', icon: <DiJavascript className='text-yellow-600'/>},
            {name: 'React', icon: <DiReact className='text-blue-600'/>},
        ]
    
       
    },
        {
        category:"Fullstack",
        technologies: [
            {name: 'Node js', icon: <DiNodejs className='text-green-500'/>},
            {name: 'Mongodb ', icon: <DiMongodb className='text-green-600'/>},
            {name: 'React', icon: <DiReact className='text-blue-600'/>},
            {name: 'Github', icon: <DiGithub className='text-gray-600'/>},
          
        ]
    },
]
const Skills = () => {
  return (
    <div className='max-w-[650px] mx-auto flex  flex-col justify-center px-4 text-gray-200 pb-8 md:py-12'id='skills'>

      <h2 className='text-3xl font-bold mb-4 text-center'>skills</h2>

      <p className='text-center mb-8'>
         I worked on various frontend and fullstack projects. Check them <a href="#" className='underline'>there</a>
      </p>

      <div className='flex flex-col md:flex-row justify-center space-y-0 md:space-x-8 max-w-[1000px] mx-auto'>
        {skills.map((skill,index) => (

            <div key={index} className='border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2' >

                <h3 className='text-xl font-bold mb-4 text-center'>{skill.category}</h3>

                <div className='grid grid-col-2 gap-4'>

                    {skill.technologies.map ((tech,idex) =>(

                        <div key={idex} className=' flex items-center space-x-2'>

                            <span className='text-2xl'>{tech.icon}</span>
                             <span>{tech.name}</span>

                        </div>
                    ))}
                </div>

            </div>

        ))}

      </div>
    </div>
  )
}

export default Skills
