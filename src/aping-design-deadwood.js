"use strict";

angular.module('jtt_aping_deadwood', ['angularVideoBg'])
    .controller('apingDeadwoodController', ['$scope', function ($scope) {

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
    }]);