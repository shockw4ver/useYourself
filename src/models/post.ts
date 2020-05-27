import {
  observable,
  action
} from 'mobx'

export interface IPostStore {
  posts: IPost[]
  fetching: boolean
}

export interface IPost {
  title: string
  summary: string
  createDate: number
  updateDate: number
  author: string
}

export class PostStore implements IPostStore {
  @observable posts: IPost[] = []
  @observable fetching = false

  @action
  async fetchPosts() {

    if (this.posts.length) {
      return
    }

    this.fetching = true
    
    const res = await fetch('https://service-rzwlbsaq-1253264948.gz.apigw.tencentcs.com/release/posts')
    const { data }: IReponse<any[]> = await res.json() as any
    
    this.posts = data.map(item => {
      const attrs = item.attributes

      return {
        title: attrs.title,
        summary: attrs.description,
        createDate: new Date().getTime(),
        updateDate: new Date().getTime(),
        author: 'Samuel'
      }
    })
    
    this.fetching = false
  }
}