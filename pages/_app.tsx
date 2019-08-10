import App, { Container, AppContext, AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { GlobalDataContext } from '../lib/global'
import { fetchGlobalData, GlobalResponseBody } from '../api/global'

const colors = {
  navy: '#001F3F',
  blue: '#0074D9',
  aqua: '#7FDBFF',
  teal: '#39CCCC',
  olive: '#3D9970',
  green: '#2ECC40',
  lime: '#01FF70',
  yellow: '#FFDC00',
  orange: '#FF851B',
  red: '#FF4136',
  fuchsia: '#F012BE',
  purple: '#B10DC9',
  maroon: '#85144B',
  white: '#FFFFFF',
  silver: '#DDDDDD',
  gray: '#AAAAAA',
  black: '#111111'
}

const theme = {
  breakpoints: ['40em', '52em', '64em', '80em'],
  badges: {
    primary: {
      color: '#FFF',
      backgroundColor: colors.blue
    }
  },
  colors,
  textStyles: {
    monospace: {
      fontFamily: `'Ubuntu Mono', monospace`
    },
    sansSerif: {
      fontFamily: 'Ubuntu, sans-serif'
    }
  }
}

const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    color: ${colors.black};
    font-family: ${theme.textStyles.sansSerif.fontFamily};
    line-height: 1.625;
  }
`

interface MyAppProps extends AppProps {
  globalData: GlobalResponseBody
}

export default class MyApp extends App<MyAppProps> {
  render() {
    const { Component, pageProps, globalData } = this.props

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <GlobalDataContext.Provider value={{}}>
            <GlobalStyle />
            <Component {...pageProps} />
          </GlobalDataContext.Provider>
        </ThemeProvider>
      </Container>
    )
  }
}
