import React from 'react'
import style from "./Mentors.module.css"
const Mentors = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <img className={style.logo} src='https://tse1.mm.bing.net/th?id=OIP.Hckm6TDGtxorMY6XGUohgAHaCd&pid=Api&rs=1&c=1&qlt=95&w=250&h=82' height="100px"/>
        <div className={style.first}>
            <div className={style.mentor}>
            <img className={style.person} src='https://tse3.mm.bing.net/th?id=OIP.s3RJ4bcuEf9d2BBzCCB_0wHaHa&pid=Api&P=0&h=180'/>
            <div className={style.profile}>
            <h6>Tarun Dugar</h6>
            <p>Sr. iOS Engineer</p>
            </div>
            </div>
           <p>TopHire was able to make the process really easy. They were able to schedule interviews with the best companies in the industry and drove the entire process smoothly.</p>
        </div>
      </div>
      <div className={style.container}>
        <img className={style.logo} src='https://tse1.mm.bing.net/th?id=OIP.B2yTw6ZOt_B8RBSKuW0zMwHaDt&pid=Api&rs=1&c=1&qlt=95&w=181&h=90' height="200px"/>
        <div className={style.first}>
            <div className={style.mentor}>
            <img className={style.person} src='https://tse4.mm.bing.net/th?id=OIP.JDoT_pg0I2CaxjzWXx0QPAHaHa&pid=Api&P=0&h=180'/>
            <div className={style.profile}>
            <h6>Aakash Kushwaha</h6>
            <p>Sr frontend Developer</p>
            </div>
            </div>
           <p>TopHire was able to make the process really easy. They were able to schedule interviews with the best companies in the industry and drove the entire process smoothly.</p>
        </div>
      </div>
      <div className={style.container}>
        <img className={style.logo} src='https://tse1.mm.bing.net/th?id=OIP.aMxxxHirO9UQOJOE6FBPnwHaCr&pid=Api&rs=1&c=1&qlt=95&w=228&h=82' height="200px"/>
        <div className={style.first}>
            <div className={style.mentor}>
            <img className={style.person} src='https://tse1.mm.bing.net/th?id=OIP.xn4yG10rX6X4uhzIgvk93QAAAA&pid=Api&P=0&h=180'/>
            <div className={style.profile}>
            <h6>Prites Kumar</h6>
            <p>Sr. Data Science Engineer</p>
            </div>
            </div>
           <p>TopHire was able to make the process really easy. They were able to schedule interviews with the best companies in the industry and drove the entire process smoothly.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Mentors
