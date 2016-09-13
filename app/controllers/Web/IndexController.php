<?php
namespace App\Controllers\Web;


use App\Models\Posts;

class IndexController extends ControllerBase
{
    public function indexAction(){

        $baseUrl = $_SERVER['REQUEST_SCHEME']."://" . $_SERVER['SERVER_NAME'];
        $facebook = array(
            "url"=>$_SERVER['REQUEST_URI'],
            "title"=>"Alisch.me",
            "description"=>"I Love Coding, Bearing, Baking and Biking :D",
            "image"=>$baseUrl."/img/istanbul.jpg"
        );

        $this->view->setVar("facebook",$facebook);
    }

    public function postAction($url){

        $baseUrl = $_SERVER['REQUEST_SCHEME']."://" . $_SERVER['SERVER_NAME'];
        $post = Posts::findFirst(array("title=?0","bind"=>array(str_replace("-"," ",$url))));
        if($post){
            $facebook = array(
                "url"=>$baseUrl."/post/".$url,
                "title"=>$post->title,
                "description"=>substr(strip_tags($post->description),0,100)."...",
                "image"=>$baseUrl.explode(",",$post->image)[0]
            );

            $this->view->setVar("facebook",$facebook);
        }
    }

    public function meAction(){

    }

    public function contactAction(){

    }

    public function show404Action(){

    }

    public function farsiAction(){

    }

}

