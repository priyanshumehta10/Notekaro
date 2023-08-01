import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    
   <div style={{height:"50px"}}> 
      {props.alert && <div className="alert alert-success alert-dismissible fade show"  role="alert">
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

    <strong>{capitalize(props.alert.type)}</strong>   {props.alert.msg}
    </div>}
</div>
    
  )
}
