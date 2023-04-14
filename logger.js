// const logger = require("./logger");
const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message){
        console.log(message);
    
        this.emit('load','message');
    }
}

// console.log(module);
// const logger = require("./logger");
module.exports = Logger;
