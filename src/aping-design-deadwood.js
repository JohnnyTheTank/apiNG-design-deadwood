"use strict";

angular.module('jtt_aping_deadwood', ['angularVideoBg'])
    .controller('apingDeadwoodController', ['$scope', function($scope) {

        $scope.$on('resultMerged', function () {
            $scope.workingCopy = $scope.results;
        });

    }]);

