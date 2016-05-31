var app = angular.module('app', ['ngSanitize', "ui.router", 'ct.ui.router.extras','angularUtils.directives.dirPagination']);

app.factory("AppData", function () {
    return {};
});

app.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('/html_templates/dirPagination.tpl.html');
});


app.factory("EVENTS", function () {
    return {
        TODO_ADDED: "todo_added",
        TODO_DELETED: "todo_added"
    };
});