import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { changeInfo } from '@/store/userInfo'
import './index.scss'

const ScssCom = memo(({ type }) => {
  const userInfo = useSelector((state) => state.userInfo, shallowEqual)
  const dispatch = useDispatch()

  return (
    <>
      <h2 className="scss">
        测试{type}文件是否<span>正常加载</span>
      </h2>
      <h3>
        name: {userInfo.name} age: {userInfo.age}
      </h3>
      <button onClick={() => dispatch(changeInfo({ name: 'react' }))}>
        更改姓名
      </button>
    </>
  )
})

export default ScssCom
