const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
// const { logger } = require('./middleware/');
const server = express();
const articlesRouter = require('./articles/articles-router')
const boardsRouter = require('./boards/boards-router')
const usersRouter = require('./users/users-router')
const authRouter = require('./auth/auth-router')
const authMd = require('./auth/auth-middleware')

// routers
// const _Router = require('./_/_-router');

// Configure your server here
server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use(logger);

server.use('/', (req, res) => {
	res.status(200).send('Welcome to ft-pintereach-06. A read-me will be here shortly.')
})
server.use('/api/articles', authMd.restricted, articlesRouter)
server.use('/api/boards', authMd.restricted, boardsRouter)
// server.use('/api/categories', categoriesRouter)
server.use('/api/users', authMd.restricted, usersRouter)
server.use('/api/auth', authRouter)

server.use('*', (req, res) => {
	res.status(404).send(`Oops, can't find that endpoint!`);
});

//error handling function for all middleware
// eslint-disable-next-line
server.use((err, req, res, next) => {
	res.status(err.status || 500).json({
		message: err.message,
		stack: err.stack
	});
});

module.exports = server;
