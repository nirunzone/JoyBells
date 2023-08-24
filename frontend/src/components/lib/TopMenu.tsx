import React from 'react'
import {Link} from 'react-router-dom'

function TopMenu() {
    const MenuItems =[
        {
          name:'Home',
          link: '/'
        },
        {
          name:'About Us',
          link: '/about'
        },
        {
          name:'Classes',
          link: '/classes'
        },
        {
          name:'Pages',
          link: '/pages'
        },
        {
          name:'Contact Us',
          link: '/contact-us'
        },
        {
          name:'Join Us',
          link: '/join-us'
        },
        
      ]

  return (
    <React.Fragment>
        <ul>
                {MenuItems.map((menu,index)=>(
                  <li key={index}><Link to={menu.link}>{menu.name}</Link></li>
                ))}
                </ul>
    </React.Fragment>
  )
}

export default TopMenu