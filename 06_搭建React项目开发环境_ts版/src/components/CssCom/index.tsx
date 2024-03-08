import React, { memo } from 'react'
import { increment, decrement } from '@/store/features/counter'
import { useAppDispatch } from '@/store/hooks'
import './index.css'

interface Props {
  type: string
}

const CssDom: React.FC<Props> = memo((props) => {
  const { type } = props

  const dispatch = useAppDispatch()

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
