/*
Author: NingenNoKodo
Date: 2021-08-01
Description: This is the main file for the NingenNoKodo Blog.
all the routes are defined here.

*/

// Importing the required modules
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

// Importing the required files
const User = require('./models/user');
const Post = require('./models/post');  
const Comment = require('./models/comment');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');
const authRoutes = require('./routes/auth');
const passportConfig = require('./config/passport');

// Connecting to the database
mongoose.connect('mongodb://localhost:27017/ningenNoKodoBlog', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

// Creating the express app
const app = express();
