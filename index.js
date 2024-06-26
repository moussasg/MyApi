/* create node server
const http = require('http')
const server = http.createServer((req,res) => {
    res.end('hello from node')
})
const PORT = 3000;
  server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

/* create '''Express'' server
const express = require('express');

const app = express()

app.get('/' , (req,res) => {
  res.send('hello from express')
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
*/
/*  Connect to a MongoDB database and create a schema for a "User" with fields for username and email. Insert a new user into the database.
const mongoose = require('mongoose')
const usershema = new mongoose.Schema({
  email:String,
  password:String
})
const User = mongoose.model('User' , usershema)
const newuser = ({
  email:'moussa@gmail.com',
  password : 'sqfdsf'
})
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

newuser.save( (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('inserted')
  }
})
*/
//Implement a middleware function in Express.js that logs the timestamp of each incoming request.
/*
const express = require('express')
const app = express()
const PORT = 4000 

app.use((req, res, next) => {
  console.log(`Request received at ${new Date()}`);
  next();
})

app.get('/' , (req,res)=> {
  res.send('hello from express')
})


app.listen(PORT , () => {
  console.log(`start at ${PORT}`)
})
*/
//Write a middleware to handle errors in Express.js and return a custom error message.
const cors = require('cors');

const express = require('express');
const app = express();
app.use(cors());
const port = 3000; // Choose any port you prefer
// Middleware to parse JSON bodies
app.get('/' , (req,res) => {
  res.send('hello from express')
})

app.use(express.json());
// Define your API endpoints
const users = [ { id: 1, name: 'John' }, { id: 2, name: 'Jane' } ];
/* get all users */
app.get('/api/users', (req, res) => {
  // Logic to fetch and return a list of users
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({ users });
});

app.get('/api/users/:id' , (req, res) => { // get spécifique user
  try {
    const {id} = req.params;// query pour récupéré email a partir de url
    console.log(id);
    const user = users.find(user => user.id === parseInt(id));
    if (user) {
      res.status(200).json({ success: true , user });
    } else {
      res.status(404).json({ success: false , message: 'User not found'});
    }
  } catch (err) {
    res.status(500).json({ success: false , message: 'Server error' });
  }
})



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
