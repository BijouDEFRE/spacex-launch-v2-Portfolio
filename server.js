require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./graphQL/schema.js');
const path = require('path');

const app = express();

// Allow cross-origin
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.use(express.static('public'));

app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'public', index.html));
});

app.get("/rest", function (_, res) {
    res.json({ data: " 👍 api working " });
});

app.listen(process.env.PORT || 4000, () => {
    console.log(' 🚀 Server running on : ', process.env.PORT);
    // console.log(`gql path is ${apolloServer.graphqlPath}`);
});