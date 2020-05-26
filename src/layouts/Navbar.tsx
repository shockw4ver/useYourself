import React from 'react'
import styled from 'styled-components'
import theme from 'styled-theming'
import NavbarList from '../containers/NavbarList'
import { LayoutModes } from '../models/theme'
import { BlurRoot } from '../components/BlurRoot'

const height = theme('mode', {
  [LayoutModes.House]: '100px',
  [LayoutModes.Recipe]: '100%'
})
const width = theme('mode', {
  [LayoutModes.House]: '100%',
  [LayoutModes.Recipe]: '400px'
})

const Wrapper = styled.header`
  position: relative;
  height: ${height};
  width: ${width};
  background-color: rgba(0,0,0,.2);
  transition: all 300ms;

  ${BlurRoot}
`

export default Navbar

function Navbar() {

  return (
    <Wrapper>
      <NavbarList />
    </Wrapper>
  )
}