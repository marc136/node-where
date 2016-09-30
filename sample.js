const where = require('./index.js');

function printCallback(err, result) {
    if (err) {
        console.error('err:', err, err.stack);
    }

    console.log('result:', result);
};

// should print a single node executable
where('node', printCallback);

// should print an array and multiple node executables if multiple are available
where('node', { all: true }, printCallback);
