import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/NavbarConnected';




export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const navigate = useNavigate();
  
  
 
  
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/products/${id}`);
        setProduct(data);
        
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  return (
    <div><Navbar />
    <div
      style={{ height: '70vh' }}
      className="container d-flex justify-content-center align-items-center"
    >
      <div className="row">
        <div className="col-md-6">
          <img
            width={'100%'}
            src={`http://localhost:8080/product/${product.image}`}
            alt={product.title}
          />
        </div>
        <div className="col-md-6 p-3">
          <div className="d-flex align-items-center mb-2">
            <h1>{product.title}</h1> &nbsp;&nbsp;
            <p>( {product.city} )</p>
          </div>
          <p>{product.price} MAD</p>
          <p>{product.description}</p>
          
          
          

          <button className="btn btn-primary" onClick={ () => { 
            
    axios.put(`http://localhost:8080/client/addpanier/${window.location.pathname.split('/')[1]}/${id}`)
    alert("produit ajouté dans vos favoris")
    navigate("../"+window.location.pathname.split('/')[1]+"/accueil")
    
  }}   >Ajouter à mes favoris</button>
        </div>
      </div>
    </div>
    </div>
  );
}