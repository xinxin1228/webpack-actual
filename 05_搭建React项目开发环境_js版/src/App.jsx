import React, { memo } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { CssCom, LessCom, SassCom, ScssCom } from '@/components'
import './index.less'

const App = memo(() => {
  return (
    <div className="app">
      <h1>React + React-router + Redux + RTK</h1>
      <CssCom type="css" />
      <LessCom type="less" />
      <ScssCom type="scss" />
      <SassCom type="sass" />
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/article">ARTICLE</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
})

export default App
