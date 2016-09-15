app.controller('PostController', function ($scope,WebService,$location,$window,$sce,$timeout,$rootScope,EVENTS,$stateParams,AppData) {
    $scope.init = function () {
        var params = {
            title : $stateParams.title
        };
        document.title = AppData.DOC_TITLE+" | "+ $stateParams.title.replaceAll("-"," ");
        if(!$scope.post){
            WebService.getPostByTitle(params, function (result) {
                $scope.post = result && result.success?result.success:null;
                if ($scope.post) {
                    $rootScope.keywords = $scope.post.meta_tags;
                    $scope.post.meta_tags = $scope.post.meta_tags.split(",");
                    $scope.post.description = $sce.trustAsHtml($scope.post.description);
                }
            });
        }
    };

    $scope.init();
});