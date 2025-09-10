import Background from '../components/Background'
import Footer from '../components/Footer'
import HexGridBackground from '../components/HexGridBackground'
import NavBar from '../components/NavBar'
import React from 'react'

import '../styles/home/FeatureCard.css'
import '../styles/home/GridImage.css'

import { ASSETS } from '../utils/assets'

import type { GridImage } from '../utils/types/GridImage'
import type { Card } from '../utils/types/Card'
import MainContent from '../components/MainContent'
import { home } from '../styles/home/HomeStyle'

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
   <Background>

      <NavBar />

      <HexGridBackground>

         <MainContent>
            <div style={ home.mainContent.satellite }>
               <img
                  src={ ASSETS.SATELLITE }
                  alt='Satellite'
                  style={{ 
                     width: 220, 
                     opacity: 0.8 
                  }}
               />
            </div>
            <div style={ home.mainContent.center.title }>
               <h1>海洋遥感影像智能分析系统</h1>
               <div style={ home.mainContent.center.subtitle }>
                  基于AI的海洋遥感影像智能分析与应用平台，助力海洋环境监测与科学研究
               </div>
               <div style={ home.mainContent.button.container }>
                  <button style={ home.mainContent.button.main }>立即体验</button>
                  <button style={ home.mainContent.button.secondary }>了解更多</button>
               </div>
            </div>
            <div style={ home.gridImage.container }>
               { renderGridImage(gridConfig) }
            </div>
         </MainContent>

         <div style={ home.featureCard.container }>
            { renderCard() }
         </div>
      </HexGridBackground>

      <Footer />

   </Background>
)

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
            style={ home.gridImage.image }
            className='grid-image'
         />
      ) : (
         <div
            key={ index }
            style={ home.gridImage.placeHolder }
         />
      )
   )
}

// 渲染底部功能卡片
const renderCard = () => {
   return cardConfig.map((item, index) => (
      <div
         key={ index }
         style={ home.featureCard.card }
         className='feature-card'
      >
         <div style={ home.featureCard.iconShadow }>
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

