import React from 'react'
import Wrapper from './Wrapper'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { MenuIcon, Search } from 'lucide-react'

const Header = () => {

  const [isShow, setIsShow] = React.useState(false)

  const handleShowMenu = () => {
    setIsShow(!isShow)
    if(isShow === true) {
      document.querySelector('body').classList.remove('no-scroll');
    } 
    else {
      document.querySelector('body').classList.add('no-scroll');
    }
  }


  return (

      <header className='py-5'>
      <Wrapper>
        <div className="flex justify-between items-center">
          <div className="branding"><Logo/></div>
          <nav className={`transition-all fixed md:static z-50 top-16 left-0 ${isShow ? "h-[calc(100vh-72px)]" : "h-0"} overflow-hidden md:overflow-visible w-screen bg-white grid place-content-center`}>
            <ul className='flex flex-col md:flex-row -translate-y-16 md:translate-y-0 gap-10 w-full justify-center items-center '>
              <li><Link to="/" className='text-3xl md:text-base'>Home</Link></li>
              <li><Link to="/" className='text-3xl md:text-base'>Lifestyle</Link></li>
              <li><Link to="/" className='text-3xl md:text-base'>Culture</Link></li>
              <li><Link to="/" className='text-3xl md:text-base'>Entertainment</Link></li>
              <li><Link to="/" className='text-3xl md:text-base'>Features</Link></li>
            </ul>
          </nav>
          <button className='opacity-70 hidden md:block'><Search strokeWidth={1.2} /></button>
          <button className='md:hidden' onClick={handleShowMenu}><MenuIcon/></button>
        </div>
      </Wrapper>
    </header>
  )
}

export default Header