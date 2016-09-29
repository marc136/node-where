const child = require('child_process');
const exec = child.exec;

// test fixture to catch calls to child_process.exec (allows to run linux and windows tests on both OSes)
const stubbedExec = (command, callback) => {
    if (command.startsWith('where abc')) {
        callback(null, 'abc.exe\r\nabc.bat\r\n');
    } else if (command.startsWith('which -a abc')) {
        callback(null, 'abc\nabc.sh\n');
    } else if (command.startsWith('which abc')) {
        callback(null, 'abc.sh\n');
    } else {
        callback(new Error('not found'), null);
    }
}

module.exports = {
    useStub: () => child.exec = stubbedExec,
    useDefault: () => child.exec = exec
}