const router = require('express').Router();
const bcrypt = require('bcryptjs')
const Users = require('../users/users-model')
const tokenBuilder = require('./token-builder')
const md = require('./auth-middleware')

router.post('/register', md.validateBody, md.checkUsernameUnique, (req, res, next) => {
    const { username, password } = req.body
    let user = { username, password }
    const rounds = process.env.BCRYPT_ROUNDS || 8
    const hash = bcrypt.hashSync(user.password, rounds)
    user.password = hash
    
    Users.add(user)
        .then(newUser => {
        res.status(201).json(newUser)
        })
        .catch(next)
});

router.post('/login', md.validateBody, md.checkUsernameExists, (req, res) => {
    const { username, password, user_id } = req.user

    if(bcrypt.compareSync(req.body.password, password)) {
        const token = tokenBuilder({user_id, username})
        res.status(200).json({message: `welcome, ${username}`, token})
    } else {
        res.status(400).json({message: 'Invalid Credentials'})
    }
});

module.exports = router;