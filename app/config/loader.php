<?php

$loader = new \Phalcon\Loader();

/**
 * We're a registering a set of directories taken from the configuration file
 */
//$loader->registerDirs(
//    array(
//        $config->application->controllersDir,
//        $config->application->modelsDir
//    )
//)->register();

$loader->registerNamespaces(array(
    "App\Controllers\Web"=> __DIR__."/../controllers/Web",
    "App\Models"=> __DIR__."/../models",
    "App\LogicLayer"=> __DIR__."/../logicLayer",
))->register();
