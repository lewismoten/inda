(() => {

  'use strict';

  module.exports = initializedArray;

  function initializedArray(value, count, ...dimensions) {

    const result = [];

    for (let i = 0; i < count; i++) {

      if (dimensions.length > 0) {

        result[i] = initializedArray(value, ...dimensions);

      } else {

        result[i] = typeof value === 'function' ? value() : value;

      }

    }

    return result;

  }

})();
