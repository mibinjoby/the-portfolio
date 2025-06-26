

import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineX } from 'react-icons/ai'
import { DiCss3, DiHtml5, DiJavascript, DiNodejsSmall, DiReact } from 'react-icons/di'
import ShinyEffect from './ShinyEffect.jsx'
import mibin from '../assets/mibin.jpg'



const Hero = () => {
  return (
    <div className='mt-24 max-w-[1200px] mx-auto relative'>
      <div className='grid md:grid-cols-2  place-items-center gap-8'>

        <motion.div 
          initial={{opacity: 0,y: -50}}
          whileInView={{opacity: 1,y: 0}}
          viewport={{once: true}}
          transition={{duration: 1}}
          >

        

           <TypeAnimation
            sequence={[
             "Fullstack Dev",
             1000,
             "Webdesigner",
             1000,
             
               ]}
           speed={50}
           repeat={Infinity}
           className='font-bold text-gray-400 text-xl md:text-3xl italic mb-4'/>

          <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 1, delay: 0.5}} className='text-gray-200 md:text-7xl text-5xl tracking-tight mb-4'>

           Hey,I AM <br />

           <span className='text-purple-500 font-space Grotesk'>MIBIN JOBY</span>

          </motion.p>


          <motion.p
           initial={{opacity: 0}}
           whileInView={{opacity: 1}}
           viewport={{once: true}}
           transition={{duration: 1, delay: 1}} className=' text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg  mb-6'>
          
           I am a dedicated MERN stack developer with expertise in building dynamic, responsive, and scalable web applications.    
          </motion.p>

         <motion.div
           initial={{opacity: 0}}
           whileInView={{opacity: 1}}
           viewport={{once: true}}
           transition={{duration: 1, delay: 1.5}} className='flex flex-row items-center gap-6 my-4 md:md-0'>

            <motion.button whileHover={{ scale: 1.05, boxShadow: "0px, 0px,0px rgba(0,0,0,0.3)"}} className='z-10 cursorr-pointer font-bold 
             text-gray-200 md:w-auto p-4 border  border-purple-400 rounded-xl'>

              Download cv

            </motion.button>

            <div className='flex gap-6 flex-row text-4xl md:tect-6xl text-purple-400 z-20'>

              <motion.a whileHover={{ scale: 1.2}} href="#">
                <AiOutlineGithub/>

              </motion.a>

              <motion.a whileHover={{ scale: 1.2}} href="#">
                <AiOutlineLinkedin/>

              </motion.a>


              

            </div>

          </motion.div>
        </motion.div>

        <motion.img src={mibin} className='w-[300px] md:w-[450px]'
          initial={{opacity: 0 ,scale:0.8}}
           whileInView={{opacity: 1,scale:1}}
           viewport={{once: true}}
           transition={{duration: 1}}/>
      </div>

      <motion.div
      initial={{opacity: 0}}
           whileInView={{opacity: 1}}
           viewport={{once: true}}
           transition={{duration: 1, delay: 2}} className='flex flex-row text-7xl px-12 md:px-0 w-full justify-center iteme-center py-24'>

            <p className='text-gray-200 mr-6'>My Tech stack</p>

           <motion.button whileHover={{ scale: 1.25, boxShadow: "0px, 0px,0px rgba(0,0,0,0.3)"}} className='z-10 cursor-pointer '>

            < DiHtml5 className='text-orange-600 mx-2'/>
            

           </motion.button>
           <motion.button whileHover={{ scale: 1.25, boxShadow: "0px, 0px,0px rgba(0,0,0,0.3)"}} className='z-10 cursor-pointer '>
            < DiCss3 className='text-blue-600 mx-2'/>
           </motion.button>

           <motion.button whileHover={{ scale: 1.25, boxShadow: "0px, 0px,0px rgba(0,0,0,0.3)"}} className='z-10 cursor-pointer '>
            < DiJavascript className='text-yellow-600 mx-2'/>
           </motion.button>

           <motion.button whileHover={{ scale: 1.25, boxShadow: "0px, 0px,0px rgba(0,0,0,0.3)"}} className='z-10 cursor-pointer '>
            < DiReact className='text-blue-600 mx-2'/>
           </motion.button>
           
            <motion.button whileHover={{ scale: 1.25, boxShadow: "0px, 0px,0px rgba(0,0,0,0.3)"}} className='z-10 cursor-pointer '>
              < DiNodejsSmall className='text-blue-600 mx-2'/>
            </motion.button>
           
           

      </motion.div>

      <div className=' absolute inset-0 hidden md:block'>
        <ShinyEffect left={0} top={0} size={1400}/>
      </div>
    </div>
  )
}

export default Hero