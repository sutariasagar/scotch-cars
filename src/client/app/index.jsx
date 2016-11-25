// ./src/index.jsx

import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route} from 'react-router';

class Home extends Component {
	render() {
		return (<h1>Home Page</h1>);
	}
}

class Car extends Component {
	render() {
		return (<h1>Car Page</h1>)
	}
}

class About extends Component {
    render() {
        return (<h1>About Page</h1>)
    }
}

render(
    <Router>
        <Route path="/" component={Home}/>
		<Route path="/cars" component={Car}/>
		<Route path="/about" component={About}/>
    </Router>,
    document.getElementById('container')
);