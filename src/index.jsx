// ./src/index.jsx

import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route} from 'react-router';

class Home extends Component {
	render() {
		render (<h1>Hi</h1>);
	}
}

render(<Home />, document.getElementById('container'));
render(
    <Router>
        <Route path="/" component={Home}/>
    </Router>,
    document.getElementById('container')
);