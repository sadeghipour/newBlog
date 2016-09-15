var app = angular.module('app', ['ngSanitize', "ui.router", 'ct.ui.router.extras','angularUtils.directives.dirPagination']);

app.factory("AppData", function () {
    return {
        "DOC_TITLE":"Ali Sadeghipour Körabbaslu"

    };
});

app.factory("EVENTS", function () {
    return {
        TODO_ADDED: "todo_added",
        TODO_DELETED: "todo_added",
        DATA_CHANGED:"data-changed",
        ON_STATE_CHANGED: "on-state-changed",
    };
});

app.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('/html_templates/dirPagination.tpl.html');
});

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
    $urlMatcherFactoryProvider.strictMode(true),
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }),

        $urlRouterProvider.otherwise("/"),

        $stateProvider.state("index", {
            url: "/",
            params: {
                title: {squash: true, value: null}
            },
            views: {
                main: {
                    templateUrl: function($state, $stateParams) {
                        return  "/api/get-partial/index"
                    },
                    controller: "IndexController"
                }

            },
            onEnter: function($rootScope, $stateParams, EVENTS) {

                $rootScope.keywords = "Angular 2, AngularJS, Phalcon, Webpack, Ali SadeghipourKorabaslo, Ali Körabbaslu, Full Stack Developer,ZF2,SailsJS, Swift 3, iOS, xCode";
                console.log("onEnter Index");

                $rootScope.facebook = {
                    url:window.location.protocol+"//"+window.location.hostname,
                    title:"Alisch.me",
                    description:"I Love Coding, Bearing, Baking and Biking :D",
                    image:window.location.protocol+"//"+window.location.hostname+"/img/istanbul.jpg",

                }
            }
        });

    $stateProvider.state("post", {
        url: "/post/:title",
        params: {
            title: {squash: true, value: null}
        },
        views: {
            main: {
                templateUrl: function($state, $stateParams) {
                    return "/api/get-partial/post"
                },
                controller: "PostController"
            }

        },
        onEnter: function($rootScope, $stateParams, EVENTS) {

            console.log("onEnter post");
        }
    });

    $stateProvider.state("me", {
        url: "/me",
        views: {
            main: {
                templateUrl: function($state, $stateParams) {
                    return "/api/get-partial/me"
                },
                controller: "MeController"
            }

        },
        onEnter: function($rootScope, $stateParams, EVENTS) {

            console.log("onEnter me");
        }
    });

    $stateProvider.state("contact", {
        url: "/contact",
        views: {
            main: {
                templateUrl: function($state, $stateParams) {
                    return "/api/get-partial/contact"
                },
                controller: "ContactController"
            }

        },
        onEnter: function($rootScope, $stateParams, EVENTS) {

            console.log("onEnter Contact");
        }
    });

    $stateProvider.state("farsi", {
        url: "/farsi",
        views: {
            main: {
                templateUrl: function($state, $stateParams) {
                    return "/api/get-partial/farsi"
                },
                controller: "ContactController"
            }

        },
        onEnter: function($rootScope, $stateParams, EVENTS) {

            console.log("onEnter Farsi");
        }
    });
});



app.run(function ($rootScope, $location) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams)
    {
        window.ga('send', 'pageview', { page: $location.url() });
    });
});

app.config(function logic(){
    String.prototype.replaceAll = function(str1, str2, ignore)
    {
        return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
    }
});
