import React from 'react'

import { 
   getNavBarStyle, 
   getNavBarLinksContainerStyle, 
   getNavBarLinkStyle, 
   getNavBarLogoStyle 
} from '../styles/navbar/NavBarStyle'

import '../styles/navbar/NavLink.css'

import { ASSETS } from '../utils/assets'

import type { NavLinks } from '../utils/types/NavLinks'

const navLinks: NavLinks[] = [
   { key: '首页', href: '/' },
   { key: '云图分析', href: '/image' },
   { key: '卫星设备', href: '/device' },
   { key: '联系我们', href: '/contact' },
]

// 导航栏组件
const NavBar: React.FC = () => (
   <nav style={ getNavBarStyle() }>
      { renderLogo() }
      <div style={ getNavBarLinksContainerStyle() }>
         { renderNavLinks() }
      </div>
   </nav>
)

// 渲染导航栏logo
const renderLogo = () => {

   let logoElement = (
      <div style={ getNavBarLogoStyle() }>
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
   )

   return logoElement
}

// 渲染导航链接文字
const renderNavLinks = () => {
   return navLinks.map(link => {

      let linkElement = (<a
         key={ link.key }
         href={ link.href }
         style={ getNavBarLinkStyle(link.key) }
         className='nav-link'
      >
         { link.key }
      </a>)

      return linkElement
   })
}

export default NavBar