import React, { useState ,useCallback,useEffect} from "react";

import axios from 'axios';
import { useNavigate } from "react-router-dom";
import bg from '../assets/bg2.png';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';



function App() {
  const navigate = useNavigate();
    const [name, setname] = useState([]);
    const [password, setpassword] = useState([]);
    const[users,setusers]= useState([]);
    
    

    useEffect(() => {
      (async () => {
        try {
          await axios.get("http://localhost:8080/Users").then((response)=>{setusers(response.data);});
          
        } catch (error) {
          console.log(error);
        }
      })();
    }, []);
   

    const handleNameChange = useCallback(e => {       
        setname(e.target.value)                         
      }, [])

      const handlePasswordChange = useCallback(e => {       
        setpassword(e.target.value)                         
      }, [])


    const handleSubmit = (event) => {
        
        event.preventDefault(); 
        

    }

    function testc(){
        

        
    }

 

    return (
      <div>
        <Navbar />
  <div style={{backgroundImage: `url(${bg})` , height:720} }> 
    <br></br>
    <div className = "container">
    <div className = "row">
    <div className = "card col-md-6 offset-md-3 offset-md-3" style={{height:400}}>
    <h3 className="text-center"> Connexion</h3>
    
     <div className = "card-body" style={{marginTop:40}}>
    <form>
        <div className="form-group" >
          <label>Username </label>
          <input type="text" name="uname" placeholder="enter your name" value={name} onChange={handleNameChange} className="form-control"   />
          
        </div>
        <div className="form-group" style={{marginTop:20}}>
          <label>Password </label>
          <input type="password" name="pass" placeholder="enter your password" value={password} onChange={handlePasswordChange} className="form-control" />
          
        </div>

        
          <a class="nav-link" href="/inscription" style={{marginTop:20}}> S'inscrire ? </a>
       

       <button style={{marginTop:30 , marginLeft:400, width:200}} onClick={()=>{ 
           
           if(name.length==0 ||password.length==0  ){
            alert(" veuillez remplir tous les champs")
        
        }
            else
            {
              let s=0;
              let id=0;
                for(let i=0;i<users.length;i++){
                    if(users[i].name==name && users[i].password==password){ id=users[i].id; s=1;break;}
                }

                if(s==0){alert("username ou mot de passe incorrect")}
                if(s==1){navigate(`/${id}/Accueil`); alert("connected")}  

                
                
              
            }
            
        
        
        }  }>Se connecter</button>
        </form>
        </div>

        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default App;

