angular.module('radio.controller')

	.controller('TabsCtrl', function($scope, $ionicSlideBoxDelegate, $ionicHistory, 
		$state, $log) {

		$scope.tabs = {};

		$scope.tabs.clearCache = function() {
			$ionicHistory.clearCache()
		}

		$scope.tabs.goTab = function(menu) {
			var state = 'tabs.'+menu;
			$log.log(state);
			$state.go(state);
			$scope.tabs.clearCache();
		}
	});