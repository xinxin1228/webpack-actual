import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import './index.sass'

const SassCom = memo(({ type }) => {
  const { counter } = useSelector((state) => state.counter, shallowEqual)

  return (
    <>
      <h2 className="sass">
        测试{type}文件是否<span>正常加载</span>
      </h2>
      <h2>counter: {counter}</h2>
    </>
  )
})

export default SassCom
