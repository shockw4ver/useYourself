import { css } from 'styled-components'

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
    background: url("http://qb5hdauc2.bkt.clouddn.com/background.jpg") 0 / cover fixed;
  }
`