import React, { useState } from "react";
import propTypes from "prop-types";
export default function TextBox(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleOnClickUpper = () => {
    if (/^\d+$/.test(text)) {
      props.showAlert("Failed", "It only consists of numbers");
    } else {
      setText(text.toUpperCase());
      props.showAlert("Text has been converted to uppercase!", "success");
    }
  };
  const handleOnClickLower = () => {
    if (/^\d+$/.test(text)) {
      props.showAlert("Failed", "It only consists of numbers");
    }else{
      
    setText(text.toLowerCase());
    props.showAlert("Text has been converted to lowercase!","success")
    }

  };
  const handleOnClickAC = () => {
    setText("")
    props.showAlert("Text has been cleared","success")

  }
  const handleOnClickCopy = () => {
    navigator.clipboard.writeText(text).then(()=>{
        props.showAlert("Text has been copied to clipboard!","success")
    })
  }
  return (
    <>
    <div className={`bg-${props.mode} textBoxBody`}>
      <div className={`container bg-${props.mode} `}>
        <div className="mb-3">
          <h1 className={`text-${props.mode==='light'?'dark':'light'} `}>{props.heading}</h1>
          <textarea
            value={text}
            onChange={handleOnChange}
            className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'} placeholderColor${props.mode}`}
            rows="6"
            id="form"
            placeholder="Enter your text here"
          />
        </div>
        <div className=" pb-3">
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleOnClickUpper}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleOnClickLower}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnClickAC}>Clear All</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnClickCopy}>Copy to Clipboard</button>
        </div>
        
      </div>
      <div className="container my-2">
        <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>Your text summary:</h3>
        {(() => {
          if (text.trim() !== "") {
            return (
              <>
                <p className={`text-${props.mode==='light'?'dark':'light'}`}>
                  <b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters.
                </p>
                <p className={`text-${props.mode==='light'?'dark':'light'}`}>{0.008 * text.split(" ").length} minutes read</p>
                
              </>
            );
          }else{
            return (
                <>
                  <p className={`text-${props.mode==='light'?'dark':'light'}`}>
                    <b>0</b> words and <b>0</b> characters.
                  </p>
                  <p className={`text-${props.mode==='light'?'dark':'light'}`}><b>0</b> minutes read</p>
                  
                </>
              );
          }
        })()}

        <h4 className={`text-${props.mode==='light'?'dark':'light'}`}>Preview</h4>
        <p className={`text-${props.mode==='light'?'dark':'light'} pb-5`}>{text.length>0?text:"Nothing to preview"}</p>
      </div>
      </div>
    </>
  );
}
TextBox.propTypes = {
  heading: propTypes.string.isRequired,
};
TextBox.defaultProps = {
  heading: "Text Modifier",
};
