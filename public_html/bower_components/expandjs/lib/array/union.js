/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

/**
 * @license
 * Copyright (c) 2015 The ExpandJS authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */
(function () {
    "use strict";

    var lodash      = require('lodash'),
        ary         = require('../function/ary'),
        filter      = require('../collection/filter'),
        isArrayable = require('../tester/isArrayable'),
        map         = require('../collection/map'),
        toArray     = require('../caster/toArray');

    /**
     * Creates an array of unique values, in order, of the provided arrays using `SameValueZero` for equality comparisons.
     *
     * ```js
     * XP.union([1, 2], [4, 2], [2, 1]);
     * // => [1, 2, 4]
     * ```
     *
     * @function union
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     */
    module.exports = function union(arrays) {
        return lodash.union.apply(lodash, map(filter(arguments, ary(isArrayable, 1)), ary(toArray, 1)));
    };

}());