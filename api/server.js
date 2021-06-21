const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
// const { logger } = require('./middleware/');
const server = express();
const articlesRouter = require('./articles/articles-router')
const boardsRouter = require('./boards/boards-router')
const categoriesRouter = require('./categories/categories-router')
const usersRouter = require('./users/users-router')
const authRouter = require('./auth/auth-router')

// routers
// const _Router = require('./_/_-router');

// Configure your server here
server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use(logger);

server.use('/api/articles', articlesRouter)
server.use('/api/boards', boardsRouter)
server.use('/api/categories', categoriesRouter)
server.use('/api/users', usersRouter)
server.use('/api/auth', authRouter)

server.use('*', (req, res) => {
	res.status(404).send(`Oops, can't find that endpoint!`);
});

//error handling function for all middleware
// eslint-disable-next-line
server.use((err, req, res, next) => {
	res.status(err.status || 500).json({
		custom: 'Strange things are afoot at the circle K',
		message: err.message,
		stack: err.stack
	});
});

module.exports = server;
