import theme from 'styled-theming'
import { LayoutModes } from '../../models/theme'

export const height = theme('mode', {
  [LayoutModes.House]: 'calc(100% - 100px)',
  [LayoutModes.Recipe]: '100%'
})

export const flexGrow = theme('mode', {
  [LayoutModes.House]: '0',
  [LayoutModes.Recipe]: '1'
})