
import React from 'react'

const MainButton = (props) => {

  return (
    <button type={props.btnType} className={props.className} onClick={props.onClickBtn}>{props.children}</button>
  )
}

export default MainButton