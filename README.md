# generator-express-ts [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Yeoman generator for creating an application,using express and typescript.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-express-ts using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo typescript
npm install -g generator-express-ts
```

Then generate your new project:

```bash
yo express-ts
```

After generating your proejct,cd into it,download d.ts and complie typescript files to javascript files:
```
tsd install
```
```
tsc
```

After finish all,Run your project:
```
node app/bin/www.js
```

## Getting To Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## License

MIT © [infeng](https://github.com/infeng)


[npm-image]: https://badge.fury.io/js/generator-express-ts.svg
[npm-url]: https://npmjs.org/package/generator-express-ts
[travis-image]: https://travis-ci.org/infeng/generator-express-ts.svg?branch=master
[travis-url]: https://travis-ci.org/infeng/generator-express-ts
[daviddm-image]: https://david-dm.org/infeng/generator-express-ts.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/infeng/generator-express-ts
[coveralls-image]: https://coveralls.io/repos/infeng/generator-express-ts/badge.svg
[coveralls-url]: https://coveralls.io/r/infeng/generator-express-ts
