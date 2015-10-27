## gulp-tssfmt

[tssfmt](https://github.com/k0sukey/tssfmt) for gulp.

### Install

```sh
$ npm install gulp-tssfmt --save-dev
```

### Usage

```js
var gulp = require('gulp'),
	plugin = require('gulp-load-plugins')();

gulp.task('tssfmt', function(){
	return gulp.src('app/styles/**/*.tss')
		.pipe(plugin.tssfmt());
});
```

### Config

tssfmt on your rule.

```js
gulp.task('tssfmt', function(){
	return gulp.src('app/styles/**/*.tss')
		.pipe(plugin.tssfmt({
			quote: '"',
			indent: '  '
		}));
});
```

### License

MIT