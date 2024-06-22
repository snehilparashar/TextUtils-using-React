import React from 'react'

export const Alert = (property) => {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)

    }
  return (
    <div style={{height: "45px"}}>
      {property.alert && <div className={`alert alert-${property.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(property.alert.type)}:  {property.alert.msg}</strong>
          {/* <button type="button" classNamess="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>}
    </div>
      
  )
}
