import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { getBackgroundStyle } from './styles/home/BackgroundStyle'
import { 
   getMainContentStyle,
   getLeftIllustrationStyle,
   getCenterTitleStyle,
   getCenterSubtitleStyle,
   getMainButtonStyle,
   getSecondaryButtonStyle
} from './styles/home/MainContentStyle'
import {
   getRightGridStyle,
   getGridImageStyle,
   getGridPlaceholderStyle
} from './styles/home/GridImageStyle'
import {
   getFeatureListStyle,
   getFeatureCardStyle,
   getIconShadowStyle
} from './styles/home/CardStyle'

import './styles/home/FeatureCard.css'

import { ASSETS } from './utils/assets'

import type { GridImage } from './utils/types/GridImage'
import type { Card } from './utils/types/Card'

const gridConfig: GridImage[] = [
   { src: ASSETS.GRID1, alt: 'Feature 1' },
   { src: ASSETS.GRID2, alt: 'Feature 2' },
   { src: ASSETS.GRID3, alt: 'Feature 3' },
   { src: ASSETS.GRID4, alt: 'Feature 4' },
   { src: ASSETS.GRID5, alt: 'Feature 5' },
   { src: ASSETS.GRID6, alt: 'Feature 6' }
]

const cardConfig: Card[] = [
   { title: '台风识别', description: '自动检测遥感影像中的台风区域，辅助气象预警', image: ASSETS.TYPHOON },
   { title: '云系分析', description: '智能识别和分类不同类型的云系，提升气象分析效率', image: ASSETS.CLOUD },
   { title: '暴雨监测', description: '自动发现暴雨相关的气象特征，助力灾害防控', image: ASSETS.RAINSTORM },
   { title: '海雾检测', description: '识别海洋影像中的海雾现象，支持航运安全', image: ASSETS.FOG }
]

const Home: React.FC = () => (
   <div style={ getBackgroundStyle() }>
      <NavBar />
      <div style={ getMainContentStyle() }>
         <div style={ getLeftIllustrationStyle() }>
            { renderSatellite() }
         </div>
         <div style={ getCenterTitleStyle() }>
            <h1>海洋遥感影像智能分析系统</h1>
            <div style={ getCenterSubtitleStyle() }>
               基于AI的海洋遥感影像智能分析与应用平台，助力海洋环境监测与科学研究
            </div>
            <div style={ renderButton() }>
               <button style={ getMainButtonStyle() }>立即体验</button>
               <button style={ getSecondaryButtonStyle() }>了解更多</button>
            </div>
         </div>
         <div style={ getRightGridStyle()}>
            { renderGridImage(gridConfig) }
         </div>
      </div>
      <div style={ getFeatureListStyle() }>
         { renderCard() }
      </div>
      <Footer />
   </div>
)

// 渲染卫星svg
const renderSatellite = () => {
   return (
      <img
         src={ ASSETS.SATELLITE }
         alt='Satellite'
         style={{ width: 220, opacity: 0.8 }}
      />
   )
}

// 渲染按键区域
const renderButton = () => {
   return { 
      display: 'flex', 
      gap: 16, 
      marginTop: 32 
   }
}

// 渲染九宫格图片
const renderGridImage = (config: GridImage[]) => {

   const total = 6
   const filled = config.slice(0, total)

   while (filled.length < total) {
      filled.push({})
   }

   return filled.map((item, index) =>
      item.src ? (
         <img
            key={ index }
            src={ item.src }
            alt={ item.alt || `Feature ${ index + 1 }` }
            style={ getGridImageStyle() }
         />
      ) : (
         <div
            key={ index }
            style={ getGridPlaceholderStyle() }
         />
      )
   )
}

// 渲染底部功能卡片
const renderCard = () => {
   return cardConfig.map((item, index) => (
      <div
         key={ index }
         style={ getFeatureCardStyle() }
         className='feature-card'
      >
         <div style={ getIconShadowStyle() }>
            <img 
               src={ item.image } 
               alt={ item.title } 
               style={{ width: '100%', borderRadius: 12 }} 
            />
         </div>
         <h3>{ item.title }</h3>
         <p>{ item.description }</p>
      </div>
   ))
}

export default Home

