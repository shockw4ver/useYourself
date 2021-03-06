import React from 'react'
import {
  Router,
  Route,
  Switch
} from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Layout from '../layouts'

import HomePage from '../pages/home'
import AboutPage from '../pages/about'
import PostsPage from '../pages/posts'

const history = createBrowserHistory()

export interface IRoute {
  name: string
  path: string | string[]
  link: string
  exact?: boolean
  render(): React.ReactElement
  meta: {
    title: string
    label: string
  }
}

export const routes: IRoute[] = [
  {
    name: 'home',
    path: '/',
    link: '/',
    exact: true,
    render() {
      return (<HomePage />)
    },
    meta: {
      title: 'Home',
      label: 'Home'
    }
  },
  {
    name: 'posts',
    path: ['/posts', '/posts/:id'],
    link: '/posts',
    render() {
      return (<PostsPage />)
    },
    meta: {
      title: 'Posts',
      label: 'Posts'
    }
  },
  {
    name: 'about',
    path: '/about',
    link: '/about',
    render() {
      return (<AboutPage />)
    },
    meta: {
      title: 'About',
      label: 'About'
    }
  },
]

export function AppRoutes() {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          {routes.map(item => (
            <Route key={item.name} exact={item.exact} path={item.path}>
              { item.render() }
            </Route>
          ))}
        </Switch>
      </Layout>
    </Router>
  )
}
