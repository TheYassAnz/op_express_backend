// import user model
const User = require('../models/User');

exports.signup = (req, res, next) => {
    // crypt password with 10 rounds salt
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            // create a new user
            const user = new User({
                email: req.body.email,
                password: hash,
            });
            // save the user in the database
            user.save()
                .then(() => res.status(201).json({ message: 'User created!' }))
                .catch(err => res.status(400).json({ err }));
        })
        .catch(err => res.status(500).json({ err }));
}


exports.login = (req, res, next) => {
    // find the user in the database
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user === null) {
                res.status(401).json({ message: 'Incorrect Input!' })
            } else {
                // compare the password with the hash
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        if (!valid) {
                            return res.status(401).json({ message: 'Incorrect Input!' })
                        } else {
                            // return the user id and a token
                            res.status(200).json({
                                userId: user._id,
                                token: 'TOKEN'
                            });
                        }
                    })
                    .catch(err => res.status(500).json({ err }))
            }
        }
        )
        .catch(err => res.status(500).json({ err }))
}