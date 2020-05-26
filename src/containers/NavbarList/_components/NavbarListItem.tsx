import React from 'react'
import styled from 'styled-components'
import theme from 'styled-theming'
import { LayoutModes } from '../../../models/theme'

interface INavbarListItemRootProps {
  active: boolean | undefined,
  onClick: React.EventHandler<any>
}

const padding = theme('mode', {
  [LayoutModes.House]: '0 20px',
  [LayoutModes.Recipe]: '20px 0'
})

export const NavbarListItemRoot = styled.li`
  display: flex;
  align-items: center;
  color: ${(props: INavbarListItemRootProps) => props.active ? '#fff' : '#999'};
  font-family: Merriweather;
  font-size: 24px;
  font-weight: bold;
  padding: ${padding};
  cursor: pointer;
  transform-origin: center;
  transition: all 300ms;

  span {
    position: relative;
    display: inline-block;
    border-bottom: 2px solid #fff;
    border-width: 0;
  }

  &:hover {
    transform: scale(1.1, 1.1);
    
    span::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      display: block;
      height: 2px;
      width: 100%;
      background-color: #fff;
      transform-origin: center;
      animation: spread 300ms;
    }
  }

  @keyframes spread {
    from {
      transform: scale(0, 1);
    }

    to {
      transform: scale(1, 1);
    }
  }
`

export interface INavbarListItemProps extends INavbarListItemRootProps {
  children: string
}

export function NavbarListItem({ children, active, onClick }: INavbarListItemProps) {
  return (
    <NavbarListItemRoot active={active} onClick={onClick}>
      <span>{ children }</span>
    </NavbarListItemRoot>
  )
}