app.controller('PostController', function ($scope,WebService,$location,$window,$sce,$timeout,$rootScope,EVENTS,$stateParams,AppData) {

    $scope.init = function () {
        var params = {
            title : $stateParams.title
        };
        document.title = AppData.DOC_TITLE+" | "+ $stateParams.title;

        WebService.getPostByTitle(params, function (result) {
            $scope.post = result && result.success?result.success:null;
            if ($scope.post) {
                $scope.post.description = $sce.trustAsHtml($scope.post.description);
            }
        })
    };

    $scope.init();

    $rootScope.applyChanges = function () {

        $timeout(function () {
            $scope.$digest();
            $rootScope.$digest();
        },10);
    }

});