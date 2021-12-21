Lizard Icon Font
================

Usage
-----
The iconfont can be used as such (in HTML):

```html
// Make sure to include the CSS:
<link rel="stylesheet" type="text/css" href="lizard-icons.css" />

// Then somewhere in the body:
<i class="lz lz-overflow"></i>
```

For more info look at `index.html` in `dist/` after generating.


Lizard Icons Overview
---------------------

For an overview of all available icons in Lizard Icon Font please see [our
on-line documentation](http://nens.github.io/lizard-iconfont/).

Requires
--------

This package requires Node and NPM. Run `npm install` to install the dependencies.

To generate the icons, run:

    npm run start

The iconfont will be generated in `dist/`.


Development: Adding New Icons
-----------------------------

1. Add the SVG icon to the `originals/` directory. Make sure to name the file properly (look at the others).
1. Bump the version number of this package, check it in, and release it.
