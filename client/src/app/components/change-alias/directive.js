'use strict';

function ChangeAliasDirective () {
	let directive = {
		restrict: 'E',
		controller: 'ChangeAliasController as ctrl',
		scope: {},
		templateUrl: 'app/components/change-alias/view.html',
	};

	return directive;
}

export default ChangeAliasDirective;