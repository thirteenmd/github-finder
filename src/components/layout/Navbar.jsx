import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({title}) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral tezt-neutral-content'>
      <div className="container mx-auto">
        <div className="flax-none px-2 px-2">
          <FaGithub color='white' className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>
        </div>
      </div>
      <div className="flax-1 px-2 mx-2">
      <div className="flex justify-end">
          <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>Home</Link>
        </div>
        <div className="flex justify-end">
          <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>About</Link>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'GithubFinder'
}

Navbar.propTypes = {
  title: PropTypes.string
}

export default Navbar
