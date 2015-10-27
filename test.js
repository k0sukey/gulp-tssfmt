/* global describe: true, it: true */

var assert = require('assert'),
	vinyl = require('vinyl'),
	tssfmt = require('./');

describe('gulp-tssfmt', function(){
	it('should throw exception', function(done){
		var source = new vinyl({
				contents: new Buffer('"Window": { top: 0, right: 0, bottom: 0, left: 0, width: Ti.UI.FILL, height: Ti.UI.FILL, backgroundColor: Alloy.Globals.backgroundColor }')
			}),
			myTssfmt = tssfmt();

		assert.throws(function(){
			myTssfmt.write(source);
		});

		done();
	});

	it('should does not throw exception', function(done){
		var source = new vinyl({
				contents: new Buffer('\'Window\': {\n\ttop: 0,\n\tright: 0,\n\tbottom: 0,\n\tleft: 0,\n\twidth: Ti.UI.FILL,\n\theight: Ti.UI.FILL,\n\tbackgroundColor: Alloy.Globals.backgroundColor\n}')
			}),
			myTssfmt = tssfmt();

		assert.doesNotThrow(function(){
			myTssfmt.write(source);
		});

		done();
	});
});