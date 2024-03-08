import React, { memo } from 'react'
import { shallowEqual } from 'react-redux'
import { changeInfo as change } from '@/store/features/userInfo'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import './index.less'

interface Props {
  type: string
}

const LessCom: React.FC<Props> = memo(({ type }) => {
  const { name, age } = useAppSelector((state) => state.userInfo, shallowEqual)
  const dispatch = useAppDispatch()

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
