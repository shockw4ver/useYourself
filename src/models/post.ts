import {
  observable,
  action
} from 'mobx'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

export interface IPostStore {
  posts: IPost[]
  fetching: boolean
}

export interface IPost {
  id: number,
  title: string
  summary: string
  createDate: number
  updateDate: number
  content: string
  author: string
}

export class PostStore implements IPostStore {
  md: MarkdownIt = new MarkdownIt('commonmark', {
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`
        } catch (E) {
          console.error(E)
        }
      }

      return ''
    }
  })

  @observable posts: IPost[] = []
  @observable fetching = false

  @action
  async fetchPosts() {

    if (this.posts.length) {
      return
    }

    this.fetching = true
    
    const res = await fetch('https://service-18ucy3ba-1253581001.gz.apigw.tencentcs.com/release/posts')
    const { data }: IReponse<any[]> = await res.json() as any
    
    this.posts = data.map((item, index) => {
      const attrs = item.attributes
      const body = item.body

      return {
        id: index,
        title: attrs.title,
        summary: attrs.description,
        createDate: new Date().getTime(),
        updateDate: new Date().getTime(),
        author: 'Samuel',
        content: this.resolveMarkdownSource(body)
      }
    })
    
    this.fetching = false
  }

  private resolveMarkdownSource(source: string) {
    return this.md.render(source)
  }
}