import { iframe } from 'framer-motion/client'
import React from 'react'

const shinyeffect = ({left, right, top,size = 500}) => {

    const positionStyles = {
        top:`${top}px`,
        width:`${top}px`,
        height:`${top}px`,
        zindex: -1

    }

    if (left !== undefined) {
        positionStyles.left = `${top}px`
    }
    
    
    if (right !== undefined) {
        positionStyles.right = `${top}px`
    }


  return (
    <div className='shiny-effect' style={positionStyles}>
      shinyeffect
    </div>
  )
}

export default shinyeffect




