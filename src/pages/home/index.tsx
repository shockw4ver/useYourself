import React, { useLayoutEffect } from 'react';
import {
  observer
} from 'mobx-react';
import Typed from 'typed.js'
import {
  Wrapper,
  Hint,
  Title,
  Message
} from './_components';

export default observer(HomePage)

function HomePage() {

  useLayoutEffect(() => {
    new Typed('#message', {
      strings: [`It's Hard to Hold A Candle, in The Cold November Rain`],
      typeSpeed: 100,
      fadeOut: true
    })
  }, [])

  return (
    <Wrapper>
      <Hint>
        <Title>Use Yourself</Title>
        <Message id="message" />
      </Hint>
    </Wrapper>
  )
}