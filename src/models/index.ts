import React from 'react'
import { AppStore } from './app'
import { ThemeStore } from './theme'

export const appStore = new AppStore()
export const themeStore = new ThemeStore()

export const appState = {
  appStore,
  themeStore
}

export const storesContext = React.createContext({
  app: appStore,
  theme: themeStore
})

export function useStores() {
  return React.useContext(storesContext)
}