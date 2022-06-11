import React, { useState, useEffect } from 'react';
import api from '../api';
import ProductCard from '../components/ProductCard';
import bg from '../assets/bg2.png';
import Navbar from '../components/Navbar';

const styles = {
  backgroundImage: `url(${bg})`,
  
  backgroundPosition: 'absolute',
  backgroundRepeat: 'repeat',
  minHeight: '700vh',
  minWidth: '100vh',
};

export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/products');
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  });

  const handleSearchTerm=(e) => {
   
    let value= e.target.value;
    setsearchTerm(value);
  };

 

  return (

    <div><Navbar/>

    <div style={styles}>
      <i class="bi bi-search  " style={{marginLeft:510,marginTop:36,position:'absolute', size:"2x"}}></i>

<div className="searchBar">
        <input 
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="rechercher"
        onChange={handleSearchTerm}
        style={{marginLeft:535,marginTop:30,width:400,height:40}}
        />

      </div>
     

     <div className="search_resulsts" style={{marginTop:50}}>
       
       {products.filter((val)=>{return (val.title.includes(searchTerm));  }).map((val)=>{return (
       <div className="search_result" key={val.id}><ProductCard key={val.id} product={val} /></div>);
       })}
     </div>
      
    
      
    </div>
    </div>
  );
}
