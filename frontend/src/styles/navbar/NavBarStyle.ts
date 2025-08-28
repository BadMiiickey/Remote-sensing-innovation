// 总导航栏底图样式
export const getNavBarStyle = () => ({
   width: '100%',
   height: 80,
   backgroundColor: 'rgba(255,255,255,0.85)',
   backdropFilter: 'blur(12px)',
   borderRadius: '16px',
   boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'flex-start',
   position: 'fixed' as const,
   top: 24,
   left: '50%',
   transform: 'translateX(-50%)',
   zIndex: 1000,
   padding: '0 32px',
   maxWidth: '1200px',
   margin: '0 auto',
})

// 导航栏链接容器样式
export const getNavBarLinksContainerStyle = () => ({
   height: '80px',
   left: '50%',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '32px',
   background: 'transparent',
   padding: 0,
   position: 'absolute' as const,
   transform: 'translateX(-50%)',
   margin: '0 auto',
})

// 导航栏链接样式
export const getNavBarLinkStyle = (text: string) => {

   const baseFontSize = 16
   const fontSize = text.length > 10 ? baseFontSize - 2 : baseFontSize

   return {
      height: '40px',
      minWidth: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize,
      fontWeight: 600,
      color: '#1d5cff',
      border: 'none',
      borderRadius: '20px',
      boxShadow: 'none',
      textDecoration: 'none',
      padding: '0 16px',
      transition: 'background 0.2s, color 0.2s',
      cursor: 'pointer'
   }
}

// 导航栏logo样式
export const getNavBarLogoStyle = () => ({
   height: '48px',
   display: 'flex',
   alignItems: 'center',
   cursor: 'default',
   userSelect: 'none' as const,
   marginRight: 'auto'
})