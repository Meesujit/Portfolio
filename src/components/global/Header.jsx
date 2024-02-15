import React from 'react'
import { navLinks } from '../../constants'
import Logo from '../icons/logo.png'

const Header = () => {
  return (
    
    <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
            <a href='/'>
                <img src={Logo} alt='logo' width={25} height={25}  />
            </a>
            <nav>
            <ul className=" flex items-center gap-x-8">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} rel="noopener noreferrer" className='hover:text-purple-400 duration-300'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </div>       
</header>    

  )
}

export default Header