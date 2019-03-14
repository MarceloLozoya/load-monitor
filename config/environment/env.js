// TODO - Default values are present for this project's purposes only. They should be removed.

let env = {};



/**
 *  BASE VALUES
 */
env.PORT = process.env.PORT || '3000';
env.ENVIRONMENT = process.env.NODE_ENV || 'development';



module.exports = env;