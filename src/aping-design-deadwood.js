"use strict";

angular.module('jtt_aping_deadwood', ['angularVideoBg', 'yaru22.angular-timeago', 'linkify'])
    .controller('apingDeadwoodController', ['$scope', function($scope) {

        $scope.$on('resultMerged', function () {
            $scope.workingCopy = $scope.results;
        });

    }]);

