import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import App from '@/App'

// 路由懒加载
const lazyLoad = (path) => {
  const Comp = lazy(() => import(`@/pages/${path}`))
  return (
    <React.Suspense fallback={<>加载中...</>}>
      <Comp />
    </React.Suspense>
  )
}

export const GetRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: lazyLoad('Home')
        },
        {
          path: 'about',
          element: lazyLoad('About')
        },
        {
          path: 'article',
          element: lazyLoad('Article')
        }
      ]
    }
  ])

  return routes
}
