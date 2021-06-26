import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
//import SignUp from './components/pages/SignUp/SignUp';

function App() {
  return (
    <Router>
      
      <NavBar/>
      <Switch>
        <Route path = '/' exact component = {Home}/>
        <Route path = '/services' exact component = {Services}/>
        <Route path = '/products' exact component = {Products}/>

        {/*<Route path = '/sign-up' exact component = {SignUp}/>*/}

      </Switch>
      <Footer/>

    </Router>
  );
}

export default App;
