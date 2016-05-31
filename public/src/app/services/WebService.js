app.service('WebService', function ($http) {


    this.getLastestPosts = function ( callbackFunc)
    {
        $http({
            url: '/api/getAllPosts',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            //data: $.param(params)
        }).success(function (data)
        {
            callbackFunc(data);
        }).error(function (data)
        {
            callbackFunc([]);
        });
    };
    
    this.getPostByTitle = function (params, callbackFunc)
        {
            $http({
                url: '/api/getPostByTitle',
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param(params)
            }).success(function (data)
            {
                callbackFunc(data);
            }).error(function (data)
            {
                callbackFunc([]);
            });
        };
    
    


});