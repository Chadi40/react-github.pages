import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Card({ category }) {
    const navigate = useNavigate();
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img
          className="card-img-top"
          src={`http://localhost:8080/category/${category.image}`}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{category.name}</h5>
          <p className="card-text">{category.description}</p>
         

          <a href="" className="btn btn-outline-dark"
           onClick={()=>navigate("../"+window.location.pathname.split('/')[1]+"/category/"+category.id)}
             
            >
             afficher tout
            </a>
        </div>
      </div>
    </div>
  );
}