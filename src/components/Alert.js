import React, { startTransition } from 'react'

function Alert(props) {
  const captilise=(str)=>
  {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() +"!";
  }
  return (
   
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{captilise(props.alert.type)}</strong> {props.alert.msg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
   
  )
}

export default Alert