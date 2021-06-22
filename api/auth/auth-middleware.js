const Users = require('../users/users-model');
const db = require('../../data/dbConfig');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../secrets/index");

const checkUsernameExists = async (req, res, next) => {  // Checks if the user name exists for the user login
    const { username } = req.body
    const user = await Users.findBy({ username })
    if(user) {
        req.user = user
        next()
    } else {
        next({status: 401, message: 'Invalid Credentials'})
    }
}

function checkUsernameUnique(req, res, next) { // Checks the DB to see if the user name exists, if it does, error and interrupt register process
    const { username } = req.body;
    Users.findBy({ username })
    .then(user => {
    if (user) {
        next({ status: 401, message: 'username taken' });
    } else {
        next();
    }
    })
    .catch(next);
}


const validateBody = (req, res, next) => { // Validate that the username exists / isn't white space AND that the password exists, but CAN be whitespace
    const { username, password} = req.body
    if(!username || username.trim() === "" || !password ){
        next({status: 401, message: 'username and password required'})
    } else {
        req.body.username = req.body.username.trim()
        next()
    }
}

const restricted = (req, res, next) => {
	const token = req.headers.authorization;
	if (token) {
		jwt.verify(token, JWT_SECRET, (err, decoded) => {
			if (err) {
				next({ status: 401, message: 'token invalid' });
			} else {
				req.decodedJwt = decoded;
				next();
			}
		});
	} else {
		next({ status: 401, message: 'Token Required' });
	}
};

module.exports = { checkUsernameExists, validateBody, checkUsernameUnique, restricted }