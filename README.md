[![Version](https://img.shields.io/npm/v/elixir-tinypng.svg)][npm]
[![Downloaded](https://img.shields.io/npm/dm/elixir-tinypng.svg)][npm]

# elixir-tinypng

> Elixir wrapper for [gulp-tinypng-compress](https://github.com/stnvh/gulp-tinypng-compress)

## Install
*Requires node `0.10.x` or above*

Install with [npm](https://npmjs.org/package/elixir-tinypng) - In your project folder, run:

```
npm install elixir-tinypng
```

## Example

```js
var elixir = require('laravel-elixir');
require('elixir-tinypng');

elixir(function(mix) {
  mix.tinypng({
    key: 'API_KEY',
    sigFile: '.tinypng-sigs',
  });
});

```

## mix.tinypng([options])

#### options

See options for [gulp-tinypng-compress](https://github.com/stnvh/gulp-tinypng-compress#api)

## Custom Directory Structure

By default, images in `resources/assets/img` will be compiled to `public/img`. You can override this by setting Elixir's config:

```js
config.img = {
  folder: "raw/images",
  outputFolder:"compressed/images"
}
```

## File types
TinyPNG only processes PNGs and JPGs. For everything else (GIFs, SVGs, etc.), you'll want to either write an additional task to move them or put them directly into the directory your processed images are going in.


## License

MIT &copy; Ethan Clevenger

**Wrapper for:**

MIT © Stan Hutcheon - Bigfork Ltd.

[npm]: https://www.npmjs.com/package/elixir-tinypng
