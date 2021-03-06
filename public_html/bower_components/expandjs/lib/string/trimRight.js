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

    var lodash         = require('lodash'),
        assertArgument = require('../assert/assertArgument'),
        isString       = require('../tester/isString'),
        isVoid         = require('../tester/isVoid');

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * ```js
     * XP.trimRight('  abc  ');
     * // => '  abc'
     *
     * XP.trimRight('-_-abc-_-', '_-');
     * // => '-_-abc'
     * ```
     *
     * @function trimRight
     * @param {string} [string = ""] The string to trim.
     * @param {string} [chars = " "] The characters to trim.
     * @returns {string} Returns the trimmed string.
     */
    module.exports = function trimRight(string, chars) {
        assertArgument(isVoid(string) || isString(string), 1, 'string');
        assertArgument(isVoid(chars) || isString(chars), 2, 'string');
        return string ? lodash.trimRight(string, chars) : '';
    };

}());