YUI JSLint Default Options
==========================

The YUI team always strives to make our files pass [JSLint](http://www.jslint.com/lint.html#options). Even
if we don't always personally agree with these rules. Crockford 
enforces these rules for a good reason. When working with a large
code base with hundreds, sometimes thousands of developers a strict
rules set is a valuable development tool.

Every application that YUI creates to aid in development will follow
by all 5 of the below lists.

Preferred List
--------------

The `preferred list` is the list that will think is the best to follow for our
code now and in the future. These are limited to very few mainly language specific
and our "predefined globals" list. With only 1 real `rule` that we turn off.

`nomen` is the only rule we disagree with. YUI coding standards are to prefix all
`private` and `protected` methods and properties with an underbar (`_`) for a few reasons.

* It's very easy to tell at a glace
* When inspecting, these properties will group at the top/bottom of the list
* It's standardized, no API doc lookups to tell if you should use it


Optional List
-------------

The `optional list` is the list that contains a few options that we would really like
to remove from our code base, but due to it's size that's a little difficult to do
all at once. Eventually, these will be removed and we will not use these options.


Default List
------------

The `default list` is the combination of the `preferred` and `default` lists. If
we have a tool that provides lint (shell script, builder, etc) they should have 
config options to choose from these settings.

Strict List
-----------

We would however prefer that all scripts pass with no options set.

Special
-------

**The special list contains options that should never be used file wide.**

They should only be added at the method level with a comment that explains why they
are needed.

For example, we use a *whitelist* approach to filtering an `Object` for performance
in several places. In this case, we skip the `hasOwnProperty` check when iterating
that object. In that case the developer should add the `/*jslint forin: true */` comment
only inside the function that they are calling the offending code..


