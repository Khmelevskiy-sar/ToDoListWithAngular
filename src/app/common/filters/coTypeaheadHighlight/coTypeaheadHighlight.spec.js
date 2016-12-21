/// <reference path="../../../common/testHelpers/_reference.js" />
/// <reference path="coTypeaheadHighlight.js" />
(function () {
	'use strict';

	describe('coTypeaheadHighlight', function () {
		beforeEach(module('app'));
		beforeEach(module('app.common'));
		beforeEach(module('ngMockE2E'));

		var coTypeaheadHighlight;

		beforeEach(inject(function ($filter) {
			coTypeaheadHighlight = $filter('coTypeaheadHighlight');
		}));

		it('should correctly set <strong> tags to highlight text fragments at the beginning of the words in text', function () {
			expect(coTypeaheadHighlight('', 'ab')).toBe('');
			expect(coTypeaheadHighlight('ab', '')).toBe('ab');
			expect(coTypeaheadHighlight('abc', 'ab')).toBe('<strong>ab</strong>c');
			expect(coTypeaheadHighlight('abc abcd', 'ab')).toBe('<strong>ab</strong>c <strong>ab</strong>cd');
			expect(coTypeaheadHighlight('abc abc', 'ab-c')).toBe('abc abc');
			expect(coTypeaheadHighlight('bc bc ab-c ab0 bab', 'ab')).toBe('bc bc <strong>ab</strong>-c <strong>ab</strong>0 bab');
		});
	});
}());
