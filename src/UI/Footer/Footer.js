import React from 'react'

const Footer = () => {
    return (
        <footer className="border-top">
            <div className="container ">
                <div className="d-flex justify-content-center">
                    <div className="">
                        <ul className="list-inline text-center">
                            <li className="list-inline-item">
                                <a href="https://github.com/ITR090?tab=repositories" target='_blank'>
                                    <span className="fa-stack fa-lg">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        {/* <div className="small text-center text-muted fst-italic">Copyright &copy; Your Website 2023</div> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer