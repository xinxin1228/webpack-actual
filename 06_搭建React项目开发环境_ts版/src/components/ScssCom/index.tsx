import React, { memo } from 'react'
import { shallowEqual } from 'react-redux'
import { changeInfo } from '@/store/features/userInfo'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import './index.scss'

interface Props {
  type: string
}

const ScssCom: React.FC<Props> = memo(({ type }) => {
  const userInfo = useAppSelector((state) => state.userInfo, shallowEqual)
  const dispatch = useAppDispatch()

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
