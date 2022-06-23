const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// defining the Express app
const app = express();
// defining an array to work as the database (temporary solution)

const people = [
    {
        name: 'Humphrey',
        age: 26,
        jobTitle: 'Software Engineer',
        image: 'https://avatars.githubusercontent.com/u/6339498?v=4'
    }
]

const posts = [
    {
        id: 1,
        title: 'This is a post',
        body: 'Lorem ipsum dolor set'
    },
    {
        id: 2,
        title: 'Second post',
        body: 'Lorem ipsum dolor set'
    }
]

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
    res.send([])
})

app.get('/people', (req, res) => {
  res.send(people);
});

app.get('/people/:name', (req, res) => {
    res.send(
        people.filter(person => person.name.toLowerCase() == req.params.name.toLowerCase())
    )
})

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.get('/posts/:id', (req, res) => {
    res.send(
        posts.filter(post => post.id == req.params.id)
    )
})

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});
