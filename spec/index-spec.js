/* global describe it expect jasmine */
(() => {

  'use strict';

  const target = require('../index');

  describe('module', () => {

    describe('single dimension (list)', () => {

      let arraySize = 4,
        initialValue = 12345.6789,
        result = target(initialValue, arraySize);

      it('Assigns the initial value', () => {

        result.map((v) => expect(v).toBe(initialValue));

      });

      it('creates a single dimensional array', () => {

        expect(result.length).toBe(arraySize);

      });

    });

    describe('dynamic initialization', () => {

      let expectedValue = 42,
        spy = jasmine.createSpy('callback'),
        callback = typeof spy.and === 'undefined' ?
          spy.andReturn(expectedValue) : spy.and.returnValue(expectedValue),
        result = target(callback, 1);

      it('called function', () => {

        expect(callback).toHaveBeenCalledWith();

      });

      it('assigned the callbacks result', () => {

        expect(result[0]).toBe(expectedValue);

      });

    });

    describe('two dimensional (grid)', () => {

      let firstDimensionSize = 3,
        secondDimensionSize = 5,
        initialValue = 4,
        result = target(initialValue, firstDimensionSize, secondDimensionSize);

      it('Assigns the initial value', () => {

        result.map((a) => a.map((b) => expect(b).toBe(initialValue)));

      });

      it('has a first dimension', () => {

        expect(result.length).toBe(firstDimensionSize);

      });

      it('has a second dimension', () => {

        result.map((a) => expect(a.length).toBe(secondDimensionSize));

      });

    });

    describe('three dimensional (coordinates)', () => {

      let firstDimensionSize = 9,
        secondDimensionSize = 6,
        thirdDimensionSize = 2,
        arraySizes = [
          firstDimensionSize,
          secondDimensionSize,
          thirdDimensionSize
        ],
        initialValue = 0,
        result = target(initialValue, ...arraySizes);

      it('Assigns the initial value', () => {

        result
           .map((a) =>
          a.map((b) =>
          b.map((c) =>
            expect(c).toBe(initialValue))
          ));

      });

      it('has a first dimension', () => {

        expect(result.length).toBe(firstDimensionSize);

      });

      it('has a second dimension', () => {

        result.map((a) => expect(a.length).toBe(secondDimensionSize));

      });

      it('has a second dimension', () => {

        result
           .map((a) =>
          a.map((b) =>
            expect(b.length).toBe(thirdDimensionSize)
          ));

      });

    });

  });

})();
