import React, { useEffect, useCallback } from 'react'
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
  PostSummary
} from './_components'

export default observer(PostsPage)

function PostsPage() {
  const { post } = useStores()

  const fmtDate = useCallback((date: number) => dayjs(date).format('MM/DD/YYYY'), [])

  useEffect(() => {
    post.fetchPosts()
  }, [post])

  return (
    <PostPageRoot>
      {post.fetching && (
        <Loading type="spin" />
      )}

      {post.posts.length && (
        <PostList>
          {post.posts.map(item => (
            <PostListItem key={item.title}>
              <PostTitle>{ item.title }</PostTitle>
              <PostMeta>
                <PostMetaItem>author: { item.author }</PostMetaItem>
                <PostMetaItem>last updated: { fmtDate(item.updateDate) }</PostMetaItem>
                <PostMetaItem>created at: { fmtDate(item.createDate) }</PostMetaItem>
              </PostMeta>
              <PostSummary>{ item.summary }</PostSummary>
            </PostListItem>
          ))}
        </PostList>
      )}
    </PostPageRoot>
  )
}