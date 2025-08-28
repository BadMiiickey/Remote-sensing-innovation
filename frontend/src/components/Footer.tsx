import React from 'react'
import { ASSETS } from '../utils/assets'
import {
  getFooterBackgroundStyle,
  getFooterContainerStyle,
  getFooterLogoBlockStyle,
  getFooterLogoRowStyle,
  getFooterLogoTextStyle,
  getFooterDescStyle,
  getFooterNavBlockStyle,
  getFooterNavTitleStyle,
  getFooterLinkStyle,
  getFooterContactBlockStyle,
  getFooterContactTextStyle,
  getFooterCopyrightStyle
} from '../styles/footer/FooterStyle'

const Footer: React.FC = () => (
   <footer style={ getFooterBackgroundStyle() }>
      <div style={ getFooterContainerStyle() }>
         {/* Logo与简介 */}
         <div style={ getFooterLogoBlockStyle() }>
            <div style={ getFooterLogoRowStyle() }>
               { renderLogo() }
               <span style={ getFooterLogoTextStyle() }>海洋遥感影像智能分析系统</span>
            </div>
            <div style={ getFooterDescStyle() }>
               基于AI的海洋遥感影像智能分析与应用平台，助力海洋环境监测与科学研究。
            </div>
         </div>
            {/* 快速导航 */}
         <div style={ getFooterNavBlockStyle() }>
            <div style={ getFooterNavTitleStyle() }>快速导航</div>
            <a href="/" style={ getFooterLinkStyle() }>首页</a>
            <a href="/image" style={ getFooterLinkStyle() }>云图分析</a>
            <a href="/device" style={ getFooterLinkStyle() }>卫星设备</a>
            <a href="/contact" style={ getFooterLinkStyle() }>联系我们</a>
         </div>
            {/* 联系方式 */}
            <div style={ getFooterContactBlockStyle() }>
            <div style={ getFooterNavTitleStyle() }>联系方式</div>
            <div style={ getFooterContactTextStyle() }>邮箱: </div>
            <div style={ getFooterContactTextStyle() }>地址: </div>
            <div style={ getFooterContactTextStyle() }>技术支持：</div>
         </div>
      </div>
      {/* 备案信息 */}
      <div style={ getFooterCopyrightStyle() }>
         © {new Date().getFullYear()} 海洋遥感影像智能分析系统 | 粤ICP备2024123456号
      </div>
   </footer>
)

const renderLogo = () => (
   <img src={ ASSETS.LOGO } alt="Logo" style={{ height: 48, marginRight: 12 }} />
)

export default Footer