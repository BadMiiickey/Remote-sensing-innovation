// 主内容区样式
export const getMainContentStyle = () => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   width: '90%',
   margin: '160px auto 0 auto',
   minHeight: 400
})

// 左侧卫星插画样式
export const getLeftIllustrationStyle = () => ({
   flex: 1,
   display: 'flex',
   justifyContent: 'center'
})

// 中间主标题兼标题区样式
export const getCenterTitleStyle = () => ({
   flex: 2,
   color: '#fff',
   display: 'flex',
   flexDirection: 'column' as const,
   alignItems: 'flex-start' as const,
   width: '100%',
   marginLeft: '40px'
})

// 中间副标题样式
export const getCenterSubtitleStyle = () => ({
   color: '#7e7e7eff',
   marginTop: 9,
   width: '100%',
   wordBreak: 'break-all' as const,
   textAlign: 'left' as const
})

// 中间标题区主按键样式
export const getMainButtonStyle = () => ({
   padding: '12px 32px',
   background: '#338bff',
   color: '#fff',
   border: 'none',
   borderRadius: 8,
   fontSize: 16,
   fontWeight: 500,
   cursor: 'pointer',
   boxShadow: '0 2px 8px 0 rgba(51,139,255,0.10)',
   transition: 'background 0.2s',
})

// 中间标题区副按键样式
export const getSecondaryButtonStyle = () => ({
   padding: '12px 32px',
   background: '#b9d6e7ff',
   color: '#ffffffff',
   border: 'none',
   borderRadius: 8,
   fontSize: 16,
   fontWeight: 500,
   cursor: 'pointer',
   boxShadow: '0 2px 8px 0 rgba(51,139,255,0.10)',
   transition: 'background 0.2s',
})

