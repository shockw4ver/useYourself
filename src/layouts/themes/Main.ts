import theme from 'styled-theming'
import { LayoutModes } from '@/models/theme'

export const display = theme('mode', {
  [LayoutModes.House]: 'block',
  [LayoutModes.Recipe]: 'flex'
})