import React from 'react'
import { AppStore } from './app'
import { ThemeStore } from './theme'
import { PostStore } from './post'

export const appStore = new AppStore()
export const themeStore = new ThemeStore()
export const postStore = new PostStore()

export const appState = {
  appStore,
  themeStore,
  postStore
}

export const storesContext = React.createContext({
  app: appStore,
  theme: themeStore,
  post: postStore
})

export function useStores() {
  return React.useContext(storesContext)
}