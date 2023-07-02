import React from 'react'

const DivCol = (props) => {
    // col-md-6 means 12/6 =2 so in mid screens 2 cols
  return (
    <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4'>
        {props.children}
    </div>
  )
}

export default DivCol