import React from 'react'
import styled, { css } from 'styled-components'
import { lineClamp } from '@/components/LineClamp'
import { fadeIn } from '@/components/animations'

interface IPostListItemWrapperProps {
  contentMode: boolean
}
export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 16px;
  margin: 12px auto;
  cursor: pointer;
  background-color: rgba(255,255,255,.2);
  transition: all 300ms;
  transform-origin: center;

  ${(props: IPostListItemWrapperProps) => props.contentMode ? css`
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    z-index: 10;
    margin: auto;
    height: 95%;
    width: 95%;
    overflow: auto;
    background-color: rgba(35, 36, 32, .6);

    &::-webkit-scrollbar {
      visibility: hidden;
    }

    ${fadeIn()}
  ` : css`
    &:hover {
      box-shadow: 0 0 20px 1px rgba(255,255,255,.1);
      transform: scale(1.02, 1.02);
    }
  `}
  
`

export const PostTitle = styled.h1`
  color: #b95951;
  font-size: 30px;
  font-weight: bolder;
  font-family: "Fangzheng NShuSong";
  line-height: 30px;
  text-align: center;

  ${lineClamp(2)}
`

export const PostMeta = styled.h2`
  color: rgba(185,89,81,.8);
  font-size: 14px;
  font-style: italic;
  font-family: Lora;
  line-height: 20px;
  text-align: center;
  margin: 10px 0;
`

export const PostMetaItem = styled.span`
  margin-right: 20px;
`

export const PostSummary = styled.p`
  color: #555;
  font-weight: bold;
  font-family: "Fangzheng NShuSong";
  line-height: 30px;
`

interface IPostListItemProps {
  children: React.ReactNode,
  contentMode: boolean,
  onClick: React.EventHandler<any>
}

export function PostListItem({
  children,
  contentMode,
  onClick
}: IPostListItemProps) {
  return (
    <Wrapper onClick={onClick} contentMode={contentMode}>
      { children }
    </Wrapper>
  )
}