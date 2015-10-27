var chalk = require('chalk'),
	diff = require('diff'),
	gutil = require('gulp-util'),
	through = require('through2'),
	tssfmt = require('tssfmt');

module.exports = function(options){
	options = options || {};

	return through.obj(function(file, encode, callback){
		if (file.isNull()) {
			return callback(null, file);
		}

		if (file.isStream()) {
			return callback(new gutil.PluginError('gulp-tssfmt', 'Streaming not supported'));
		}

		var source = file.contents.toString('utf8'),
			destination = tssfmt(source, options),
			result = '';

		if (source !== destination) {
			diff.diffCss(source, destination).forEach(function(part){
				var color = part.added ? 'green' : part.removed ? 'bgRed' : 'gray';
				result += chalk[color](part.value);
			});

			return callback(new gutil.PluginError('gulp-tssfmt', file.path + '\n' + result));
		}

		callback();
	});
};