// 底部功能卡片区样式
export const getFeatureListStyle = () => ({
   display: 'flex',
   justifyContent: 'space-between',
   width: '80%',
   margin: '48px auto 0 auto',
   gap: 24,
})

// 底部单个功能卡片样式
export const getFeatureCardStyle = () => ({
   flex: 1,
   background: '#fff',
   borderRadius: 16,
   boxShadow: '0 2px 16px 0 rgba(0,0,0,0.06)',
   padding: '32px 32px',
   textAlign: 'left' as const,
   transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s',
})

// 底部卡片图标阴影样式
export const getIconShadowStyle = () => ({
   width: 72,
   height: 72,
   borderRadius: 24,
   background: 'rgba(51, 139, 255, 0.12)', 
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   marginBottom: 24
})