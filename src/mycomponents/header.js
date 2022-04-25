import React from 'react'
import PropTypes from 'prop-types'

export default function header(props) { //props is object passed from app
  return (
      <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">about</a>
        </li>
        
      </ul>
      {props.searchBar?<form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>:"no search bar"}
    </div>
  </div>
</nav>
      </>
    
  )
}
header.defaultProps={ // if values are not passed from App.js then these are used 
  title:"default title",
  searchBar:true
}

header.propTypes={
  title: PropTypes.string, //this specify that title is string type
  searchBar:PropTypes.bool.isRequired //isRequired make compulsory to set value of searchbar
}