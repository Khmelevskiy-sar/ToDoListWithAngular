(function () {
	'use strict';

	angular.module('app.common')
		.provider('urlHelper', function () {
			this.getUrlParam = getUrlParam;
			this.$get = function () {
				return {
					getUrlParam: getUrlParam,
					insertParam: insertParam,
					removeParam: removeParam
				};
			};
		});

	///

	function getUrlParam(windowObj, param) {
		param = param.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
		var regexS = '[\\?&]' + param + '=([^&#]*)';
		var regex = new RegExp(regexS);
		var results = regex.exec(windowObj.location.href); // eslint-disable-line
		return results === null ? null : results[1].replace('/', '');
	}

	function insertParam(windowObj, parameterName, parameterValue) {
		windowObj.location.href = addParameter(windowObj.location.href, parameterName, parameterValue);
	}

	function addParameter(url, parameterName, parameterValue) {
		var cl,
			urlhash,
			sourceUrl,
			replaceDuplicates = true;

		if (url.indexOf('#') > 0) {
			cl = url.indexOf('#');
			urlhash = url.substring(url.indexOf('#'), url.length);
		}
		else {
			urlhash = '';
			cl = url.length;
		}
		sourceUrl = url.substring(0, cl);

		var urlParts = sourceUrl.split('?');
		var newQueryString = '';

		if (urlParts.length > 1) {
			var parameters = urlParts[1].split('&');
			for (var i = 0; i < parameters.length; i++) {
				var parameterParts = parameters[i].split('=');
				if (!(replaceDuplicates && parameterParts[0] === parameterName)) {
					if (newQueryString === '') {
						newQueryString = '?';
					}
					else {
						newQueryString += '&';
					}
					newQueryString += parameterParts[0] + '=' + (parameterParts[1] ? parameterParts[1] : '');
				}
			}
		}

		if (newQueryString === '') {
			newQueryString = '?';
		}
		if (newQueryString !== '' && newQueryString !== '?') {
			newQueryString += '&';
		}
		newQueryString += parameterName + '=' + (parameterValue ? parameterValue : '');

		return urlParts[0] + newQueryString + urlhash;
	}

	function removeParam(windowObj, param) {
		windowObj.location.href = deleteParam(windowObj.location.href, param);
	}

	function deleteParam(url, param) {
		var regexps = [
		'&' + param,
		param + '&'
		];

		if (!url.match('&')) {
			regexps.push('?' + param);
		}

		_.each(regexps, function (regexp) {
			url = url.replace(regexp, '');
		});

		return url;
	}

}());
