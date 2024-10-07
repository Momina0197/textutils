import React, { useState } from 'react'


export default function TextArea(props) {

  const [text, setText] = useState("");
  const changeText = () => {
    console.log("Upper case was clicked");
    let newChange = text.toUpperCase();
    setText(newChange)
    props.showAlert("Coverted to upperCase", "success");
  }
  const updated = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div className="form-floating" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
        <h2>Type here</h2>
        <textarea className="form-control" value={text} onChange={updated} style={{ backgroundColor: props.mode === 'dark' ? '#01010a' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} rows="8" id="myBox"></textarea>
        <label htmlFor="floatingTextarea"></label>
        <button type="button" className="btn btn-success my-3" onClick={changeText}>Convert to Upper case </button>
        <p> words {text.split(" ").length} character {text.length}</p>
        <h2>Your Summary</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
