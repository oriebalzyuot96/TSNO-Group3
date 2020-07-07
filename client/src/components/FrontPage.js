import  React, {Component } from 'react';

import logo from './Logo.png';
import axios from 'axios'

class FrontPage extends Component {
   
    
       constructor(){
        super();
       
        this.state = {
      value:"teacher",
      val:"amman",

      users:[]
      
    };
        this.handleChange1 = this.handleChange1.bind(this)
        //this.handleChange2= this.handleChange2.bind(this)
        
        this.handleSubmit1 = this.handleSubmit1.bind(this);
        
  
  
    };


handleSubmit1(event) {
    alert("Your favorite flavor is: " + this.state.value +this.state.val);
    event.preventDefault();
    console.log(this.state.value+this.state.val)
    //console.log("orieb")
    

  //FrontPage//connect server with client 
   axios.get
   ("http://localhost:3000/search",this.state.value)
    .then((res) => {
        console.log(this.state.value)
          console.log(res)
          this.setState({
            users:res.data
          })
    }).catch((error) => {
        console.log(error)
    });
  
  }
 

  handleChange1 = event => {
    this.setState({
       value: event.target.value,
       val:event.target.val
      
      });
  };
  
 
//make select input 
    render() { 
        return (
            <>
            <div>
<br></br><br></br>
                <form onSubmit={this.handleSubmit1}>
                    <label > Search By catogry of  Serves
                         <select className="searchI" value={this.state.value} onChange={this.handleChange1} >
                        <option value="teacher">teacher</option>
                        <option value="smith">smith</option>
                        <option value="doctor">doctor</option>
                        <option value="carpenter">carpenter</option>
                    </select>
                    </label>
                    <label > Search 
                         <select className="searchI" val={this.state.val} onChange={this.handleChange1} >
                        <option value="amman">amman</option>
                        <option value="irbid">irbid</option>
                        <option value="jarsh">jarsh</option>
                        <option value="karak">maan</option>
                    </select>
                    </label>

<input type="submit" value="Search"></input>
<div>

{this.state.users.map(user => 

  {
    //service: "smith"
if(user.service==this.state.value || user.location==this.state.val){
  return (
    <div>
<div>{user.name}</div>
<div>{user.email}</div>
<div>{user.service}</div>
<br></br><br></br><br></br>
</div>



  )
}



  } 
 
)}



</div>
</form>
</div>
  <br></br><br></br>

            
          
            </>
        );
    }
}

export default FrontPage;


