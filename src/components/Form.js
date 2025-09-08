import React from 'react'
import { useState } from 'react'

export default function Form(props) {
  const [text, setText] = useState('');

  const changeText = () => {
    setText(text.toUpperCase());
  }

    const changeText2 = (e) => {
    setText(e.target.value);
  }

  return (<>
<div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
    <h1 className='my-3'>{props.title}</h1>
    <div className="form-floating">
<textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }} value={text} onChange={changeText2}></textarea>
<label htmlFor="floatingTextarea2">Random</label>
</div>
<button className='btn btn-primary my-3' onClick={changeText}>Ucase</button>
</div>
<div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
  <h3>Summary</h3>
  <p>Length : {text.length > 0 ? text.length : "No text entered"} </p>
</div>
</>
  )
}
