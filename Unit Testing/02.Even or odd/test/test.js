const isOddOrEven = require('../index.js');

let expect = require('chai').expect;
let assert = require('chai').assert;

describe('isOddOrEven function', function () {
    it('Pass number to return undefined', function () {
        let actual = isOddOrEven(2);

        assert.equal(actual, undefined)
    })

    it('Pass object to return undefined', function () {
        let actual = isOddOrEven({});

        assert.equal(actual, undefined)
    })

    it('Pass even string', function () {
        let actual = isOddOrEven('omfg');

        assert.equal(actual, 'even');
    })

    it('Pass odd string', function () {
        let actual = isOddOrEven('omg');

        assert.equal(actual, 'odd');
    })

    it('Pass multiple strings', function () {
        let actual = isOddOrEven('omfg', 'as', 'as');

        assert.equal(actual, 'even');
    })
}) 