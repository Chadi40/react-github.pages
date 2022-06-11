import React,{useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const redirect = () => {
  window.location.href = '/panier/1'
}

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div class="container">
    <a class="navbar-brand fw-bld fs-4" href="#" style={{marginBottom:10}}>Oevent</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <a class="nav-link "  href="/Accueil">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/allproducts">services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/categories">catégories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/messervices/1">Mes Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        
       
       
          <div onClick={redirect}>
            <i class=" bi bi-star"  style={{ fontSize: 35 ,marginLeft:460}}></i> 
            </div>
        
     
        
        <li class="nav-item dropdown">
          
         
        </li>
        
      </ul>
      
<div className="buttons">
  

   < a href="" className="btn btn-outline-dark" onClick={()=>navigate("/conexion")}>
     <i className="fa fa-sign-in me-1" ></i>Login</a>
    
     < a href="" className="btn btn-outline-dark ms-2" onClick={()=>navigate("/Inscription")}>
     <i className="fa fa-sign-in me-1" ></i>Register</a>
</div>




    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar