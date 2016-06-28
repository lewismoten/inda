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

    describe('assignments', () => {

      it('assigns function', () => {
        let fn = () => 3,
          callback = () => fn,
          result = target(callback, 1);

        expect(result[0]).toBe(fn);

      });

      it('assigns undefined', () => {
        let v,
          result = target(v, 1);

        expect(result[0]).not.toBeDefined();

      });

    })

    describe('dynamic initialization', () => {

      let expectedValue = 42,
        callback = jasmine.createSpy('callback').andReturn(expectedValue),
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

    describe('many dimensional array', () => {

      let dimensions = 12,
        initialValue = 42,
        dimensionSize = 1,
        result = target(initialValue, ...target(dimensionSize, dimensions)),
        count = 0;

      while(result.length === dimensionSize) {

        count++;
        result = result[0];

      }

      expect(count).toBe(dimensions);
      expect(result).toBe(initialValue);

    });

  });

})();
