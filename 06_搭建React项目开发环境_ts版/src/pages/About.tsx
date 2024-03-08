import React, { memo } from 'react'
import imgUrl from '@/img/02.jpg'
import { CreateImage } from '@/components'

const About = memo(() => {
  return (
    <>
      <h1>About</h1>
      <CreateImage name="02.jpg" url={imgUrl} />
    </>
  )
})

export default About
