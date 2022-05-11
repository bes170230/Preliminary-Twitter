const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./src/db');
const { graphqlHTTP } = require('express-graphql');
const schema = require ("./src/graphql/schema");

dotenv.config()

const app = express();
// Connecting Database
connectDB()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.get('/', (req, res) => {
    res.send('Hello world from Twitta')
})

app.listen(process.env.PORT, () => {
    console.log(`Server now running at port: ${process.env.PORT}`)
})