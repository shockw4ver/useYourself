import React, { useState, useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import IconFullscreen from '@/assets/icons/fullscreen.svg'

const Wrapper = styled.div`
  position: relative;

  &:-webkit-full-screen {
    background-color: #222;
    height: 100vh;
    padding: 10px;
    box-sizing: border-box;
    overflow: auto;
  }
`

const MarkdownViewer = styled.div.attrs({
  className: 'markdown-viewer'
})`
  padding-top: 40px;
`

const FullscreenTrigger = styled.img.attrs({
  src: IconFullscreen
})`
  position: absolute;
  top: 15px;
  right: 15px;
  height: 30px;
  width: 30px;
  opacity: .8;
`

interface IPostContent {
  children: string
}
export function PostContent({
  children
}: IPostContent) {
  const [isFullscreen, setFullscreenStatus] = useState(false)
  const el = useRef<HTMLDivElement>(null)

  function handleFullscreen() {
    if (!el.current)
      return
    
    if (!isFullscreen) {
      el.current.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  useLayoutEffect(() => {
    el.current?.addEventListener('fullscreenchange', () => {
      setFullscreenStatus(document.fullscreen)
    })
  }, [])

  return (
    <Wrapper ref={el}>
      <FullscreenTrigger onClick={handleFullscreen} />

      <div>
        <MarkdownViewer dangerouslySetInnerHTML={{__html: children}} />
      </div>
    </Wrapper>
  )
}