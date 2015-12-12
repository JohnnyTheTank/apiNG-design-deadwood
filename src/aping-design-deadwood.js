"use strict";

angular.module('jtt_aping_deadwood', [])
    .controller('apingDeadwoodController', ['$scope', '$sce', function ($scope, $sce) {

        $scope.workingCopy = [];
        var sliderCount = 4;

        $scope.$on('apiNG.resultMerged', function () {
            $scope.workingCopy = $scope.results;

            if ($scope.workingCopy.length > 0) {
                $scope.activateVideo($scope.workingCopy[0]);
            }

            setTimeout(function () {
                if ($scope.workingCopy.length > 0) {

                    if ($scope.workingCopy.length < sliderCount) {
                        sliderCount = $scope.workingCopy.length;
                    }

                    $('#deadwood-owl-carousel').owlCarousel({
                        //items: sliderCount,
                        loop: false,
                        mergeFit: false,
                        margin: 10,
                        itemsCustom : [
                            [0, 2],
                            [1000, 3],
                            [1400, 4],
                            [1900, 5]
                        ]
                    });
                }
            }, 100)
        });

        $scope.activateVideo = function (_video, _event) {
            $scope.selected = _video;
            $(".outer-carousel-item").removeClass("active");

            if(_event) {
                $(_event.currentTarget).addClass("active");
            }
        }

        $scope.getHtml = function (string) {
            if(string) {
                return $sce.trustAsHtml(string);
            }
        };

        $scope.getUrl = function (string) {
            if(string) {
                return $sce.trustAsResourceUrl(string);
            }
        };

    }]);