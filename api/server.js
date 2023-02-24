const express = require('express')
const helmet = require('helmet');
const cors = require('cors');
const curriculumRouter = require('../curriculum/curriculum-router');
const coursesRouter = require('../courses/courses-router');
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/curriculum', curriculumRouter);
server.use('/api/courses', coursesRouter);




module.exports =server;