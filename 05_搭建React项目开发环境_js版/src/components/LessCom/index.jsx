import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { changeInfo as change } from '@/store/userInfo'
import './index.less'

const LessCom = memo(({ type }) => {
  const { name, age } = useSelector((state) => state.userInfo, shallowEqual)
  const dispatch = useDispatch()

  const changeInfo = () => {
    dispatch(
      change({
        age: age + 1
      })
    )
  }

  return (
    <>
      <h2 className="less">
        测试{type}文件是否<span>正常加载</span>
      </h2>
      <h3>
        name: {name} age: {age}
      </h3>
      <button onClick={changeInfo}>age++</button>
    </>
  )
})

export default LessCom
