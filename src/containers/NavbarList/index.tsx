import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { routes } from '@/routes'
import {
  NavbarList,
  NavbarListItem
} from './_components'

export default NavbarListContainer

function NavbarListContainer() {
  const location = useLocation()
  const history = useHistory()

  function handleNavbarListItemClick(path: string) {
    history.push(path)
  }

  return (
    <NavbarList>
      {routes.map(item => (
        <NavbarListItem
          key={item.name}
          active={location.pathname === item.link}
          onClick={() => handleNavbarListItemClick(item.link)}
        >
          { item.meta.label }
        </NavbarListItem>
      ))}
    </NavbarList>
  )
}