// 背景渐变样式
export const getBackgroundStyle = () => ({
   minHeight: '100vh',
   width: '100%',
   background: 'linear-gradient(to bottom, #0a174e 0%, #133b8a 60%, #3a8dde 100%)',
   position: 'relative' as const,
   overflow: 'hidden'
})