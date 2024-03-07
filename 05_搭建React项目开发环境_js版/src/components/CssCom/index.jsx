import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement } from '@/store/counter'

import './index.css'

const CssDom = memo((props) => {
  const { type } = props

  const dispatch = useDispatch()

  return (
    <div>
      <h2 className="css">
        测试{type}文件是否<span>正常加载</span>
      </h2>
      <button onClick={() => dispatch(increment())}>count++</button>
      <button onClick={() => dispatch(decrement())}>count--</button>
    </div>
  )
})

export default CssDom
