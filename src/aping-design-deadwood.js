"use strict";

angular.module('jtt_aping_deadwood', ['youtube-embed'])
    .controller('apingDeadwoodController', ['$scope', '$sce', function ($scope, $sce) {

        $scope.currentIndex = 0;

        $scope.workingCopy = [];
        var sliderCount = 4;

        $scope.owl;

        $scope.$on('apiNG.resultMerged', function () {
            $scope.workingCopy = $scope.results;

            if ($scope.workingCopy.length > 0) {
                $scope.activateVideo($scope.workingCopy[0], false, $scope.currentIndex);
            }

            setTimeout(function () {
                if ($scope.workingCopy.length > 0) {
                    $scope.currentIndex = 0;

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
                            [900, 3],
                            [1200, 4],
                            [1900, 5]
                        ]
                    });

                    $scope.owl = $(".owl-carousel").data('owlCarousel');
                }
            }, 100)
        });

        $scope.$on('youtube.player.ended', function ($event, player) {
            if($scope.workingCopy.length>$scope.currentIndex) {
                $scope.activateVideo($scope.workingCopy[$scope.currentIndex+1], false, $scope.currentIndex+1);
            }
        });

        $scope.activateVideo = function (_video, _event, _index) {
            $scope.selected = _video;
            $(".outer-carousel-item").removeClass("active");

            if(_event) {
                $(_event.currentTarget).addClass("active");
            }

            if($scope.owl) {
                $scope.owl.goTo(_index);
            }

            $scope.currentIndex=_index;
        };

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