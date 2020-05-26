import styled from 'styled-components'
import theme from 'styled-theming'
import { LayoutModes } from '../../../models/theme'

const flexDirection = theme('mode', {
  [LayoutModes.House]: 'row',
  [LayoutModes.Recipe]: 'column'
})

export const NavbarList = styled.ul`
  float: right;
  display: flex;
  flex-direction: ${flexDirection};
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-right: 140px;
`