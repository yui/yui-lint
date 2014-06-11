YUI JSHint Default Options
==========================

The YUI team always strives to make our files pass lint, however
we also have some coding standards that we wish our core team
and our contributors to also abide by.

Every application that YUI creates to aid in development will follow
by all of the config options in this package.

In the past we had always tried to abide by JSLint's stricter
ruleset, but as we and our community have grown over the years
it's come to our attention that they are no longer beneficial
to us and we should look for an alternative. So we decided that we
will now use [JSHint](http://jshint.com/) as our default linting tool with one predefined
set of options.

Preferred List
--------------

Before we tried to make this overly complicated and that turned out
to not be the correct approach. We have decided that we should come
up with a static list of JSHint options that best meets our needs
as well as the needs of our external developers.


Special Options
---------------

**Special options should never be used file wide.**

Options should only be overriden in special cases, should be explained with a
comment, and should have minimal scope (i.e., at the method level or bracketed
around the code in question).

For example, we might use a *whitelist* approach in filtering an object where
we skip the `hasOwnProperty` check. In this case, the developer should use
jshint directives to temporarily disable the `forin` option around the
offending code:

```
var obj = {
    apple: 10,
    orange: 11,
    kiwi: 12
};

// Intentionally skipping the hasOwnProperty check.
/*jshint forin: false*/
for (prop in obj) {
    receiver[prop] = supplier[prop];
}
/*jshint forin: true*/
```

Build Status
------------

[![Build Status](https://secure.travis-ci.org/yui/yui-lint.png)](http://travis-ci.org/yui/yui-lint)

Config Usage
------------

We structured this repo so that you can use these rules in several ways.

From inside your node module: `var lint = require('yui-lint');`

From inside your package.json:

    {
        "devDependencies": {
            "jshint": "^2.5.1",
            "yui-lint": "~0.2.0"
        },
        "scripts": {
            "pretest": "jshint --config ./node_modules/yui-lint/jshint.json ./lib/*.js"
        }
    }

Or locally as your `.jshintrc` file: `ln -s $PWD/jshint.json ~/.jshintrc`

The Rules
---------

For more information on these properties, check out the [jshint docs](http://www.jshint.com/docs/)

    "browser":      true,   // true if the standard browser globals should be predefined
    "node":         true,   // true if Node.js globals should be predefined
    "yui":          true,   // true if YUI globals should be predefined
    "bitwise":      true,   // true if bitwise operators should not be allowed
    "curly":        true,   // true if curly braces should be required around blocks in loops and conditionals
    "eqeqeq":       true,   // true if === should be required (for ALL equality comparisons)
    "forin":        true,   // true if unfiltered 'for in' statements should be forbidden
    "immed":        true,   // true if immediate function invocations must be wrapped in parens
    "newcap":       true,   // true if Initial Caps must be used with constructor functions
    "noarg":        true,   // true if arguments.caller and arguments.callee should be forbidden
    "noempty":      true,   // true if empty blocks should be forbidden
    "nomen":        false,  // true if initial or trailing underscore in identifiers should be forbidden
    "onevar":       true,   // true if only one var statement per function should be allowed
    "plusplus":     false,  // true if ++ and -- should not be allowed
    "regexp":       false,  // true if . and [^...] should not be allowed in RegExp literals
    "strict":       false,  // true if the ES5 "use strict"; pragma is required
    "trailing":     true,   // true if trailing whitespace should be forbidden
    "undef":        true,   // true to warn on the use of explicitly undeclared variables
    "unused":       true,   // true to warn on variables that are defined but never used
    "white":        false,  // true if strict whitespace rules apply (see also 'indent' option)
    "asi":          false,  // true to suppress warnings about missing semicolons
    "boss":         false,  // true if assignments should be allowed when comparison is expected
    "debug":        false,  // true if debugger statements should be allowed (set to false before going into production)
    "eqnull":       false,  // true to suppress warnings about `== null` comparisons
    "es5":          false,  // true if ECMAScript 5 syntax should be allowed
    "esnext":       false,  // true if ES.next features like `const` and `let` should be allowed
    "evil":         false,  // true if eval should be allowed
    "expr":         false,  // true if expressions should be allowed where an assignment or function call is expected
    "funcscope":    false,  // true to suppress warnings about variables declared inside control structures
    "globalstrict": false,  // true to suppress warnings about the use of global strict mode
    "iterator":     false,  // true to suppress warnings about the `__iterator__` property
    "lastsemic":    false,  // true to suppress warnings about semicolons only when the semicolon is omitted on the last line of a block
    "laxbreak":     true,   // true if statement breaks should not be checked
    "laxcomma":     false,  // true to suppress warnings about the comma-first style
    "loopfunc":     false,  // true to suppress warnings about creating functions inside loops
    "multistr":     false,  // true to suppress warnings about multi-line strings
    "onecase":      false,  // true to suppress warnings about switch statements with only a single case
    "proto":        false,  // true to suppress warnings about the `__proto__` property
    "regexdash":    false,  // true to suppress warnings about unescaped `-` as the end of a regular expression
    "scripturl":    false,  // true to suppress warnings about script-targeted URLs such as `javascript:...`
    "shadow":       false,  // true to suppress warnings about variable shadowing
    "smarttabs":    false,  // true to suppress warnings about mixed tabs and spaces
    "sub":          false,  // true if subscript notation may be used for expressions better expressed in dot notation
    "supernew":     false,  // true to suppress warnings about "weird" constructions like `new function () { ... }`
    "maxerr":       500,    // maximum number of warnings reported (per file)
    "maxlen":       150,    // maximum line length
    "passfail":     false,  // true if the scan should stop on first error (per file)
    "latedef":      true    // prohibits the use of a variable before it was defined
