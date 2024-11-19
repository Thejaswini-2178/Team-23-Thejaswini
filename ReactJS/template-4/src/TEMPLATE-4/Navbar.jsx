import React from 'react'

function Navbar() {
    return (
        <div>
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
                <div className="container">
                    <a className="navbar-brand text-uppercase fw-bold d-lg-none" href="index.html">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" href="index.html">Home</a></li>
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" href="about.html">About</a></li>
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" href="products.html">Products</a></li>
                            <li className="nav-item px-lg-4"><a className="nav-link text-uppercase" href="store.html">Store</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
