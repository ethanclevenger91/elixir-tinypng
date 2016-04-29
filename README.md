[![Version](https://img.shields.io/npm/v/elixir-tinypng.svg)][npm]
[![Downloaded](https://img.shields.io/npm/dm/elixir-tinypng.svg)][npm]

# elixir-tinypng

> Elixir wrapper for [gulp-tinypng-compress](https://github.com/stnvh/gulp-tinypng-compress)

## Install
*Requires node `0.10.x` or above*

Install with [npm](https://npmjs.org/package/elixir-tinypng) - In your project folder, run:

```
npm install gulp-tinypng-compress
```

## Example

```js
var elixir = require('laravel-elixir');
require('elixir-tinypng');

elixir(function(mix) {
    mix.tinypng('img', {
      key: 'API_KEY',
			sigFile: '.tinypng-sigs',
    })
});

```

## API

### mix.tinypng(src, output, [options])

#### src
Type: `String`<br>
Description: Where to find images, relative to `resources/assets` directory
Default: `config.img.folder` || `config.assetsPath+'/img'`

#### output
Type: `String`<br>
Description: Where to output images, relative to `public` directory
Default: `config.img.outputFolder` || `config.publicPath+'/img'`

#### options

See options for [gulp-tinypng-compress](https://github.com/stnvh/gulp-tinypng-compress#api)


## License

MIT &copy; Ethan Clevenger

**Wrapper for:**

MIT © Stan Hutcheon - Bigfork Ltd.

[npm]: https://www.npmjs.com/package/elixir-tinypng
