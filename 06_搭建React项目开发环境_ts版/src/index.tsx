import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GetRoutes } from '@/router'
import store from '@/store'

const root = createRoot(document.querySelector('#root')!)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GetRoutes />
    </BrowserRouter>
  </Provider>
)
