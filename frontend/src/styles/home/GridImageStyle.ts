// 九宫格图片区样式
export const getRightGridStyle = () => ({
   flex: 2,
   display: 'grid',
   gridTemplateColumns: 'repeat(3, 140px)',
   gridTemplateRows: 'repeat(2, 140px)',
   gap: 20,
   justifyContent: 'center'
})

// 九宫格图片样式
export const getGridImageStyle = () => ({
   width: 140,
   height: 140,
   borderRadius: 12,
   objectFit: 'cover' as const,
   background: '#eee'
})

// 九宫格空白占位样式
export const getGridPlaceholderStyle = () => ({
   width: 140,
   height: 140,
   gridColumn: 3,
   gridRow: 2,
   borderRadius: 12
})