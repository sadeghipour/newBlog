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

                console.log("onEnter Index");
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

            console.log("onEnter post view");
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

            console.log("onEnter post me");
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

            console.log("onEnter post Contact");
        }
    });

});
