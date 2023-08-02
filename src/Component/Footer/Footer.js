import React from 'react'
import {CiTwitter} from "react-icons/ci"
import {LiaFacebook} from "react-icons/lia"
import {BsInstagram} from "react-icons/bs"
import {CiLinkedin} from "react-icons/ci"
import style from "./Footer.module.css"
const Footer = () => {
  return (
  
    <div className={style.footer}>
      <div className={style.first}>
        <img className={style.logo} src='https://d383au3bye3rv1.cloudfront.net/static/images/logo/main.png' height="1rem" width="30rem"/>
       <p> TopHire is on a mission to make it dead simple for leading Indian startups to hire the top 2% of tech talent.</p>
       <div className={style.logo2}>
        <h4 ><CiTwitter/></h4>
       <h4> <LiaFacebook/></h4>
        <h4><BsInstagram/></h4>
       <h4> <CiLinkedin/></h4>
       </div>
      </div>
      <div className={style.first}>
        <h6>CANDIDATE</h6>
        <p>For Candidates
        <p>Candidate Sign Up</p>
        <p>Invite & Earn ₹15k</p>
        <p>Candidate FAQ</p></p>
      </div>
      <div className={style.first}>
      <h6>EMPLOYERS</h6>
      <p>For Employers</p>
      <p>Employer Sign Up</p>
      <p>Employer FAQ</p>
      </div>
      <div className={style.first}>
        <h6>COMPANY</h6>
        <p>Careers</p>
        <p>Privacy Policy</p>
      </div>
      <div className={style.first}>
        <h6>PARTNERS</h6>
        <img src='https://d383au3bye3rv1.cloudfront.net/static/images/landing/codechef-directi-for-lp.png'/>
      </div>
     
    </div>
    
   
  )
}

export default Footer
