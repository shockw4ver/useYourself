import theme from 'styled-theming'
import { LayoutModes } from '../../models/theme'

export const height = theme('mode', {
  [LayoutModes.House]: 'calc(100% - 100px)',
  [LayoutModes.Recipe]: '100%'
})

export const width = theme('mode', {
  [LayoutModes.House]: '100%',
  [LayoutModes.Recipe]: 'calc(100% - 400px)'
})

export const flexGrow = theme('mode', {
  [LayoutModes.House]: '0',
  [LayoutModes.Recipe]: '1'
})