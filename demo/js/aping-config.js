"use strict";

apingApp.config(['$provide', function ($provide) {

    $provide.constant("apingApiKeys", {
        youtube : [
            {'apiKey':'<YOUR_YOUTUBE_API_KEY>'},
        ]
    });

    $provide.constant("apingDefaultSettings", {
        templateUrl : "../src/aping_design_deadwood.html",
        items : 20, //items per request
        maxItems: 100, //max items per aping
        orderBy : "timestamp",
        orderReverse : "true",
        model: "social",
    });

}]);