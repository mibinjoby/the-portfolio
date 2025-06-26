import React from 'react'

const Contact = () => {
  return (
    <div className='px-6 max-w[1000px] mx-auto md:my-12 ' id= "contact">
      <div className='grid md:grid-cols-2 place-items-center'>
        <div>
          <div className='text-gray-300 my-3'>
            <h3 className='text-4xl font-semibold mb-5'>about <span>me</span> </h3>
            <p className='text-justify leading-7 w-11/12 mx-auto'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Eveniet delectus adipisci quas molestiae. Odit, beatae. Dolores, quibusdam hic! Corrupti 
              dolorem quia eius earum perferendis porro minima suscipit, adipisci quo voluptas.
            </p>
          </div>

          <div className='flex mt-10 items-center gap-7'>

            <div className='bg-gray-800/40 p-4 rounded-lg '>

            <h3 className='md:text-4xl text-xl font-semibold  text-white '>11 <span>+</span></h3>
            <p className='text-xs md:text-base'><span>years of experience</span></p>

            </div>

             <div className='bg-gray-800/40 p-5 rounded-lg '>

            <h3 className='md:text-4xl text-xl font-semibold  text-white '>11 <span>+</span></h3>
            <p className='text-xs md:text-base'><span>years of experience</span></p>
            
            </div>

               <div className='bg-gray-800/40 p-5 rounded-lg '>

            <h3 className='md:text-4xl text-xl font-semibold  text-white '>11 <span>+</span></h3>
            <p className='text-xs md:text-base'><span>years of experience</span></p>
            
            </div>

          </div>

        </div>
        <form action="">
          
        <p className='text-gray-100 font-bold text-xl mb-2 '>Let's connect </p>

        <input type="text" id='name' placeholder='your name ' name='name' className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 bg-white' />

        <input type="email" id='email' placeholder='your email ' name='name' className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 bg-white' />
        
        <textarea name="textarea" id="textarea" cols="30" rows="4" placeholder='your Message ..' className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 bg-white'/>
      
      <button type='submit' className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color '>send Message</button>

          </form> 

      </div>
      
    </div>
  )
}

export default Contact


