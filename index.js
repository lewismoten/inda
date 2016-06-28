(() => {

  'use strict';

  module.exports = initializedArray;

  function initializedArray(value, size, ...sizes) {

    const result = [];

    for (let i = 0; i < size; i++) {

      if (sizes.length > 0) {

        result[i] = initializedArray(value, ...sizes);

      } else {

        result[i] = typeof value === 'function' ? value() : value;

      }

    }

    return result;

  }

})();
