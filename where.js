const exec = require('child_process').exec;
global.platform = process.platform;

module.exports = findExePath;

function findExePath(exeName, opts, callback) {
    if (!callback && typeof opts === 'function') {
            callback = opts;
            opts = {};
    } 
    opts = opts || {};

    const finder = global.platform.startsWith('win') ? findWin : findUnix; 

    return finder(exeName, opts, callback)
}

function findWin(exeName, opts, callback) {
    return exec('where ' + exeName, (err, stdout, stderr) => {
        var result = null;
        if (!err) {
            if (opts.all) {
                result = stdout.split('\r\n').filter(notEmpty);
            } else {
                // where might return multiple executable paths
                result = stdout.slice(0, stdout.indexOf('\r\n'));
            }
        }

        return callback(err, result);
    });
}

function findUnix(exeName, opts, callback) {
    var cmd = 'which ' + (opts.all ? '-a ' : '') + exeName;
    return exec(cmd, (err, stdout, stderr) => {
        var result = null;

        if (!err) {
            result = stdout.split(/\r|\n/).filter(notEmpty);
            if (!opts.all) result = result[0];
        }

        return callback(err, result);
    });
}

function notEmpty(str) {
    return str.length > 0;
}
