<?php

$router = new \Phalcon\Mvc\Router();
$router->setDefaultAction("index");
$router->setDefaultNamespace("App\Controllers\Web");
$router->add(
    "/:action/:params",
    array(
        'namespace' => 'App\Controllers\Web',
        "controller" => "index",
        "action" => 1,
        "params" => 2
    ))->convert('action', function ($action) {
    return getActionName($action);
});


$router->add(
    "/api/:action/:params",
    array(
        'namespace' => 'App\Controllers\Web',
        "controller" => "api",
        "action" => 1,
        "params" => 2
    ))->convert('action', function ($action) {
    return getActionName($action);
});


function getActionName($action)
{
    return lcfirst(\Phalcon\Text::camelize($action));
}
$router->handle();