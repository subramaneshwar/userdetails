import React from 'react'
import './nav.css'
function Navs() {
    return (
    
        <div className='nav'>
            <a   className='links' >
                Home
            </a>
            <a   className='links' >
                Products
            </a>
            <a  to='#' className='links' >
                Users
            </a>
            <a   className='links' >
                Contact
            </a>
           
        </div>
    
      )
}

export default Navs