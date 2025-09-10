export const footer = {
   background: {
      width: '100%',
      background: 'linear-gradient(180deg, #0a1a4f 0%, #0a1a2f 100%)',
      color: '#fff',
      padding: '48px 0 16px 0',
   },
   container: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap' as const,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '0 32px'
   },

   logo: {
      block: {
         minWidth: 240,
         marginBottom: 32
      },
      row: {
         display: 'flex',
         alignItems: 'center',
         marginBottom: 12
      },
      text: {
         fontSize: 22,
         fontWeight: 700,
         letterSpacing: 2
      }
   },

   description: {
      color: '#b3c6ff',
      fontSize: 14,
      lineHeight: 1.7
   },

   nav: {
      block: {
         minWidth: 160,
         marginBottom: 32
      },
      title: {
         fontWeight: 600,
         marginBottom: 12
      }
   },

   link: {
      display: 'block',
      color: '#b3c6ff',
      textDecoration: 'none',
      marginBottom: 8,
      fontSize: 15,
      transition: 'color 0.2s',
      fontWeight: 500
   },

   contact: {
      block: {
         minWidth: 200,
         marginBottom: 32
      },
      text: {
         color: '#b3c6ff',
         fontSize: 14,
         marginBottom: 6
      }
   },
   
   copyright: {
      borderTop: '1px solid #223366',
      margin: '0 32px',
      paddingTop: 16,
      textAlign: 'center' as const,
      color: '#b3c6ff',
      fontSize: 13
   }
}

