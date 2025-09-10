import React from 'react'
import { ASSETS } from '../utils/assets'
import { footer } from '../styles/footer/FooterStyle'

const Footer: React.FC = () => (
   <footer style={ footer.background }>
      <div style={ footer.container }>

         {/* Logo与简介 */}
         <div style={ footer.logo.block }>
            <div style={ footer.logo.row }>
               <img 
                  src={ ASSETS.LOGO } 
                  alt="Logo" 
                  style={{ 
                     height: 48, 
                     marginRight: 12 
                  }} 
               />
               <span style={ footer.logo.text }>海洋遥感影像智能分析系统</span>
            </div>
            <div style={ footer.description }>
               基于AI的海洋遥感影像智能分析与应用平台，助力海洋环境监测与科学研究。
            </div>
         </div>

         {/* 快速导航 */}
         <div style={ footer.nav.block }>
            <div style={ footer.nav.title }>快速导航</div>
            <a href="/" style={ footer.link }>首页</a>
            <a href="/image" style={ footer.link }>云图分析</a>
            <a href="/device" style={ footer.link }>卫星设备</a>
            <a href="/contact" style={ footer.link }>联系我们</a>
         </div>

         {/* 联系方式 */}
         <div style={ footer.contact.block }>
            <div style={ footer.nav.title }>联系方式</div>
            <div style={ footer.contact.text }>邮箱: </div>
            <div style={ footer.contact.text }>地址: </div>
            <div style={ footer.contact.text }>技术支持：</div>
         </div>

         {/* 备案信息 */}
         <div style={ footer.copyright }>
            © { new Date().getFullYear() } 海洋遥感影像智能分析系统 | 粤ICP备2024123456号
         </div>
         
      </div>
   </footer>
)

export default Footer