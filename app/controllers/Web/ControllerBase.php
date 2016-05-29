<?php
namespace App\Controllers\Web;

use Phalcon\Mvc\Controller;

class ControllerBase extends Controller
{


    function initialize()
    {
        $this->view->setViewsDir($this->view->getViewsDir() . "Web/");
    }

}
