import React from 'react'

const Header = (props) => {
  return (
        // page header   
        // row gx-4 gx-lg-5 justify-content-center
        // col-md-10 col-lg-8 col-xl-7
        <header className="masthead" style={{backgroundImage :"url(http://localhost:3000/assets/img/home-bg.jpg)"}}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="justify-content-center">
                    <div className="">
                        {props.children}
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Header


