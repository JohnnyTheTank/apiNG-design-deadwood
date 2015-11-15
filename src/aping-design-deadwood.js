"use strict";

angular.module('jtt_aping_deadwood', ['angularVideoBg'])
    .controller('apingDeadwoodController', ['$scope', function ($scope) {

        //$scope.selected = {};

        $scope.workingCopy = [];

        //$scope.results = [];

        var sliderCount = 4;

        $scope.$on('resultMerged', function () {
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
                        responsive:{
                            0:{
                                items:2
                            },
                            600:{
                                items:3
                            },
                            1000:{
                                items:sliderCount
                            }
                        }
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

