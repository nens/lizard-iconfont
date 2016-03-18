Lizard Icon Font
================

Usage
-----

If you only need the Lizard Iconfont icons you can include the following
stylesheet in your HTML:

    <link rel="stylesheet" type="text/css" href="stylesheets/lizard-icons.css"></link>

If you also need FontAwesome include the following two stylesheets:

    <link rel="stylesheet" type="text/css" href="stylesheets/lizard-icons.css"></link>
    <link rel="stylesheet" type="text/css" href="stylesheets/font-awesome/font-awesome.css"></link>

HTML example:

    <i class="lz lz-weir lz-3x"></i>
    <i class="fa fa-plus fa-3x"></i>

For more usage information see the
[FontAwesome documentation](https://fortawesome.github.io/Font-Awesome/examples/).

Lizard Icons Overview
---------------------

For an overview of all available icons in Lizard Icon Font please see [our
on-line documentation](http://nens.github.io/lizard-iconfont/).

Or you can take a peak in `sass/_variables.scss` and `sass/_icons.scss`.

Requires
--------

This package requires Ruby.

    gem install compass
    gem install font-awesome-sass

If you would like to change the Github Pages documentation in the `gh-pages`
branch you will need Ruby 2.0 and Jekyll (`gem install jekyll`).

Development: Adding New Icons
-----------------------------

1. Add the icon to the font using FontForge:
    1. Open LizardIcons.sfd.
    1. Find an empty Unicode character for your new icon.
    1. Select the character (click on it) and go to `File > Import` to import
       an SVG file.
    1. Import your new icon.
    1. If the icon should have 'holes' in it but you don't see them (like the
       manhole icon) you might need to right click on the icon and choose
       `Correct direction`.
    1. You may also want to change its size and the
       [side bearings](http://designwithfontforge.com/en-US/Using_the_Fontforge_Drawing_Tools.html1.astering-fontforges-drawing-tools).
       Make sure the icon is inbetween the side bearings and the bottom of the
       icon should be on or above the baseline. You can use the other icons for
       reference. And later on you can use this document to check out how it
       appears in the browser (change the `text-align` with developer tools
       from `center` to `left` and `right` to see how it aligns).
    1. When you're done you can generate the new fonts (.SVG, .EOT, .TTF,
       .WOFF) by going to `File > Generate Fonts`. Generate the following
       formats: `SVG Font`, `OpenType (CFF)`, `TrueType` and `Web Open
       Font` (unfortunately you can't generate them all at once). If it comes
       up with warnings, just ignore them and continue.
1. Change the version number `$lz-version` in `sass/lizard-icons.scss`.
1. Add the icon to `sass/_variables.scss`.
1. Add the icon to `sass/_icons.scss`.
1. Use `compass watch` to generate the new CSS.
1. Add the icon to the documentation in `index.html`.
1. Release a new version of Lizard Icon Font.
