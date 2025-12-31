const baseEnv = require('./base');
const cryptoEnv = require('./crypto');
const objectsEnv = require('./objects');

module.exports = `
    (() => {
        ${baseEnv}
        ${cryptoEnv}
        ${objectsEnv}
        console.log(">>> [Env] Environment Injected Successfully.");
    })();
`;