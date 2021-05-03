import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Skills from './components/Skills/Skills/Skills';
import HeaderNavbar from './components/Home/HeaderNavbar/HeaderNavbar';
import Contact from './components/Contact/Contact/Contact';
import Projects from './components/Projects/Projects/Projects';

function App() {
  return (
    <Router>
    <HeaderNavbar></HeaderNavbar>
<Switch>
  <Route  exact path='/'>
    <Home></Home>
  </Route>
  <Route path='/skills'>
    <Skills></Skills>
  </Route>
  <Route path='/contact'>
    <Contact></Contact>
  </Route>
  <Route path='/projects'>
    <Projects></Projects>
  </Route>
</Switch>
      
      
   
    </Router>
  );
}

export default App;
