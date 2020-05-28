import React from 'react'
import styled from 'styled-components'
import theme from 'styled-theming'
import IconClose from '@/assets/icons/close.svg'
import NavbarList from '@/containers/NavbarList'
import { LayoutModes } from '@/models/theme'
import { BlurRoot } from '@/components/BlurRoot'

const height = theme('mode', {
  [LayoutModes.House]: '100px',
  [LayoutModes.Recipe]: '100%'
})
const width = theme('mode', {
  [LayoutModes.House]: '100%',
  [LayoutModes.Recipe]: '400px'
})

interface IWrapperProps {
  collapsed?: boolean
}
const Wrapper = styled.div`
  position: relative;
  height: ${height};
  width: ${(props: IWrapperProps) => props.collapsed ? 0 : width};
  background-color: rgba(0,0,0,.2);
  transition: all 300ms;

  ${BlurRoot}
`

const switcherDisplay = theme('mode', {
  [LayoutModes.House]: 'none',
  [LayoutModes.Recipe]: 'block'
})

const Swithcer = styled.img.attrs({
  src: IconClose
})`
  display: ${switcherDisplay};
  position: absolute;
  top: 0;
  right: 0;
  height: 30px;
  width: 30px;
  padding: 15px;
  color: #fff;
  opacity: 0;
  cursor: pointer;
  transition: all 300ms;
  transform: rotate(45deg);

  &:hover {
    opacity: .6;
    transform: rotate(0);
  }
`

export default Navbar

export interface INavbar {
  collapsed: boolean
  mode: LayoutModes,
  onClose: React.EventHandler<any>
}

function Navbar({
  collapsed,
  mode,
  onClose
}: INavbar) {

  return (
    <Wrapper collapsed={collapsed}>
      {mode === LayoutModes.Recipe && (<Swithcer onClick={onClose} />)}

      <NavbarList />
    </Wrapper>
  )
}