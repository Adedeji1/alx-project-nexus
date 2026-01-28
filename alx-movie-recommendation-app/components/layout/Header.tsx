import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <div>
            <h2>MovieBox</h2>
        </div>
        <div>
            <ul className='bg-black mt-6 p-6'>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header
