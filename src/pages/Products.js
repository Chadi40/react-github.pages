import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import ProductCard from '../components/ProductCard';
import bg from '../assets/bg2.png';
import Navbar from '../components/Navbar';

const styles = {
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
};

export default function Products() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/categories/${id}`);
        setProducts(data.products);
        setCategoryName(data.name);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <div> 
      <Navbar/>
    <div style={styles}>




      <h1 style={{ padding: '50px 0' }} className="text-center text-light ">
        {categoryName} ({products.length})
      </h1>
      <div style={{ minHeight: '100vh' }} className="d-flex-column">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
}
