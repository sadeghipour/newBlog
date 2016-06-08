app.controller('PostController', function ($scope,WebService,$location,$window,$sce,$timeout,$rootScope,EVENTS,$stateParams) {

    $scope.init = function () {
        var params = {
            title : $stateParams.title
        };

        WebService.getPostByTitle(params, function (result) {
            $scope.post = result && result.success?result.success:null;
            if ($scope.post) {
                document.title = document.title+" | "+$scope.post.title;
                $scope.post.description = $sce.trustAsHtml($scope.post.description);
            }
        })
    };

    $scope.init();

    $rootScope.applyChanges = function () {
       /* console.log("apply");
        $timeout(function () {
            $scope.$digest();
            $rootScope.$digest();
        },10);

        $rootScope.$broadcast(EVENTS,null);*/

        Caman("#filtered_image", function () {

            for (var i = 0; i < Object.keys($scope.camanObj).length; i++){
                var key = Object.keys($scope.camanObj)[i];
                var value = $scope.camanObj[Object.keys($scope.camanObj)[i]];
                console.log(key);
                console.log(value);
                this[key](0);
                this[key](value);
            }
            this.render();
        });
    }

});