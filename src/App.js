import React,{ Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar.js';
import CourseList from './components/CourseList.js';
import './App.css';

class App extends Component{
	render(){
		  return (
		    <div>
		    	<NavBar />
		    	<CourseList />
		    </div>
		  );
	}
}

export default App;
