import styled from 'styled-components'
import { fadeIn } from '../../../components/animations'

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

export const Hint = styled.div`
  position: absolute;
  right: 50px;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 269px;
  height: 300px;
`

export const Title = styled.h1`
  color: #fff;
  font-size: 60px;
  font-weight: bold;
  font-family: "Brig";
  text-align: right;

  ${fadeIn({ duration: 2000 })}
`

export const Message = styled.p`
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  font-family: "Baskerville";
`