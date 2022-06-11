import React,{useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const redirect = () => {
  window.location.href = "../"+window.location.pathname.split('/')[1]+"/panier"
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
      <div class="btn-group" role="group" aria-label="Basic example">
      < a href="" className="btn btn-outline-dark" onClick={()=>navigate("../"+window.location.pathname.split('/')[1]+"/accueil")}>
     <i className="fa fa-sign-in me-1" ></i>Accueil</a> 

     < a href="" className="btn btn-outline-dark" onClick={()=>navigate("../"+window.location.pathname.split('/')[1]+"/allproducts")}>
     <i className="fa fa-sign-in me-1" ></i>Services</a>

     < a href="" className="btn btn-outline-dark" onClick={()=>navigate("../"+window.location.pathname.split('/')[1]+"/categories")}>
     <i className="fa fa-sign-in me-1" ></i>Catégories</a>

     < a href="" className="btn btn-outline-dark" onClick={()=>navigate("../"+window.location.pathname.split('/')[1]+"/messervices")}>
     <i className="fa fa-sign-in me-1" ></i>Mes Services</a>

     < a href="" className="btn btn-outline-dark" >
     <i className="fa fa-sign-in me-1" ></i>Contact</a>
        
        </div>
       
       
          <div onClick={redirect}>
            <i class=" bi bi-star"  style={{ fontSize: 35 ,marginLeft:460}}></i> 
            </div>
        
     
        
        <li class="nav-item dropdown">
          
         
        </li>
        
      </ul>
      
<div className="buttons">
  

   < a href="" className="btn btn-outline-dark" onClick={()=>navigate("/conexion")}>
     <i className="fa fa-sign-in me-1" ></i>Se deconnecter</a>
    
     
</div>




    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar