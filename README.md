# Instyll

Instill your stylus with super powers 🎨✨📈

A collection of mixins to make your Stylus trend upwards!

## Install

```
npm install --save instyll
```

Then `use` it wherever you use `stylus`:

```js
const instyll = require('instyll');

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(instyll());
}
```

## Mixins

#### `tween(properties, timing, easing)`

An alias for `transition`, but with better defaults and semantics (IMO). All arguments are optional. Defaults are:

```
properties = all
timing = 0.8s
easing = cubic-bezier(0, 0, 0.25, 1)
```

Example:

```stylus
.button
  background green
  tween()

  &:hover
    background red

.box
  position absolute
  top 0
  left 0
  transform translateX(0px)
  tween transform

  &:hover
    transform translateX(200px)

.boxFadeTwoSecondEase
  position absolute
  top 0
  left 0
  transform translateX(0px)
  opacity 1
  tween transform opacity, 2s, ease

  &:hover
    transform translateX(200px)
    opacity 0
```

#### `uninteractive()`

Completely disable an element. Useful for disabling form fields and UI controls.

Example:

```stylus
.disabled
  uninteractive()
```
