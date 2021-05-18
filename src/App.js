import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      
      <NavBar/>
      <Switch>
        <Route path = '/'/>
      </Switch>

    </Router>
  );
}

export default App;
