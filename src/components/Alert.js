import React from "react";
export default function Alert(props) {
  const heightObj = {
    height:'50px'
  }
  return (
    <div style={heightObj} className={`bg-${props.mode}`}>
        {props.alert && <div className={`bg-${props.mode}`}><div className={`alert  alert${props.mode}  my-0 alert-dismissible fade show`} role="alert">
        <strong className={`text-${props.alert.type}`}>{props.alert.type}:</strong> {props.alert.message}
      </div></div>}
      </div>
  );
}
