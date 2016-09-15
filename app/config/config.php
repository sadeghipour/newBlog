<?php

defined('APP_PATH') || define('APP_PATH', realpath('.'));

date_default_timezone_set('Europe/Istanbul');

$dev_db = array(

    'adapter'     => 'Mysql',
    'host'        => '127.0.0.1',
    'username'    => 'alisch',
    'password'    => 'n8Jhc5jghmtefAlG',
    'dbname'      => 'alisch.me',
    'charset'     => 'utf8',

);


$prod_db = array(
    'adapter'     => 'Mysql',
    'host'        => '127.0.0.1',
    'username'    => 'alisch',
    'password'    => '************************',
    'dbname'      => 'alisch.me',
    'charset'     => 'utf8',
);

return new \Phalcon\Config(array(

    'database' => $prod_db,

    'application' => array(
        'controllersDir' => APP_PATH . '/app/controllers/',
        'modelsDir'      => APP_PATH . '/app/models/',
        'migrationsDir'  => APP_PATH . '/app/migrations/',
        'viewsDir'       => APP_PATH . '/app/views/',
        'pluginsDir'     => APP_PATH . '/app/plugins/',
        'libraryDir'     => APP_PATH . '/app/library/',
        'cacheDir'       => APP_PATH . '/app/cache/',
        'baseUri'        => '/blog/',
    )
));
