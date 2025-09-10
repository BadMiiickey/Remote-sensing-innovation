import React from 'react'

const MainContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
   <div 
      style={{ 
         flex: 1,
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
         width: '90%',
         margin: '160px auto 0 auto',
         minHeight: 400
      }}
   >
      { children }
   </div>
)

export default MainContent