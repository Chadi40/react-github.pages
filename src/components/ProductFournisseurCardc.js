import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductFournisseurCard({ product }) {
  return (
    <div >
    <div className="card m-auto " style={{ maxWidth: '800px' }}>

<div class="dropdown" style={{marginLeft:760,position:"absolute"}}>
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
   
  </button>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
    <li><a class="dropdown-item active" href={"../"+window.location.pathname.split('/')[1]+"/productupdate/" + product.id}>Modifier</a></li>
    <li><a class="dropdown-item" href={"../"+window.location.pathname.split('/')[1]+"/productf/" + product.id}>Afficher plus</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Supprimer</a></li>
  </ul>
</div>
      
      <div className="row g-0">
        <div className="col-sm-5">
          <img
            src={`http://localhost:8080/product/${product.image}`}
            className="card-img-top h-100"
            alt={product.name}
          />
        </div>
        <div className="col-sm-7">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
           
       
           
          </div>
        </div>
      </div>
    </div>
    <h1 style={{marginTop:15}}></h1>
    </div>
  );
}