import React, { setState, Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";


import './App.css';
  
class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;

    return (
      <div className="App">
        <Router>
          <Navbar />
          <AnimatedRoutes />
        </Router>
      </div>
     
   );
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}
export default App;