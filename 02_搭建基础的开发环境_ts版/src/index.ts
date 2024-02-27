import './index.css'
import './index.less'
import './index.scss'
import './index.sass'
import img1 from './img/01.jpg'
import img2 from './img/02.jpg'
import { str } from './hello'

const sum = (...rest: number[]) => rest.reduce((a, b) => a + b)

console.log(sum(1, 2, 3), str)

renderImage(img1)
renderImage(img2)

function renderImage(url: string) {
  const imgEl = document.createElement('img')
  imgEl.src = url

  document.body.append(imgEl)
}
