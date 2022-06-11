import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
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
            <Link
              to={{
                pathname: `/product/${product.id}`,
              }}
              className="btn btn-primary stretched-link"
            >
              show more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
