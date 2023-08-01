import React from 'react'

import Navbar1 from '../../Component/Navbar/Navbar'
import Description from '../../Component/Description/Description'
import Step from '../../Component/Step/Step'
import style from "./HomePage.module.css"
import Company from '../../Component/hiringPartner/Company'
import Techies from '../../Component/Techies/Techies'
import Mentors from '../../Component/Mentors/Mentors'
const HomePage = () => {
  return (
    <div className={style.main}>
     <Navbar1/>
     <Description/>
     <Step/>
     <Company/>
     <Techies/>
     <Mentors/>
    </div>
  )
}

export default HomePage
