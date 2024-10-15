import express from 'express';
import cors from 'cors';

const app = express();
// We need a database of quotes
const quotes = [
    'JavaScript is the duct tape of the internet.',
    'With JavaScript, you can make the web dance.',
    'Understanding closures is key to mastering JavaScript.',
    'JavaScript is the language of the web.',
    'Async/Await makes asynchronous code look synchronous.',
    'JavaScript is everywhere, from browsers to servers.',
    'Mastering JavaScript means mastering the web.',
    'JavaScript frameworks come and go, but the language remains.',
    'JavaScript can be quirky, but it\'s powerful.',
    'Learning JavaScript opens up many opportunities.',
    'JavaScript is versatile and dynamic.',
    'JavaScript is the backbone of modern web development.',
    'JavaScript can be both simple and complex.',
    'JavaScript is constantly evolving.',
    'JavaScript is fun and challenging.'
];

/* 
Route that sends back a random quote from the database
- Create a GET route with the path of '/quote'
- Your callback should reference the responseObj and use an underscore for the requestObj
- Your code block should create a variable randomQuote that is assigned a random string from the quotes array
- Use the responseObj.send method to send an object back with a property of quote that has the value of your randomQuote string
ie. It sends back an object like the one below: 
{
  quote: 'JavaScript is the tool that turns ideas into reality.'
}
*/

// Allow other domains to request to server
app.use(cors());
// When a route sends back an array or an object, it is an API route 
// When a route is an API route, you should prefix the path with a /api
app.get('/api/quote', (_, responseObj) => {
    // const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    responseObj.send({quote: randomQuote});
});

// app.get('/', (_, responseObj) => {
//     responseObj.send('Hi there from the server!');
// });

// app.get('/data', (_, responseObj) => {
//     const data = {
//         name: 'Adonis',
//         age: 24
//     };

//     responseObj.send(data);
// });

app.listen(3333, () => {
    console.log('Server started on port 3333');
});

