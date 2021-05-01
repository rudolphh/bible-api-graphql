const express = require('express');
const app = express();

const graphqlController = require('./controller/graphqlController');
app.use('/graphql', graphqlController);


app.listen(3333);
