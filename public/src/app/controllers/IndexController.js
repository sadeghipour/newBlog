app.controller('IndexController', function ($scope,WebService) {

    WebService.getLastestPosts(function (result) {
        $scope.lastPosts = result && result.success ? result.success : null;
    });

});