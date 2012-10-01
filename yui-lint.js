var fs = require('fs');
var path = require('path');
var preferred = JSON.parse(fs.readFileSync(path.join(__dirname, 'jshint.json'), 'utf8'));

/*
Potenials: (Ones we may use after investigation)

"regexdash": true, //suppresses warnings about unescaped - in the end of regular expressions.

*/


/*
The filter method will filter the JSHint messages that we do not agree with.
These are usually things that our build system stamps but JSHint still
reports an error on
*/
var filter = function (messages) {
    'use strict';
    messages = messages || [];
    return messages.filter(function (item) {
        if (!item) {
            return false;
        }
        if (/is defined but never used/.test(item.reason)) {
            if (/YUI\.add/.test(item.evidence) || /'Y' is defined/.test(item.evidence)) {
                return false;
            }
        }
        return true;
    });
};

exports.preferred = preferred;
exports.optional = preferred;
exports.defaults = preferred;
exports.special = preferred;
exports.strict = preferred;
exports.filter = filter;
