export const home = {
    mainContent: {
        satellite: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            zIndex: 1
        },
        center: {
            title: {
                flex: 2,
                color: '#fff',
                display: 'flex',
                flexDirection: 'column' as const,
                alignItems: 'flex-start',
                width: '100%',
                marginLeft: '40px',
                zIndex: 1
            },
            subtitle: {
                color: '#7e7e7eff',
                marginTop: 9,
                width: '100%',
                wordBreak: 'break-all' as const,
                textAlign: 'left' as const,
                zIndex: 1
            }
        },
        button: {
            container: {
                display: 'flex', 
                gap: 16, 
                marginTop: 32 
            },
            main: {
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
                zIndex: 1
            },
            secondary: {
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
                zIndex: 1
            }
        }
    },
    gridImage: {
        container: {
            flex: 2,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 140px)',
            gridTemplateRows: 'repeat(2, 140px)',
            gap: 20,
            justifyContent: 'center'
        },
        image: {
            width: 140,
            height: 140,
            borderRadius: 12,
            objectFit: 'cover' as const,
            background: '#eee'
        },
        placeHolder: {
            width: 140,
            height: 140,
            gridColumn: 3,
            gridRow: 2,
            borderRadius: 12
        }
    },
    featureCard: {
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '80%',
            margin: '48px auto 64px auto',
            gap: 24,
            zIndex: 1,
        },
        card: {
            flex: 1,
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 2px 16px 0 rgba(0,0,0,0.06)',
            padding: '32px 32px',
            textAlign: 'left' as const,
            transition: 'transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s',
            zIndex: 1
        },
        iconShadow: {
            width: 72,
            height: 72,
            borderRadius: 24,
            background: 'rgba(51, 139, 255, 0.12)', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 24,
            zIndex: 1
        }
    }
}