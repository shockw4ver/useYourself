import React from 'react'
import styled from 'styled-components'
import ReactLoading from 'react-loading'
import { BlurRoot } from '../../../components/BlurRoot'

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
  animation: fadeIn 300ms;

  ${BlurRoot}

  @keyframes fadeIn {
    from {
      transform: translate(0, -15px);
      opacity: 0;
    }

    to {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
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
  children: React.ReactElement
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