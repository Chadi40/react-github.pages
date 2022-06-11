import React, { Component } from 'react'
import axios from 'axios';
import Navbar from '../components/NavbarConnected';



class ProductUpdate extends Component {

        

    
    
    constructor(props) {
        super(props)

      
   

       

        this.state = {
            selectedFile:null,
            
            title:  '',
            description: '',
            image: '',
            price: '',
            city:'',
            
           
        }
        this.changetitleHandler = this.changetitleHandler.bind(this);
        this.changedescriptionHandler= this.changedescriptionHandler.bind(this);
        this.changeimageHandler = this.changeimageHandler.bind(this);
        this.changepriceHandler = this.changepriceHandler.bind(this);
        this.changecityHandler= this.changecityHandler.bind(this);

       
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/products/${window.location.pathname.split('/').pop()}`).then((res)=>{
            let x = res.data;
            this.setState({title: x.title , description: x.description , image : x.image , price : x.price , city : x.city});
        });
        
    }

    

    

    updateProduct = (e) => {
        e.preventDefault();
       
        if(this.state.title.length==0 ||this.state.title.description==0 ||this.state.title.image==0 ||this.state.title.price==0 ||this.state.city.length==0 ){
            alert(" veuillez remplir tous les champs")
        }
      else{
        axios.put(`http://localhost:8080/products/product/${window.location.pathname.split('/').pop()}` ,{"title":this.state.title,"description":this.state.description,"image":this.state.image,"price":this.state.price,"city":this.state.city});
        alert("produit a été modifié");  }
       
    }
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }
   
    
    changetitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changedescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeimageHandler= (event) => {
        this.setState({image: event.target.value});
    }

    changepriceHandler= (event) => {
        this.setState({price: event.target.value});
    }

    changecityHandler= (event) => {
        this.setState({city: event.target.value});
    }

    cancel(){
        this.props.history.push(`/messervices/${window.location.pathname.split('/').pop()}`);
    }



  
       
          
            
            
          
      

    render() {

        
        return (

            <div>
                <Navbar/>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Product</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> title: </label>
                                            <input placeholder="title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changetitleHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> description: </label>
                                            <input  placeholder="description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changedescriptionHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> image   : </label>
                                            
                                            <input placeholder="image" name="image" className="form-control" 
                                                value={this.state.image} onChange={this.changeimageHandler}/>
                                        </div>

                                        

                                        <div className = "form-group">
                                            <label> price: </label>
                                            <input placeholder="price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changepriceHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> city: </label>
                                            <input placeholder="city" name="city" className="form-control" 
                                                value={this.state.city} onChange={this.changecityHandler}/>
                                        </div>
                                       

                                        <button style={{marginTop:10}} onClick={this.updateProduct}>Save</button>
                                        <button  onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default ProductUpdate