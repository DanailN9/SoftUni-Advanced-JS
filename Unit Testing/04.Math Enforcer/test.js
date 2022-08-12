const { subtractTen } = require('./index');
const obj = require('./index');
const assert = require('chai').assert;

describe('test if function return currect calcualtions', () => {
    describe('addfive', () => {
        it('Pass string as parameter to return undefined', () => {
            let actual = obj.addFive('asd');
    
            assert.equal(actual, undefined)
        })
    
        it('Pass ojbect as parameter to return undefined', () => {
            let actual = obj.addFive({});
    
            assert.equal(actual, undefined)
        })
    
        it('Pass number as parameter to return correct output', () => {
            let actual = obj.addFive(5);
    
            assert.equal(actual, 10)
        })
    })

    describe('substract', () => {
        it('Pass string as parameter to return undefined', () => {
            let actual = obj.subtractTen('asd')
    
            assert.equal(actual, undefined)
        })
    
        it('Pass object as parameter to return undefined', () => {
            let actual = obj.subtractTen({});
    
            assert.equal(actual, undefined)
        })
    
        it('Pass number as parameter to return currect output', () => {
            let actual = obj.subtractTen(10);
    
            assert.equal(actual, 0)
        })
    });

    describe('sum', () => {
        it('Pass string as first parameter to return undefined', () => {
            let actual = obj.sum('asd', 1)
    
            assert.equal(actual, undefined)
        })
    
        it('Pass string as second parameter to return undefined', () => {
            let actual = obj.sum(1, 'asd')
    
            assert.equal(actual, undefined)
        })
    
        it('Pass numbers as parameters to return currect output', () => {
            let actual = obj.sum(2, 1)
    
            assert.equal(actual, 3);
        })
    })
});



console.log(obj)