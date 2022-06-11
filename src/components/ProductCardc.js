import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
    const navigate = useNavigate();
  return (
    <div className="card m-auto mb-4" style={{ maxWidth: '800px' }}>
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
            <a href="" className="btn btn-outline-dark"
           onClick={()=>navigate("../"+window.location.pathname.split('/')[1]+"/product/"+product.id)}
             
            >
              show more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}