import React from 'react'

function Menu({text}) {
  return (
    <div>
      <li><a className='transition-all duration-300 group-hover:text-yellow-200' href="#">{text}</a></li>
    </div>
  )
}

export default Menu
