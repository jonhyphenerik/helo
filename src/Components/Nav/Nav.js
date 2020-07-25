import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {user: this.props.user}
    }
    render() {
        console.log('Nav: ', this.props)
        if(this.props.currentView==='/'){ return null} else{
            return ( 
            <div className='nav-wrapper'>
                <img src="" />
                <nav>
                    <Link to='/dashboard'><ul>Home</ul></Link>
                    <Link to='/new'><ul>New Post</ul></Link>
                    <Link to='/'><ul>Log Out</ul></Link>
                </nav>
            </div> )}
    }
}

let mapStateToProps = (state) =>{}

 
export default connect(mapStateToProps)(Nav);