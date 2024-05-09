import React,{useState} from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props){    
    const [text,setText] = useState("");
    const ChangetoCap=()=>{
      let newtext = text.toUpperCase();
      setText(newtext);
      props.ShowAlert("Converted To Uppercase", "success");
    }
    const handleOnChange=(event)=>{
      setText(event.target.value);
    }
    const lowerCase=()=>{
      let small = text.toLowerCase();
      setText(small);
      props.ShowAlert("Converted To LowerCase", "success");
    }
    const clear=()=>{
      setText("");
      props.ShowAlert("Text Cleared", "success");
    }
    const copyText=()=>{    
      navigator.clipboard.writeText(text);
      props.ShowAlert("Copy to Clipboard", "primary");
    }
    const removeSpace=()=>{
      let space = text.split(/[ ]+/);
      setText(space.join(" "));
      props.ShowAlert("Extra Space Remove" , "success");
    }
  return (
    <div>
      <div className="container">
        <h2>Try TextUtils - Word counter, Character counter, remove extra spaces</h2>
        <div className="mb-3">
          <textarea  className="form-control" style={props.nav} value={text}  onChange={handleOnChange}  id='text-box' rows="15"></textarea>
        </div>
        <button style={props.btn} disabled={text.length===0} className='btn p-2 mx-2' onClick={ChangetoCap}> Convert to Uppercase</button>
        <button style={props.btn} disabled={text.length===0} className='btn p-2 my-2' onClick={lowerCase}> Convert to Lower Case</button>
        <button style={props.btn} disabled={text.length===0} className='btn p-2 mx-2' onClick={clear}> Clear</button>
        <button style={props.btn} disabled={text.length===0} className="btn p-2 mx-0" onClick={copyText}>Copy Text</button>
        <button style={props.btn} disabled={text.length===0} className='btn p-2 mx-2'  onClick={removeSpace} >RemoveSpace</button>
      </div>
      <div className="container py-4">
        <h1>Your Text Summary</h1>
        <p className='pt-2'> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word {text.length} characters</p>

        <p className='pt-2'> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to previwe"}</p>      
      </div>
    </div>
  )
}
export {TextForm};
TextForm.propTypes = {heading : PropTypes.string.isRequired}
TextForm.defaultProps = { heading : " Enter Your Text Here below"}    