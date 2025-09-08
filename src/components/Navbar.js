import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
return (
<div>
  <nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
<button type="button" className="btn btn-danger" onClick={() => props.color("#ba5c50")}>red</button>
<button type="button" className="btn btn-warning" onClick={() => props.color("#b5b45b")}>yellow</button>
<button type="button" className="btn btn-success" onClick={() => props.color("#6da65b")}>green</button>
</div>
        <div className="form-check form-switch" style={{color: props.mode==='dark'?'white':'black'}}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {props.mode === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode'}
          </label>
        </div>
      </div>
    </div>
  </nav>
</div>
)
}

Navbar.propTypes = {
title: PropTypes.string.isRequired,
mode: PropTypes.string.isRequired,
toggle: PropTypes.func.isRequired
}

Navbar.defaultProps = {
title: 'Default Navbar',
mode: 'light'
}
