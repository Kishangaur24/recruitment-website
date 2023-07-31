import React from 'react'
import style from "./Discription.module.css"
import { Button } from 'react-bootstrap'
const Description = () => {
  return (
    <div className={style.container}>
      <h1>Find your next top tech job in 1 week.</h1>
      <div>
      <p><span>Are you a top 2%</span> Software Engineer, Product Manager or Data Scientist?</p>
      <p className={style.secondPara}>Let leading Indian technology <span>companies compete to hire you.</span></p>
      </div>
      <Button className={style.button} size='lg'>Apply to join</Button>
      <h6 className={style.lastPara}>100% free. It takes only 5 minutes</h6>
    </div>
  )
}

export default Description
