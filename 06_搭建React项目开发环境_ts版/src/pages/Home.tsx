import React, { memo } from 'react'
import imgUrl from '@/img/01.jpg'
import { CreateImage } from '@/components'

const Home = memo(() => {
  return (
    <>
      <h1>Home</h1>
      <CreateImage name="01.jpg" url={imgUrl} />
    </>
  )
})

export default Home
