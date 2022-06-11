import React, { useState, useEffect } from 'react';
import CategoryCard from '../components/CategoryCard';
import api from '../api';
import bg from '../assets/bg2.png';
import Navbar from '../components/Navbar';
const styles = {
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
};

export default function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/categories');
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
    <Navbar/>
    <div style={styles}>
      <h1 style={{ padding: '100px 0' }} className="text-center text-light">
        Catégories
      </h1>
      <div className="d-flex justify-content-center align-items-center gap-5">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
    </div>
  );
}
