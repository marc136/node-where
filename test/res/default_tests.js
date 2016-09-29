const where = require('../../');

module.exports = function default_tests(t) {
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
