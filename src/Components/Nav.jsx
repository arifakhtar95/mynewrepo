import React from "react";
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
const Nav=(props)=>{    
    return(
        <nav className={`navbar navbar-expand-md navbar-light`} style={props.nav}>
          <div className="container">
            <Link className="navbar-brand" id="bazigar" to="/">{props.title}</Link>
            <button className="navbar-toggler" id="icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span> 
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className='nav-link' id="home"  aria-current="page" to="/">{props.home}</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"  id='about' to="/about">{props.aboutus}</Link>
                </li>
            </ul>  
             <div className="d-flex">
                <div className="bg-primary rounded mx-2" onClick={()=>{props.togglemode3('primary')}} style={{height:'22px', width:'22px',border:'1px solid white' , cursor: 'pointer'}}></div>
                <div className="bg-success rounded mx-2" onClick={()=>{props.togglemode3('success')}} style={{height:'22px', width:'22px',border:'1px solid white', cursor: 'pointer'}}></div>
                <div className="bg-danger rounded mx-2" onClick={()=>{props.togglemode3('danger')}} style={{height:'22px', width:'22px', border:'1px solid white', cursor: 'pointer'}}></div>
                <div className="bg-warning rounded mx-2" onClick={()=>{props.togglemode3('warning')}} style={{height:'22px', width:'22px', border:'1px solid black', cursor: 'pointer'}}></div>
                <div className="bg-secondary rounded mx-2" onClick={()=>{props.togglemode3('secondary')}} style={{height:'22px', width:'22px',border:'1px solid white', cursor: 'pointer'}}></div>
                <div className="bg-light rounded mx-2" onClick={()=>{props.togglemode3('light')}} style={{height:'22px', width:'22px', border:'1px solid black', cursor: 'pointer'}}></div>                
            </div>
            </div>
         </div>       
        </nav>
    )
}
export{Nav};
Nav.propTypes ={title : PropTypes.string.isRequired,
    text : PropTypes.string
}
Nav.defaultProps ={
    title : " Baazigar ", 
    home : " Home ",
    aboutus: " About Us ",
}
