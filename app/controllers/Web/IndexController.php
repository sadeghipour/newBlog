<?php
namespace App\Controllers\Web;


class IndexController extends ControllerBase
{
    public function indexAction(){

    }

    public function postAction($title){

        $this->view->setVar("postTitle",$title);
    }

    public function show404Action(){

    }

}

