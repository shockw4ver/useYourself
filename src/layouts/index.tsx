import React from 'react'
import { observer } from 'mobx-react'
import styled, { ThemeProvider } from 'styled-components'
import { useStores } from '../models'
import Navbar from './Navbar'
import * as MainTheme from './themes/Main'
import * as ContentTheme from './themes/Content'

const Main = styled.main`
  position: relative;
  display: ${MainTheme.display};
  height: 100%;
  width: 100%;
`

const Content = styled.div`
  flex-grow: ${ContentTheme.flexGrow};
  height: ${ContentTheme.height};
  width: ${ContentTheme.width};
`

export default observer(Layout)

export interface ILayout {
  children: React.ReactElement
}

function Layout({ children }: ILayout) {
  const { theme } = useStores()

  return (
    <ThemeProvider theme={{
      mode: theme.layout
    }}>
      <Main>
        <Navbar />
        <Content>
          { children }
        </Content>
      </Main>
    </ThemeProvider>
  )
}