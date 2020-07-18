import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }
    userHandler = e => this.setState({userName: e.target.value})

    passwordHandler = e => this.setState({password: e.target.value})

    loginHandler = () => {
        axios.post('/auth/login', {...this.state})
    }

    registerHandler = () => {
        axios.post('auth/register', {...this.state})
    }

    render() { 
        return ( 
            <div>
                <input placeholder='userName' onChange={this.userHandler}/>
                <input type='password' placeholder='password' onChange={this.passwordHandler}/>
                <Link to='/dashboard'><button className='login' onClick={this.loginHandler}>Log In</button></Link>
                <Link to='/dashboard'><button className='register' onClick={this.registerHandler}>Register</button></Link>
            </div>
         );
    }
}
 
export default Auth; 