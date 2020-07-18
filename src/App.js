import React, {Component} from 'react';
import Nav from './Components/Nav/Nav'
import routes from './routes'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        console.log('App.js: ', this.props); 
        return ( 
        <div>
            <Nav />
            {routes}
        </div> );
    }
}
 
export default App;
