const express = require('express');
const { port } = require('../config');
const { router } = require('./routes/routes');

const app = express();
router(app);

const start = () => {
    app.listen({port}, () => {
        console.log(`🚀 Server ready at ${port}`)
    });
}

module.exports = {
    start
};
