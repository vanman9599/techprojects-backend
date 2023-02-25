const express = require('express')
const helmet = require('helmet');
const cors = require('cors');
const curriculumRouter = require('../curriculum/curriculum-router');
const coursesRouter = require('../courses/courses-router');
const lessonsRouter = require('../lessons/lessons-router');
const authRouter = require('../auth/auth-router');
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/curriculum', curriculumRouter);
server.use('/api/courses', coursesRouter);
server.use('/api/lessons', lessonsRouter)
server.use('/api/auth', authRouter)




module.exports =server;