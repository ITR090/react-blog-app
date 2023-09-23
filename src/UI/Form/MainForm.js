

import React from 'react'


const MainForm = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
            <div className="card-img-left d-none d-md-flex">
            </div>
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">{props.title}</h5>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainForm