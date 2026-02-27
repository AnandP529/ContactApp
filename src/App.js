import React from "react";
import './App.css';
// index.js or App.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContactApp from "./components/ContactApp";

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <nav className="navbar navbar-dark navbar-expand-sm bg-dark">
            <a href="/" className="navbar-brand">React ContactApp</a>
        </nav>
        <ContactApp/>
        
      </div>
    )
  }
}

export default App;

