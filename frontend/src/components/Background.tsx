import React from 'react'

const Background: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
   <div 
      style={{ 
         minHeight: '100vh',
         width: '100%',
         display: 'flex',
         flexDirection: 'column',
         background: 'linear-gradient(to bottom, #0a174e 0%, #133b8a 60%, #3a8ddeff 100%)',
         position: 'relative',
         overflow: 'hidden'
      }}
   >
      { children }
   </div>
)

export default Background