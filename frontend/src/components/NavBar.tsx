import React from 'react'

import { navBar } from '../styles/navbar/NavBarStyle'

import '../styles/navbar/NavLink.css'

import { ASSETS } from '../utils/assets'

import type { NavLinks } from '../utils/types/NavLinks'

const navLinks: NavLinks[] = [
   { key: '首页', href: '/' },
   { key: '云图分析', href: '/image-analysis' },
   { key: '卫星设备', href: '/satellite-device' },
   { key: '联系我们', href: '/contact-us' },
]

// 导航栏组件
const NavBar: React.FC = () => (
   <nav style={ navBar.background }>

      { /** Logo渲染 */}
      <div style={ navBar.logo }>
         <img 
            src={ ASSETS.LOGO } 
            alt='Logo' 
            style={{ 
               height: '100%', 
               objectFit: 'contain' 
            }} 
            draggable='false'
            onContextMenu={ event => event.preventDefault() }
         />
      </div>

      { /** 导航链接文本渲染 */}
      <div style={ navBar.link.container }>
         { renderNavLinks() }
      </div>
   </nav>
)

// 渲染导航链接文字
const renderNavLinks = () => {
   return navLinks.map(link => {
      
      let linkElement = (
         <a
            key={ link.key }
            href={ link.href }
            style={ navBar.link.text }
            className='nav-link'
         >
            <span className='nav-circle'></span>
            { link.key }
         </a>
      )
      
      return linkElement
   })
}

export default NavBar