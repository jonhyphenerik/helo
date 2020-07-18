const bcrypt = require('bcrypt');


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
        }).catch(err=>res.status(500).send('Error checking email'))
        this.login()
    },

    login: (req, res) => {
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
    }
}