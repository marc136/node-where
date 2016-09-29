var tap = require('tap')
const where = require('../where.js');
tap.pass('All requirements loaded');

global.platform = process.platform

tap.test('should find at least one node executable', t => {
    where('node', (err, result) => {
        t.equal(err, null);
        t.ok(result);
        t.ok(result.length > 0)
        if(Array.isArray(result)) t.ok(result[0].length > 0);
        t.end();
    });
});

tap.test('unknown executable', t => {
    where('unknown-should-not-exist.deleted', undefined, (err, result) => {
        t.ok(err);
        t.equal(result, null);
        t.end();
    });
});

tap.end();