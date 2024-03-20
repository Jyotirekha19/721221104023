import React from 'react'
import {NavLink, Link} from 'react-dom'
import Home from './Home'
import Product from './Product'

function Header() {
  return (

    <>
    <div>
 
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
          <a className="nav-link" href="/product">Product</a>
        </div>
      </div>
    </div>
  </nav>
</div>

<Home/>
<Product/>
    
    </>
  
  )
}

export default Header
