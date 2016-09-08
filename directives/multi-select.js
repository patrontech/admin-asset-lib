
angular.module("tzMultiSelect", ['tzMultiSelect.input']);

angular.module('tzMultiSelect.input', [])
    .directive('tzMultiSelectInput', ['$location', function($location) {
    return {
        restrict: 'AE',
        templateUrl: '/bower_components/admin-asset-lib/directives/multi-select.html',
        controller: ['$scope', '$location', '$routeParams', function ($scope, $location, $routeParams) {

            $scope.keydown = function (e) {
                if (e.keyCode == 13) {
                    e.preventDefault();
                    if (_.findLastIndex($scope.list.items, { name: e.target.value }) != -1) {
                        $scope.addItemToList(e.target.value);
                        e.target.value = '';
                    }
                }
            };

            $scope.addItemToList = function (item) {
                if (_.contains($scope.selectedItems, item) == false) {
                    $scope.selectedItems.push(item);
                }
            };

            $scope.removeItem = function (index) {
                $scope.selectedItems.splice(index, 1);
            };

        }],
        scope: {
            list: '=list',
            selectedItems: '=model'
        }
    };
}]);