import './App.css';
import React,{useState} from "react";
import {Nav} from "./Components/Nav";
import {TextForm} from "./Components/TextForm";  
import Alert from "./Components/Alert";
import {About} from './Components/About';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 

function App() {
  const [alert,setAlert] = useState(null);
  const [nav,setNav]= useState ({ backgroundColor: '#f8f9fa', color: '#6c757d' });
  const [btn,setBtn] = useState ({ backgroundColor:'#6c757d', color: 'white' });
  const ShowAlert=(message,type)=>{
    setAlert({
      msg: message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const togglemode3=(cls)=>{ 
    if(cls==="primary"){     
      setBtn({ backgroundColor: '#0d6efd', color: 'white' });
      setNav({ backgroundColor:'#0d6efd', color:'white' });
      document.body.style.background='#072791';
      document.body.style.color='white';           
      document.getElementById('home').style.color='white';
      document.getElementById('about').style.color='white';
      document.getElementById('bazigar').style.color='white';
    ShowAlert("Blue DarkMode Has Been Enable", "primary");
    }    
    else if(cls==="success"){     
      setBtn({ backgroundColor: '#198754', color: 'white' });
      setNav({ backgroundColor:'#198754', color:'white' });
      document.body.style.background='#105937';
      document.body.style.color='white';           
      document.getElementById('home').style.color='white';
      document.getElementById('about').style.color='white';
      document.getElementById('bazigar').style.color='white';
    ShowAlert("Green DarkMode Has Been Enable", "success");
    }
    else if(cls==="danger"){
      setBtn({ backgroundColor: '#dc3545', color: 'white' });
      setNav({ backgroundColor:'#dc3545', color:'white' });
      document.body.style.background='#a11d2a';
      document.body.style.color='white';           
      document.getElementById('home').style.color='white';
      document.getElementById('about').style.color='white';
      document.getElementById('bazigar').style.color='white';
      ShowAlert("Red DarkMode Has Been Enable", "danger");
    }
    else if(cls==="secondary"){
      setBtn({ backgroundColor: '#6c757d', color: 'white' });
      setNav({ backgroundColor:'#6c757d', color:'white' });
      document.body.style.background='#3f454a';
      document.body.style.color='white';           
      document.getElementById('home').style.color='white';
      document.getElementById('about').style.color='white';
      document.getElementById('bazigar').style.color='white';
      ShowAlert("DarkMode Has Been Enable", "secondary");
    }
    else if(cls==="warning"){
      setBtn({ backgroundColor: '#ffc107', color: 'black' });
      setNav({ backgroundColor:'#ffc107', color:'black' });
      document.body.style.background='#ebb102';
      document.body.style.color='black';           
      document.getElementById('home').style.color='black';
      document.getElementById('about').style.color='black';
      document.getElementById('bazigar').style.color='black';
      ShowAlert("Yellow DarkMode Has Been Enable", "warning");
    }
    else{
    document.getElementById('home').style.color='grey';
    document.getElementById('about').style.color='grey';
    document.getElementById('bazigar').style.color='grey';
    setNav({ backgroundColor: '#f8f9fa', color: '#6c757d' });
    setBtn({ backgroundColor:'#6c757d', color: 'white' });
    document.body.style.background='white';
    document.body.style.color='black';
    ShowAlert(" LightMode Has Been Enable", "secondary ");      
  }
}
  return(
    <Router>
      <Nav nav={nav} togglemode3={togglemode3}/>    
      <Alert alert={alert}/>
      <div className="container my-3">   
        <Switch>
          <Route exact path="/about">
            <About nav={nav}/>
          </Route>
          <Route exact path="/">
            <TextForm ShowAlert={ShowAlert} nav={nav} btn={btn} togglemode3={togglemode3}/>
          </Route>
        </Switch>
      </div>  
    </Router> 
  ) 
}
export default App;