import React from 'react'
import {
  observer
} from 'mobx-react'
import { PostPageRoot, Loading } from './_components'

export default observer(PostsPage)

function PostsPage() {

  return (
    <PostPageRoot>
      <Loading type="spin" />
    </PostPageRoot>
  )
}