const express = require('express');
const morgan = require('morgan');

const { port } = require('../config');
const { router } = require('./routes/routes');

const app = express();
app.use(morgan('common'));
router(app);

const start = () => {
    app.listen({port}, () => {
        console.log(`🚀 Server ready at ${port}`)
    });
}

module.exports = {
    start
};
