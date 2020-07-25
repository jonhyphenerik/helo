import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = { 
            currentUser: '',
            searchString: '',
            showUserPosts: true,
            posts = []
        }
    }

    searchInputHandler= e => this.setState({searchTerm: this.target.value})

    searchHandler(){
        let request = axios('/api/posts/', {searchString: this.state.searchString, showUserPosts: this.state.showUserPosts})
    }

    clearHandler(){
        this.getElementById('search-bar').value = '';
    }

    checkHandler = e => this.setState({showUserPosts: this.target.value})

    render() {
    let postList = this.state.posts.map(
            post => (<Post key={post.id} />))
        return ( 
            <div>
                <input id ='search-bar' placeholder="search" onChange={searchInputHandler}/>
                <input id='show-iser-posts' type='checkbox' checked='checked' onChange={checkHandler} />
                <button onClick={searchHandler}>Search</button>
                <button onClick={clearHandler}>Clear</button>
                <div id="post-wrapper">
                    {postList}
                </div>
            </div>
         );
    }
}
 
export default Dashboard; 