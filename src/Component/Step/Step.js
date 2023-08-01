import React from 'react'
import style from "./Step.module.css"
const Step = () => {
  return (
    <div className={style.main}>
      <div className={style.step1}>
      <img src='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png' height="60px" width="60"/>
      <h6>STEP 1: COMPLETE PROFILE</h6>
     <p>Once you are approved, we showcase you to <p>leading Indian technology startups</p></p>

      </div>
      <div className={style.step1}>
      <img src='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png'height="60px"/>
      <h6>STEP 2: RECEIVE JOB OFFERS</h6>
      <p>Companies start sending interview requests. <p>Talk to only the ones you like.</p></p>
     
      </div>
      <div className={style.step1}>
      <img src='https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png' height="60px"/>
      <h6>STEP 3: ACCEPT DREAM JOB</h6>
      <p>Compare your offers and accept the best one.  <p>Hired!</p></p>
    
      </div>
    </div>
  )
}

export default Step
