import React from 'react'
import { Button } from 'react-bootstrap'
import style from "./Build.module.css"
const Build = () => {
  return (
    <div className={style.main}>
      <h1>Built by techies, for techies 👩‍💻👨‍💻</h1>
      <p>It takes less than 5 minutes to sign up.</p>
      <Button size="lg" >Apply to join</Button>
    </div>
  )
}

export default Build
