import React, { Component } from 'react'
import axios from 'axios';
import bg from '../assets/bg2.png';
import Navbar from '../components/Navbar';




class Inscription extends Component {

    
    
    constructor(props) {
        super(props)

      

        this.state = {
            
            mail: '',
            name: '',
            numero: '',
            password: '',
            confirmpassword:'',
            
            
           
        }
        this.changemailHandler = this.changemailHandler.bind(this);
        this.changenameHandler= this.changenameHandler.bind(this);
        this.changenumeroHandler = this.changenumeroHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.changeconfirmpasswordHandler = this.changeconfirmpasswordHandler.bind(this);
       

       
    }

    
    addProduct = (e) => {
        e.preventDefault();


        if(this.state.mail.length==0 ||this.state.numero.length==0 ||this.state.name.length==0 ||this.state.password.length==0  ){
            alert(" veuillez remplir tous les champs")
        }

        else if ( this.state.confirmpassword != this.state.password || this.state.password.length<=5){alert("mot de passe invalide ou ne correspend pas aux critères")}
       
        else {
        axios.post(`http://localhost:8080/Users/inscription/` ,{"name":this.state.name,"numero":this.state.numero,"mail":this.state.mail,"password":this.state.password});
        alert("inscription a été faite");}
        window.location.reload(false);
       
    }

    

    

   
    
    changemailHandler= (event) => {
        this.setState({mail: event.target.value});
    }

    changenameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changenumeroHandler= (event) => {
        this.setState({numero: event.target.value});
    }

    changepasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    changeconfirmpasswordHandler= (event)=> {
        this.setState({confirmpassword: event.target.value});
    }

  

    cancel(){
        this.props.history.push(`/messervices/${window.location.pathname.split('/').pop()}`);
    }

  

    render() {

       
       
        
        return (
            <div>
                <Navbar/>
            <div style={{backgroundImage: `url(${bg})` , height:720} }>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Fiche D'inscription</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> name : </label>
                                            <input placeholder="enter your name"  name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changenameHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> mail: </label>
                                            <input placeholder="enter your mail" name="mail" className="form-control" 
                                                value={this.state.mail} onChange={this.changemailHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> numero : </label>
                                            <input placeholder="enter your num" name="numero" className="form-control" 
                                                value={this.state.numero} onChange={this.changenumeroHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> password : </label>
                                            <input type = "password" placeholder="enter your password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changepasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> confirm your password : </label>
                                            <input type = "password" placeholder="confirm your password" name="confirmpassword" className="form-control" 
                                             value ={this.state.confirmpassword} onChange={this.changeconfirmpasswordHandler}/>
                                               
                                        </div>

                                       <h1></h1>

                                        <button style={{marginTop:30}} onClick={this.addProduct}>Save</button>
                                        <button  onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
            </div>
        )
    }
}

export default Inscription