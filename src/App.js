import Home from './pages/Home';
import Homec from './pages/Homec';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Productsc from './pages/Productsc';

import Product from './pages/Product';
import Productc from './pages/Productc';
import AllProducts from './pages/AllProducts';
import AllProductsc from './pages/AllProductsc';

import Fournisseurservice from './pages/FournisseurService';
import Fournisseurservicec from './pages/FournisseurServicec';
import Accueil from './pages/Accueil';
import Accueilc from './pages/Accueilc';
import Accueil1 from './pages/Accueil1';
import Footer from './components/Footer';
import Panier from './pages/Panier';
import Panierc from './pages/Panierc';
import ProductUpdate from './components/ProductUpdate';
import ProductUpdatec from './components/ProductUpdatec';
import AddProduct from './components/AddProduct';
import AddProductc from './components/AddProductc';
import ProductPanier from './pages/ProductPanier';
import ProductPanierc from './pages/ProductPanierc';
import Product1 from './pages/Product1';
import Product1c from './pages/Product1c';
import Inscription from './components/Inscription';
import Conexion from './components/Conexion';




function App() {
  return (
    <BrowserRouter>
     
      <Routes>
      <Route path="/" element={<Accueil />} />
        <Route path="/categories" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/conexion" element={<Conexion />} />
        <Route path="/category/:id" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/messervices/:id" element={<Conexion />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/Accueil1" element={<Accueil1 />} />
        <Route path="/panier/:id" element={<Conexion />} />
        <Route path ="/productupdate/:id" element ={<ProductUpdate/>} />
        <Route path ="/productadd/:id" element ={<AddProduct/>}/>
        <Route path ="/productpanier/:id" element ={<ProductPanier/>}/>
        <Route path="/productf/:id" element={<Product1 />} />
      
       
       
        <Route path=":id/Accueil" element={<Accueilc />} />
        <Route path=":id/categories" element={<Homec/>} />
        <Route path=":id/category/:id" element={<Productsc />} />
        <Route path=":id/product/:id" element={<Productc />} />
        <Route path=":id/allproducts" element={<AllProductsc />} />
        <Route path=":id/messervices/" element={<Fournisseurservicec />} />
        <Route path=":id/panier" element={<Panierc />} />
        <Route path =":id/productupdate/:id" element ={<ProductUpdatec/>} />
        <Route path =":id/productadd" element ={<AddProductc/>}/>
        <Route path =":id/productpanier/:id" element ={<ProductPanierc/>}/>
        <Route path=":id/productf/:id" element={<Product1c />} />
        
        
        
       
        
      </Routes>
      
      
      
    </BrowserRouter>
    
  );
}

export default App;
