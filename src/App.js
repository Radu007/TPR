import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./Components/Header/Header.jsx"
import Main from './Components/Main/Main';
import Article from './Components/Article/Article'

function App() {
  return (
		<Router>
    <div className="app">			
				<Route path="/" component={Header} />
			<Switch>
				<Route exact path='/' component={Main} />
				<Route exact path='/Article/:id' component={Article} />
			</Switch>
		
    </div>
		</Router>
  );
}

export default App;
