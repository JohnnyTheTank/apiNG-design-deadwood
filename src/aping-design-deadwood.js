"use strict";

angular.module('jtt_aping_deadwood', ['angularVideoBg'])
    .controller('apingDeadwoodController', ['$scope', function($scope) {

        //$scope.selected = {};

        $scope.workingCopy = [];

        //$scope.results = [];

        $scope.$on('resultMerged', function () {
            $scope.workingCopy = $scope.results;

            if($scope.workingCopy.length>0) {
                $scope.activateVideo($scope.workingCopy[0]);
            }
            setTimeout(function () {
                $('#deadwood-owl-carousel').owlCarousel({
                    items:4,
                    lazyLoad:false,
                    loop:false,
                    margin:0
                });
            }, 0);


        });

        $scope.activateVideo = function(_video) {
            $scope.selected = _video;
        }

    }]);

