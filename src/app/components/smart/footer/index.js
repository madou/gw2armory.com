'use strict';

import { actionCreators } from '../../../actions/window';

function directive ($window, debounce) {
	let link = (scope, element, attributes, controller) => {
		let ele = element[0];

		function onResizeEvent () {
			controller.setSpacerHeight(ele.offsetHeight);
		}

		let debounceResize = debounce.func(onResizeEvent, 200);
		$window.addEventListener('resize', debounceResize, false);

		scope.$on('$destroy', () => {
			$window.removeEventListener('resize', debounceResize);
		});

		onResizeEvent();
	};

	let directive = {
		restrict: 'E',
		link: link,
		scope: {},
		controller: Footer,
		controllerAs: 'ctrl',
		templateUrl: 'app/components/smart/footer/view.html'
	};

	return directive;
}

function Footer ($ngRedux) {
	this.setSpacerHeight = (height) => {
		$ngRedux.dispatch(actionCreators.setBottomSpacer(height));
	};
}

export default directive;