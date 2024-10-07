import React from 'react'

export default function About(props) {
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
    <h1>About us</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quidem eius dignissimos ratione tempore deserunt neque, voluptates reprehenderit, dicta eligendi libero quos ipsa delectus magnam, sed illum eveniet cumque optio.</p>
    </div> 
    </>
  )
}
