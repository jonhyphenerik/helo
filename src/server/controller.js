const bcrypt = require('bcrypt');
require('express');

module.exports = {
    register: (req, res, next)=>{
        const {email, password} = req.body;
        const db = req.app.get('db');
        db.check_user_exists([email]).then(data=> {
            if(data[0]){
                return res.status(200).send("account already exists with this email. Try signing in.")
            } else {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(password, salt);
                db.add_user([email, hash]).then(data => {
                    req.session.user = {
                        id: data[0].id,
                        email: data[0].email
                    }
                    res.status(200).send(req.session.user);
                })
            }
        }).catch(err=>res.status(500).send(err))
    },

    login: (req, res, next) => {
        const db = req.app.get('db');
        db.check_user_exists([email]).then(data => {
            if(!data[0]){
                res.status(200).send("Not a valid email. Check spelling or register.")
            }
            else {
                const isAuth = bcrypt.compareSync(password, data[0].helo_password);
                if(isAuth){
                    delete data[0].helo_password;
                    req.session.user = data[0];
                    res.status(200).send(req.session.user);
                } else {
                    res.status(401).send("Incorrect email/password");   
                }
            }
        })
    },

    getPosts: (req, res, next) => {
        const db = req.app.get('db');
        let posts = db.get_posts();
        let findSearch = (postArray, searchTerm) => postArray.filter(el => el.content.includes(searchTerm))
        let filterUserPosts = (postArray, userId) => postArray.filter(post => post.authorId != userId) // remove every post from array where authorId matches userId of logged in user
        if(req.params.showUserPosts){ //if 'show user posts' is unchecked, filterUserPosts 
            response = filterUserPosts(response, req.userId)
            
        }
        if(req.body.searchString){ // if 'show user posts' is unchecked and the search string exists
            // find matches for the search string and filter out user posts
            re
            
        }
    }
}