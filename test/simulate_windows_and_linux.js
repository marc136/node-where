/**
 * These tests use the changed global.platform variable to execute both the code paths on windows and on linux
 */
const tap = require('tap')

const patchedExec = require('./res/overwrite_child_exec.js');
patchedExec.useStub(); // setup stubs for child_process.exec

const where = require('../where.js');

tap.pass('All requirements loaded');

tap.test('As windows', t => {
    global.platform = 'win32';
    runTests(t);
});

tap.test('As linux', t => {
    global.platform = 'linux';
    runTests(t);
});

tap.tearDown(patchedExec.useDefault); // revert to normal behavior for child_process.exec

function runTests(t) {
    t.test('find single result', t => {
        where('abc', (err, result) => {
            t.equal(err, null);
            t.ok(result);
            t.equal(Array.isArray(result), false);
            t.end();
        });
    });

    t.test('find result array', t => {
        where('abc', { all: true }, (err, result) => {
            t.equal(err, null);
            t.ok(result);
            t.equal(Array.isArray(result), true);
            t.end();
        });
    });

    t.test('no results for unknown executable', t => {
        where('unknown', undefined, (err, result) => {
            t.ok(err);
            t.equal(result, null);
            t.end();
        });
    });

    t.end();
}
