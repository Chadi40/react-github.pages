import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import ProductCard from '../components/ProductCard';
import bg from '../assets/bg2.png';
import ProductFournisseurCard from '../components/ProductFournisseurCard';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const styles = {
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
};

export default function FournisseurService() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/fournisseur/${id}`);
        setProducts(data.products);
        setCategoryName(data.name);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <div><Navbar/>
    <div style={styles}>
      <h1 style={{ padding: '50px 0' }} className="text-center text-light ">
       Bonjour  {categoryName}  vous avez {products.length} produits
      </h1>
      
      <a
              className="page-link " style ={{marginLeft:336 ,width:800, marginBottom:20}} href={`/productadd/${window.location.pathname.split('/').pop()}`} >   <div style={{padding:0.5}}>Ajouter un service</div>     </a>
      
      
      <div style={{ minHeight: '100vh' }} className="d-flex-column">
        {products.map((product) => (
          <ProductFournisseurCard key={product.id} product={product} />
          
        ))}
      </div>
    </div>
    </div>
  );
}