// 尾页背景样式
export const getFooterBackgroundStyle = () => ({
   width: '100%',
   background: 'linear-gradient(180deg, #0a1a4f 0%, #0a1a2f 100%)',
   color: '#fff',
   padding: '48px 0 16px 0',
   marginTop: 64
})

export const getFooterContainerStyle = () => ({
   maxWidth: 1200,
   margin: '0 auto',
   display: 'flex',
   flexWrap: 'wrap' as const,
   justifyContent: 'space-between',
   alignItems: 'flex-start',
   padding: '0 32px'
})

export const getFooterLogoBlockStyle = () => ({
   minWidth: 240,
   marginBottom: 32
})

export const getFooterLogoRowStyle = () => ({
   display: 'flex',
   alignItems: 'center',
   marginBottom: 12
})

export const getFooterLogoTextStyle = () => ({
   fontSize: 22,
   fontWeight: 700,
   letterSpacing: 2
})

export const getFooterDescStyle = () => ({
   color: '#b3c6ff',
   fontSize: 14,
   lineHeight: 1.7
})

export const getFooterNavBlockStyle = () => ({
   minWidth: 160,
   marginBottom: 32
})

export const getFooterNavTitleStyle = () => ({
   fontWeight: 600,
   marginBottom: 12
})

export const getFooterLinkStyle = () => ({
   display: 'block',
   color: '#b3c6ff',
   textDecoration: 'none',
   marginBottom: 8,
   fontSize: 15,
   transition: 'color 0.2s',
   fontWeight: 500
})

export const getFooterContactBlockStyle = () => ({
   minWidth: 200,
   marginBottom: 32
})

export const getFooterContactTextStyle = () => ({
   color: '#b3c6ff',
   fontSize: 14,
   marginBottom: 6
})

export const getFooterCopyrightStyle = () => ({
   borderTop: '1px solid #223366',
   margin: '0 32px',
   paddingTop: 16,
   textAlign: 'center' as const,
   color: '#b3c6ff',
   fontSize: 13
})