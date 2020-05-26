import { css } from 'styled-components'
import ImageBackground from '../assets/images/background.jpg'

export const BlurRoot = css`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    filter: blur(20px);
    z-index: -1;
    margin: -10px;
    background: url(${ImageBackground}) 0 / cover fixed;
  }
`