var app = angular.module('app', ['ngSanitize', "ui.router", 'ct.ui.router.extras']);

app.factory("AppData", function () {
    return {};
});

app.factory("EVENTS", function () {
    return {
        TODO_ADDED: "todo_added",
        TODO_DELETED: "todo_added"
    };
});