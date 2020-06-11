const email = require('./email/index.routes');


module.exports = app => {
    email(app);
}