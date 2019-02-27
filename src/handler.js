/*!
 * accepts
 * Copyright(c) 2019 Manvel Khnkoyan
 * MIT Licensed
 */

'use strict';

module.exports = class Handler {

    /*
    *
    * */
    constructor() {
        this.handlers = [];
    }

    /*
    *
    * */
    async handle( arg1, arg2 ) {
        let pattern = arg1;
        let func = arg2;
        if(typeof arg1 === 'function' ){
            pattern = {};
            func = arg1;
        }
        if( func.constructor.name !== 'AsyncFunction' && !(func instanceof Handler) ){
            throw 'Use a async function as a handler or express-message handler in: ' +  func.toString() +
                "\n" + 'See more information from https://www.npmjs.com/package/express-message';
        }
        this.handlers.push({ pattern, func });
    }
};

