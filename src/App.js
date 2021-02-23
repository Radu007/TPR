import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./Components/Header/Header.jsx"
import Main from './Components/Main/Main';
import Article from './Components/Article/Article'
import About from './Components/About/About';

function App() {

	const url = 'http://localhost:8000'
	const [articles, setArticles] = useState([])
	
	const call = () => {axios.get(url).then((response) => {
			setArticles(response.data)
		})}

	useEffect(() => {
  call()
  }, [url])


  return (
		<Router>
    <div className="app">
				<Route path="/" component={Header} />
			<Switch>

				<Route exact path="/">
					<h1>Main page</h1>
				</Route>

				<Route path='/about' component={About} />

				<Route exact path="/post">
					<Main articles={articles} />
				</Route>

				<Route path='/post/:id'>
					{articles && <Article articles={articles} asaProp={call}/>}
				</Route>

				{/* <Route 
					path='/post/:id'
					render={(props) => (
						<Article articles={props.articles} asaProp={props.call}/>
					)} /> */}



			</Switch>
		
    </div>
		</Router>
  );
}

export default App;
