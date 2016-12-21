(function () {
	'use strict';
	angular.module('app.common')
		.filter('coTypeaheadHighlight', coTypeaheadHighlight);

	function coTypeaheadHighlight() {
		return function (text, fragment) {
			var highlighted;

			if (!text || !fragment || !_.isString(text) || !_.isString(fragment)) {
				return text;
			}

			fragment = fragment.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');

			highlighted = text.replace(new RegExp('([^a-z]+)(' + fragment + ')', 'gi'), '$1<strong>$2</strong>');
			highlighted = highlighted.replace(new RegExp('^(' + fragment + ')', 'gi'), '<strong>$1</strong>');

			return highlighted;
		};
	}
}());
