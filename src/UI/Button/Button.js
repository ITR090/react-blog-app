
import Button from 'react-bootstrap/Button';

import React from 'react'

const MainButton = (props) => {

  return (
    <Button type={props.btnType} className={props.className} onClick={props.onClickBtn}>{props.children}</Button>
  )
}

export default MainButton