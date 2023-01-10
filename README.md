## wloghub

A simple logger module that helps you to have a better logging experience in your nodejs application with the help of
winston.

### Installation

Using npm

    npm install wloghub --save

In node.js

    const logger = require('wloghub');
    logger.info({'Hello World'});

In typescript

    import {logger} from 'wloghub';
    logger.info({'Hello World'});

## correlationId
If you want to add a correlationId to your logs, you can do it by adding correlationId to the global object.
     
    global['correlationId'] = '1234';

see [wloghub](https://github.com/MehranJanfeshan/wloghub) for more details.
