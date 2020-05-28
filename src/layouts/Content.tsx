import React from 'react'
import styled from 'styled-components'
import IconArrowRight from '@/assets/icons/arrow-right.svg'
import * as ContentTheme from './themes/Content'

export const ContentRoot = styled.div`
  position: relative;
  flex-grow: ${ContentTheme.flexGrow};
  height: ${ContentTheme.height};
  width: ${ContentTheme.width};
`

export const CallNavOutArrow = styled.img.attrs({
  src: IconArrowRight
})`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  height: 40px;
  width: 40px;
  padding: 15px;
  opacity: 0;
  cursor: pointer;

  &:hover {
    opacity: .6;
    animation: showup 500ms;
  }

  @keyframes showup {
    from {
      transform: translate(-15px);
      opacity: 0;
    }

    to {
      transform: translate(0);
      opacity: .6;
    }
  }
`

export default Content

interface IContent {
  children: React.ReactNode,
  callNavOutVisible: boolean,
  onCallNavOut: React.EventHandler<any>
}

function Content({
  children,
  callNavOutVisible,
  onCallNavOut
} : IContent) {

  return (
    <ContentRoot>
      {callNavOutVisible && (<CallNavOutArrow onClick={onCallNavOut} />)}
      { children }
    </ContentRoot>
  )
}