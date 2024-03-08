import React, { memo } from 'react'
import { Styled } from './style'

interface Props {
  name: string
  url: string
}

const CreateImage: React.FC<Props> = memo((props) => {
  const { name, url } = props

  return (
    <Styled>
      <div>插入的图片名称：{name}</div>
      <img src={url} alt={name} />
    </Styled>
  )
})

export default CreateImage
