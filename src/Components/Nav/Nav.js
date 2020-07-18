import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        console.log('Nav: ', this.props)
        if(this.props.currentView==='/'){ return null} else{
            return ( 
            <div className='nav-wrapper'>
                <nav>

                    <Link to='/dashboard'><ul>Home</ul></Link>
                    <Link to='/new'><ul>New Post</ul></Link>
                    <Link to='/'><ul>Log Out</ul></Link>
                </nav>
            </div> )}
    }
}
 
export default Nav;