import React from 'react'
import bg1 from '../assets/bg1.png';
import Navbar from '../components/Navbar';



const styles = {
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };


 function Accueil1() {
  return (

    <div><Navbar/>

<div style={styles}>




<div class="card text-black bg mb-3"style={{backgroundColor:'#F5F5F5' , marginLeft:918 , height:styles.height , width:500}}  >

    
    
    
     <h5 class="card-title display-3 fw-bolder mb-6" style ={{marginTop:50,marginLeft:20}}>Vivez des Souvenirs innoubliables</h5>

     <p class="card-text lead fs-2" style ={{marginTop:50,marginLeft:20}}>Reposez-vous sur notre savoir-faire,notre créativité et notre pétillance pour donner vie à vos visions </p>
     <a class="page-link" href="/Accueil" style={{marginTop:50,width:80,marginLeft:380}}>Next</a>
     
     
     
     
     </div>




    </div>
    </div>
    
  )
}

export default Accueil1