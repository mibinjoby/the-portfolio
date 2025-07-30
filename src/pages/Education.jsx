import React from 'react'
import {motion} from 'framer-motion'

const education = [
    
      
   

    {
        course:'BCA',
        institute:'Elims college',
        year     :'2022-2024'
    },
     {
        course:'BCA',
        institute:'Elims college',
        year     :'2022-2024'
    },
     {
        course:'BCA',
        institute:'Elims college',
        year     :'2022-2024'
    },
]

const Education = () => {
  return (
      
   
    <div id='education' className='p-8'>

        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Education</h1>
        <motion.div className='space-y-8'
        initial ="hidden"
        animate = "visible">

        {education.map((education,index) => (
            <motion.div 
             key={index}
             initial="hidden"
             whileInView="visible"
             viewport={{once: false ,amount:0.3}}
             transition={{duration: 1 }}
             className='max-w-[600px] mx-auto border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl 
             transition-shadow duration-300 bg-purple-700/10 '
            >
                <h2 className='text-gray-100 text-2xl font-semibold '>{education.course}</h2>
                <p className='text-gray-300'>{education.institute}</p>
                <p className='text-gray-400 mt-4'>{education.year}</p>
            </motion.div>
        
        ))}

        </motion.div>
    
      
    </div>
  )
}
 


export default Education
