import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import axios from 'axios'

class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    userHandler = e => this.setState({email: e.target.value})

    passwordHandler = e => this.setState({password: e.target.value})

    loginHandler = () => {
        const data = axios.post('/auth/login', {email: this.props.email, password: this.props.password}); console.log(data)
    }

    registerHandler = () => {
        const data = axios.post('auth/register', {email: this.props.email, password: this.props.password}); console.log(data)
    }

    render() { 
        return ( 
            <div>
                <input placeholder='email' onChange={this.userHandler}/>
                <input type='password' placeholder='password' onChange={this.passwordHandler}/>
                <Link to='/dashboard'><button className='login' onClick={this.loginHandler}>Log In</button></Link>
                <Link to='/dashboard'><button className='register' onClick={this.registerHandler}>Register</button></Link>
            </div>
         );
    }
}
 
export default connect(null)(Auth); 