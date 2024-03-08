import React, { memo } from 'react'
import { shallowEqual } from 'react-redux'
import { useAppSelector } from '@/store/hooks'
import './index.sass'

interface Props {
  type: string
}

const SassCom: React.FC<Props> = memo(({ type }) => {
  const { counter } = useAppSelector((state) => state.counter, shallowEqual)

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
