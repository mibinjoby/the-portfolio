import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'





const Navbar =() => {

  const [nav, setNav] = useState(false)

  const toggleNav = () => {
    setNav(!nav)
  }

  const closeNav =() => {
    setNav(false)

  }

  const menuVariants = {
    open :{
      x:0,
      transition :{
        stiffness:20,
        damping:15
      }

    },
    closed : {
      x:'-100%',
      transition :{
        stiffness:20,
        damping:15

    },
  },
}
  


  return (
    <div className='fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50'>
      <div className= 'max-w-[1300px] mx-auto  flex justify-between text-gray-800 text-xl items-center px-12 h-20  '>

        <a href="#" className='text-white'>MIBIN JOBY</a>

        <ul className='hidden md:flex gap-12 z-10 cursor-pointer text-white'>

          <li>
           <Link to="about" smooth={true} offset="{50}" duration="{500}">About</Link>
           <Link to="contacts" smooth={true}  offset="{50}" duration="{500}">Contacts</Link>
           <Link to="projects"smooth={true} offset="{50}" duration="{500}">Projects</Link>
          </li>
        </ul>

        <div onClick={toggleNav} className=' md:hidden z-60 text-gray-700'>
          {nav ? <AiOutlineClose  size={30}/> :<AiOutlineMenu  size={30}/> }

        </div>

        <motion.div 
          initial={false}
          animate={nav ? 'open' :'closed'}
          variants={menuVariants}
          className=' fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40'>

            <ul className='font font-semibold text-4xl space-y-8 mt-24 text-center  text-white'>
              <li><Link to='about' onClick={closeNav} smooth={true} offset={50} duration={500}>aboout </Link></li>
              <li><Link to='portfolio' onClick={closeNav}smooth={true} offset={50} duration={500}> portfolio</Link></li>
              <li><Link to='contact' onClick={closeNav} smooth={true} offset={50} duration={500}>contact </Link></li>
              <li><Link to='projects' onClick={closeNav} smooth={true} offset={50} duration={500}> projects</Link></li>

            </ul>

        </motion.div>
      </div>
    </div>
  )
}
export default Navbar
