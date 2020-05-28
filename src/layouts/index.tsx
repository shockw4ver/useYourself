import React from 'react'
import { observer } from 'mobx-react'
import styled, { ThemeProvider } from 'styled-components'
import { useStores } from '@/models'
import Navbar from './Navbar'
import Content from './Content'
import * as MainTheme from './themes/Main'

const Main = styled.main`
  position: relative;
  display: ${MainTheme.display};
  height: 100%;
  width: 100%;
`

export default observer(Layout)

export interface ILayout {
  children: React.ReactElement
}

function Layout({ children }: ILayout) {
  const { theme } = useStores()

  function handleCloseNavbar() {
    theme.toggleNavbar(false)
  }

  function handleOpenNavbar() {
    theme.toggleNavbar(true)
  }

  return (
    <ThemeProvider theme={{
      mode: theme.layout
    }}>
      <Main>
        <Navbar
          mode={theme.layout}
          collapsed={!theme.navbarVisible}
          onClose={handleCloseNavbar}
        />
        <Content
          callNavOutVisible={!theme.navbarVisible}
          onCallNavOut={handleOpenNavbar}
        >
          { children }
        </Content>
      </Main>
    </ThemeProvider>
  )
}