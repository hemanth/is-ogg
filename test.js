'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var isGif = require('./index');

function check(filename) {
	return isGif(readChunk.sync(filename, 0, 4));
}

it("should detect if it's ogg, ogv, oga from Buffer", function () {
	assert(check('fixture.ogg'));
	assert(!check('fixture.nogg'));
});
