'use strict';

var expect = require('chai').expect;
var numFormatter = require('../index');

describe('#numFormatter', function() {
    it('should add two numbers', function() {
        var result = numFormatter.Add(1, 5);
        expect(result).to.equal(6);
    });

    it('should subtract two numbers', function() {
        var result = numFormatter.Subtract(5,3);
        expect(result).to.equal(2);
    });

    it('should multiply two numbers', function() {
        var result = numFormatter.Multiply(5,3);
        expect(result).to.equal(15);
    });

    it('should divide two numbers', function() {
        var result = numFormatter.Divide(12,4);
        expect(result).to.equal(3);
    });

    it('should square root a number', function() {
        var result = numFormatter.SquareRoot(16);
        expect(result).to.be.closeTo(4, 0.001);
    });
});