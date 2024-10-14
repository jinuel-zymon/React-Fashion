import React from 'react'
import Wrapper from './Wrapper'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'

const Header = () => {
  return (

      <header className='py-5'>
      <Wrapper>
        <div className="flex justify-between items-center">
          <div className="branding"><Logo/></div>
          <nav>
            <ul className='flex gap-10'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Lifestyle</Link></li>
              <li><Link to="/">Culture</Link></li>
              <li><Link to="/">Entertainment</Link></li>
              <li><Link to="/">Features</Link></li>
            </ul>
          </nav>
          <button className='opacity-70'><Search strokeWidth={1.2} /></button>
        </div>
      </Wrapper>
    </header>
  )
}

export default Header