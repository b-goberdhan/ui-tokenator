const path = require('path');
const STYLE_ROUTE = '/api/style';

const router = (app) => {
    app.get(`${STYLE_ROUTE}/css`, (req, res) => {
        res.sendFile(path.resolve('./generated-tokens/tokens.css'));
    });
    app.get(`${STYLE_ROUTE}/scss`, (req, res) => {
        res.sendFile(path.resolve('./generated-tokens/tokens.scss'));
    });
    app.get(`${STYLE_ROUTE}/json`, (req, res) => {
        res.sendFile(path.resolve('./generated-tokens/tokens.json'));
    });
};
module.exports = {
    router
}