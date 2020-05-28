import React, {
  useEffect,
  useCallback,
  useMemo
} from 'react'
import {
  useHistory,
  useRouteMatch
} from 'react-router-dom'
import {
  observer
} from 'mobx-react'
import dayjs from 'dayjs'
import {
  useStores
} from '../../models'
import {
  PostPageRoot,
  Loading,
  PostList,
  PostListItem,
  PostTitle,
  PostMeta,
  PostMetaItem,
  PostSummary,
  PostContent
} from './_components'

export default observer(PostsPage)

type TPostPageParams = undefined | {
  id?: string | undefined
}

function PostsPage() {
  const { post } = useStores()
  const history = useHistory()
  const match = useRouteMatch('/posts/:id')
  const params: TPostPageParams = match?.params || {}

  const fmtDate = useCallback((date: number) => dayjs(date).format('MM/DD/YYYY'), [])
  const list = useMemo(() => {
    if (params.id) {
      return post.posts.filter((_, index) => index === Number(params.id))
    } else {
      return post.posts
    }
  }, [params, post])

  useEffect(() => {
    post.fetchPosts()
  }, [post])

  function handlePostClick(index: number) {
    (index !== Number(params?.id) && history.push(`/posts/${index}`))
  }

  console.log(params)
  return (
    <PostPageRoot>
      {post.fetching ? (
        <Loading type="spin" />
      ) : (
        <PostList>
          {list.map((item, index) => {
            const isContentMode = index === Number(params.id)
            return (
              <PostListItem
                key={item.title}
                onClick={() => handlePostClick(index)}
                contentMode={isContentMode}
              >
                <PostTitle>{ item.title }</PostTitle>
                
                {isContentMode ? (
                  <PostContent>
                    { item.content }
                  </PostContent>
                ): (
                  <>
                    <PostMeta>
                      <PostMetaItem>author: { item.author }</PostMetaItem>
                      <PostMetaItem>last updated: { fmtDate(item.updateDate) }</PostMetaItem>
                      <PostMetaItem>created at: { fmtDate(item.createDate) }</PostMetaItem>
                    </PostMeta>
                    <PostSummary>{ item.summary }</PostSummary>
                  </>
                )}
              </PostListItem>
            )
          })}
        </PostList>
      )}
    </PostPageRoot>
  )
}