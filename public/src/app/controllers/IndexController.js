app.controller('IndexController', function ($scope,WebService,AppData) {

    document.title = AppData.DOC_TITLE;

    WebService.getAllPosts(function (result) {
        $scope.lastPosts = result && result.success ? result.success : null;
        if($scope.lastPosts){
            $scope.lastPosts.map(function (val,index) {
                if(val.description.length>250){
                    val.image = val.image[0];
                    val.description = val.description.substr(0,250)+"...";
                }
            })
        }
    });

});