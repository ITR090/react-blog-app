import React from 'react'

export const Pagination = (props) => {

    let pages = [];

    for (let i = 1; i <= Math.ceil(props.pages/props.postsPerPage) ; i++) {
        pages.push(i)
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination d-flex justify-content-center">
                {/* <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li> */}
                {pages.map((page,index)=>{
                    return (
                     <li className="page-item page-link"  key={index} onClick={()=>{props.setcurrentPage(page)}}>{page}</li>
                    )
                })}
                {/* <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li> */}
            </ul>
        </nav>
    )
}
