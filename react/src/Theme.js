import React from 'react'
import {ThemeProvider} from 'styled-components'

const theme = {
    colors: {
        main: '#3EB6CE',
        text: '#324B50'
    },
    fonts: {
        main: 'sans-serif'
    },
    media: {
        phone: '599px',
        smallTablet: '600px',
        largeTablet: '900px',
        laptop: '1200px',
        desktop: '1800px'
    },
    container: {
        phone: '90%',
        smallTablet: '570px',
        largeTablet: '870px',
        laptop: '1170px',
        desktop: '1770px'
    }
}

export default function Theme({children}) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}