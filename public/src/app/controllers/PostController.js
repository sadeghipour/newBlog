app.controller('PostController', function ($scope,WebService,$location,$window) {

    $scope.init = function () {
        var params = {
            title : $window.postTitle
        };

        WebService.getPostByTitle(params, function (result) {
            $scope.post = result && result.success?result.success:null;
        })
    };

    $scope.init();

});