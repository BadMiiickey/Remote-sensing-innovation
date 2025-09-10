import React, { useState, useEffect, useRef } from 'react'

import type { Size } from '../utils/types/Hex'

const HEX_RADIUS = 60
const HEX_HEIGHT = Math.sqrt(3) * HEX_RADIUS
const HEX_WIDTH = 2 * HEX_RADIUS

const HexGridBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
   const [size, setSize] = useState({
      rows: getRows(),
      columns: getColumns(),
      width: window.innerWidth,
      height: window.innerHeight
   })

   // 记录点亮状态
   const [litMap, setLitMap] = useState<{ [key: string]: boolean }>({})
   const offTimers = useRef<{ [key: string]: number }>({})

   // 记录鼠标位置
   const mousePos = useRef<{ x: number; y: number } | null>(null)

   useEffect(() => {

      const onResizeOrScroll = () => {
         setSize({
            rows: getRows(),
            columns: getColumns(),
            width: window.innerWidth,
            height: getPageHeight()
         })
      }

      window.addEventListener('resize', onResizeOrScroll)
      window.addEventListener('scroll', onResizeOrScroll)

      return () => {
         window.removeEventListener('resize', onResizeOrScroll)
         window.removeEventListener('scroll', onResizeOrScroll)
         Object.values(offTimers.current).forEach(id => clearTimeout(id))
      }
   }, [])

   // 监听全局鼠标移动
   useEffect(() => {

      const onMouseMove = (event: MouseEvent) => {

         const pageX = event.clientX + window.scrollX
         const pageY = event.clientY + window.scrollY

         mousePos.current = { 
            x: pageX, 
            y: pageY 
         }

         const { row, column } = getHexIndex(pageX, pageY)
         const key = `${row}-${column}`

         setLitMap(prev => {
            if (prev[key]) return prev

            return { ...prev, [key]: true }
         })

         // 清除熄灭定时器
         if (offTimers.current[key]) {
            clearTimeout(offTimers.current[key])

            offTimers.current[key] = 0
         }

         // 延迟熄灭
         if (offTimers.current[key] === 0 || !offTimers.current[key]) {

            offTimers.current[key] = window.setTimeout(() => {
               setLitMap(prev => ({ ...prev, [key]: false }))

               offTimers.current[key] = 0

            }, 50 + Math.random() * 50)
         }
      }

      window.addEventListener('mousemove', onMouseMove)

      return () => window.removeEventListener('mousemove', onMouseMove)
   }, [])

   return (
      <div
         style={{
            position: 'relative',
            flex: 1,
            display: 'flex', 
            flexDirection: 'column',
            left: 0,
            top: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            zIndex: 0,
            pointerEvents: 'none',
         }}
      >
         { renderHexGrid(size, litMap) }
         { children }
      </div>
   )
}

// 根据鼠标坐标计算六边形索引
function getHexIndex(x: number, y: number) {

   const column = Math.floor((x + HEX_RADIUS) / (HEX_WIDTH * 0.75))
   const centerYOffset = column % 2 ? HEX_HEIGHT / 2 : 0
   const row = Math.floor((y + HEX_RADIUS - centerYOffset) / HEX_HEIGHT)

   return { row, column }
}

const getRows = () => Math.ceil(getPageHeight() / HEX_HEIGHT) + 2
const getColumns = () => Math.ceil(window.innerWidth / (HEX_WIDTH * 0.75)) + 2

const getHexPoints = (centerX: number, centerY: number, radius: number) => {
   return Array.from({ length: 6 })
      .map((_, index) => {

         let angle = (index * Math.PI) / 3
         let currentPointX = (centerX + radius * Math.cos(angle)).toFixed(2)
         let currentPointY = (centerY + radius * Math.sin(angle)).toFixed(2)

         return [currentPointX, currentPointY].join(',')
      })
      .join(' ')
}

const getPageHeight = () => {
   return Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
      window.innerHeight
   )
}

const renderHexGrid = (size: Size, litMap: Record<string, boolean>) => {
   return (
      <svg
         style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100vw',
            height: size.height,
            pointerEvents: 'none',
            zIndex: 0,
         }}
         width={ size.width }
         height={ size.height }
      >
         {
            Array.from({ length: size.rows + 2 }).map((_, row) =>
               Array.from({ length: size.columns + 2 }).map((_, column) => {

                  const centerX = -HEX_RADIUS + column * HEX_WIDTH * 0.75
                  const centerY = -HEX_RADIUS + row * HEX_HEIGHT + (column % 2 ? HEX_HEIGHT / 2 : 0)
                  const key = `${row}-${column}`
                  const isLit = litMap[key]

                  return (
                     <polygon
                        key={ key }
                        points={ getHexPoints(centerX, centerY, HEX_RADIUS - 2) }
                        fill={ isLit ? 'rgba(54, 110, 166, 1)' : 'rgba(255,255,255,0.04)' }
                        stroke='rgba(255,255,255,0.08)'
                        strokeWidth={ 2 }
                        style={{ pointerEvents: 'none' }}
                     />
                  )
               })
            )
         }
      </svg>
   )
}

export default HexGridBackground