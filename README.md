lizard-iconfont
===============

Iconfont for Lizard NXT. Includes parts of the [Kunstwerk](http://nens.github.io/nens-carto/kunstwerk/) iconfont which we made specifically for the hydracore project and for use in Mapnik rendering. `lizard-iconfont` is a more general font for Lizard (NXT), and can still be used in Mapnik/Tilemill.


Demo
----
Have a look [here](http://nens.github.io/lizard-iconfont/).


What's this?
------------

We use [grunt-webfont](https://github.com/sapegin/grunt-webfont) (which is based on [Font Custom](http://endtwist.github.io/fontcustom/)) to convert the [SVG iconfiles](lizard/src) to a [webfont](lizard/dest), which includes [TrueType](http://en.wikipedia.org/wiki/TrueType) and [WOFF](http://en.wikipedia.org/wiki/Web_Open_Font_Format) formats, and automatically generates the appropiate CSS and a preview HTML page.


Installation of grunt-webfont
-----------------------------

 * To install grunt-webfont, make sure your system has a recent version of [node.js](http://nodejs.org/) and the included NPM. It was tested successfully using Node `v0.10.26` on both OSX Mavericks and Ubuntu 12.10.
 * On OSX, run `brew install fontforge ttfautohint`
 * On Linux, run `sudo apt-get install fontforge ttfautohint` (ttfautohint package is *not* available for Precise/12.04!)
 * Install [Grunt](http://gruntjs.com/) globally using `sudo npm install -g grunt-cli`
 * Run `npm install` in the root of the repo, which will install the Node packages as specified in [package.json](package.json) in a local `node_modules` directory


Generating webfont
------------------

 * To generate the webfont, run `grunt` without any arguments
 * This will run the task `webfont` as specified in [Gruntfile.js](Gruntfile.js)
 * All .svg files in [src/](lizard/src) will be converted to [dest/](lizard/dest)
 
Adding or editing
-----------------

 * To modify or add to the Lizard iconfont, clone or fork this repo, change whatever you like in [src/](lizard/src)
 * Generate the new webfont using grunt, as explained in *Generating webfonts*
 * Optionally, submit a pullrequest


Using the icon font in TileMill
-------------------------------

To use `lizard.ttf` as an icon font in TileMill, for example to style shields, use it as such:

```
...
shield-name: "'\xee\x80\x8b'";
shield-face-name: 'lizard Regular';
...
```

The word Regular indicates the font-face variant and is required.
The shield-name must be in UTF-8 notation.

To get from UTF-16 to UTF-8, use the following Python oneliner:

```
>>> '\xe0\x0b'.decode('utf-16be').encode('utf-8')
'\xee\x80\x8b'
```

Which, in this case, gives the UTF-8 code for E00B. (the 'icon-pumpstation-diesel' icon)


*Unicode codes for the icons*

 * icon-bridge-draw: `\xee\x80\x81`
 * icon-bridge-fixed: `\xee\x80\x82`
 * icon-bridge: `\xee\x80\x83`
 * icon-culvert-with-outlet: `\xee\x80\x84`
 * icon-culvert: `\xee\x80\x85`
 * icon-manhole: `\xee\x80\x86`
 * icon-outlet: `\xee\x80\x87`
 * icon-overflow-open: `\xee\x80\x88`
 * icon-overflow: `\xee\x80\x89`
 * icon-pipe: `\xee\x80\x8a`
 * icon-pumpstation-diesel: `\xee\x80\x8b`
 * icon-pumpstation-electric: `\xee\x80\x8c`
 * icon-pumpstation-wind: `\xee\x80\x8d`
 * icon-pumpstation: `\xee\x80\x8e`
 * icon-weir-controllable: `\xee\x80\x90`
 * icon-weir-automatic: `\xee\x80\x8f`
 * icon-weir: `\xee\x80\x91`
