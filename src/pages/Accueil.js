import React from 'react'
import bg from '../assets/bg2.png';
import Navbar from '../components/Navbar';




const styles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

 function Accueil() {
    
    
  return (
    <div><Navbar/>

<div style ={styles}>






<div class="card text-black bg mb-3"style={{backgroundColor:'#F5F5F5' , marginLeft:920 , height:styles.height , width:500}}  >

    
    
    
     <h5 class="card-title display-3 fw-bolder mb-6" style ={{marginTop:50,marginLeft:20}}>La Perfection dans les moindres détails</h5>

     <p class="card-text lead fs-2" style ={{marginTop:50,marginLeft:20}}>La différence entre l'ordinaire et l'extraordinaire,c'est ce petit extra ! </p>
     <a class="page-link" href="/Accueil1" style={{marginTop:50,width:80,marginLeft:380}}>Next</a>
     
     
     
     
     
     </div>




    </div>
    </div>
    
  )
}

export default Accueil