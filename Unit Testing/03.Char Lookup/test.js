const funk = require('./index.js')
const assert = require('chai').assert;

describe('Find index in string', function () {
    it('pass number as first param to return undefined', () => {
        let actual = funk(1, 2);

        assert.equal(actual, undefined)
    })

    it('Pass string as second perimeter to return undefined', () => {
        let actual = funk('asd', 'asd');

        assert.equal(actual, undefined)
    })

    it('Pass object as second perimeter to return undefined', () => {
        let actual = funk('asd', {});

        assert.equal(actual, undefined)
    })

    it('Pass object as first perimeter to return undefined', () => {
        let actual = funk({}, 'asd');

        assert.equal(actual, undefined)
    })

    it('Pass array as second perimeter to return undefined', () => {
        let actual = funk('asd', ['ad']);

        assert.equal(actual, undefined)
    })

    it('Pass array as first perimeter to return undefined', () => {
        let actual = funk([], 'asd');

        assert.equal(actual, undefined)
    })

    it('Pass bigger number as second perimeter to return Incorrect index', () => {
        let actual = funk('asd', 6);

        assert.equal(actual, 'Incorrect index')
    })

    it('Pass negative number as second perimeter to return Incorrect index', () => {
        let actual = funk('asd', -6);

        assert.equal(actual, 'Incorrect index')
    })

    it('Pass correct input to return correct output', () => {
        let actual = funk('asd', 2);

        assert.equal(actual, 'd')
    })


})

