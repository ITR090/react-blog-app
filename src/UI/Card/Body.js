import React from 'react'

const Body = (props) => {
  return (
    // Main Content
    /*
    1- container div
    2- row div
    3- col div
    4- content div
    col-md-10 col-lg-8 col-xl-7
    **/ 
    
        <div className="container">
            <div className="mt-5 row g-4">
                    {props.children}
            </div>
        </div>
  )
}

export default Body