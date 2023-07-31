import React from 'react'

const DivCol = (props) => {
    // col-md-6 means 12/6 =2 so in mid screens 2 cols
    //with pagnation col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4
    // no pagenation col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12
  return (
    <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
        {props.children}
    </div>
  )
}

export default DivCol