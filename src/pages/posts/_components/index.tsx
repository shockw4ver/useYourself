import React from 'react'
import styled from 'styled-components'
import ReactLoading from 'react-loading'
import { BlurRoot } from '../../../components/BlurRoot'
import { fadeIn } from '../../../components/animations'

export * from './PostList'
export * from './PostListItem'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const PostPortal = styled.div`
  position: relative;
  height: 95%;
  width: 95%;
  overflow: hidden;

  ${BlurRoot}

  ${fadeIn()}
`

export const Loading = styled(ReactLoading)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  opacity: .4;
`

interface IPostPageRootProps {
  children: React.ReactNode
}

export function PostPageRoot({ children }: IPostPageRootProps) {
  return (
    <Wrapper>
      <PostPortal>
        { children }
      </PostPortal>
    </Wrapper>
  )
}