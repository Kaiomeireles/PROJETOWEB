import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './COMPONENTS/Nav';
import Footer from './COMPONENTS/Footer';
import Error from './Routes/Error';
import Home from './Routes/Home';
import Login from './Routes/Login';
import Produtos from './Routes/Produtos';
import Contato from './Routes/Contato';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function Main() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/contato" component={Contato} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Main;