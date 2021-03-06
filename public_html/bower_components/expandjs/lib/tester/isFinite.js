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

    var lodash = require('lodash'),
        isVoid = require('../tester/isVoid'),
        xnor   = require('../operator/xnor');

    /**
     * Checks if `value` is a finite primitive number.
     *
     * ```js
     * XP.isFinite(10);
     * // => true
     *
     * XP.isFinite('10');
     * // => false
     *
     * XP.isFinite(Infinity);
     * // => false
     * ```
     *
     * @function isFinite
     * @param {*} value The value to check.
     * @param {boolean} [notNegative] Specifies if `value` must be not negative.
     * @returns {boolean} Returns `true` or `false` accordingly to the check.
     */
    module.exports = function isFinite(value, notNegative) {
        return lodash.isFinite(value) && (isVoid(notNegative) || xnor(value >= 0, notNegative));
    };

}());