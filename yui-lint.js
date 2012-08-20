var preferred = {
    browser: true, //the standard browser globals should be predefined
    maxerr: 500, //maximum number of warnings reported
    nomen: true, //names should not be checked for initial or trailing underbars
    node: true, //Node.js globals should be predefined
    predef: [ //YUI's prefedined globals that we work against
        "YUI", "window", "YUI_config", "YAHOO", "YAHOO_config", "Event",
        "opera", "exports", "document", "navigator", "console", "self", "require",
        "module", "process", "__dirname", "__filename"
    ],
    passfail: false //dont' stop on first error
};

var optional = {
    eqeq: true, //the == and != operators should be tolerated
    sloppy: true, //ES5 'use strict'; pragma is not required
    plusplus: true, //++ and -- should be allowed
    white: true //strict whitespace rules should be ignored
};

var special = {
    regexp: true, //. and [^...] should be allowed in RegExp literals
    continue: true, //the continue statement should be allowed.
    forin: true //unfiltered for in statements should be allowed
};

var mix = function (s, r) {
    'use strict';
    var i;
    for (i in s) {
        if (s.hasOwnProperty(i)) {
            r[i] = s[i];
        }
    }
    return r;
};

var defaults = mix(optional, mix(preferred, {}));

var strict = mix(preferred, {});
delete strict.nomen;


exports.preferred = preferred;
exports.optional = optional;
exports.defaults = defaults;
exports.special = special;
exports.strict = strict;
exports.mix = mix;
