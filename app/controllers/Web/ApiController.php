<?php
namespace App\Controllers\Web;

use App\LogicLayer\ReturnVO;
use App\Models\Posts;
use Phalcon\Http\Request;
use Phalcon\Http\Response;

class ApiController extends ControllerBase
{

    public function getLastestPostsAction(){
        $request = new Request();
        $response = new Response();
        $returnVO = new ReturnVO();
        if($request->isPost()){

            $returnDummy = [array(
                "title"=>"Title Dummy",
                "img"=>"/img/background_image.jpg",
                "description"=>"Description",
                "date"=>"19/06/2016",
                "link"=>"post/angular-js-ui-router"
            )];

            $returnVO->success = $returnDummy;
        }
        return $response->setJsonContent($returnVO);
    }

    public function testInsertPostAction(){
        return;


        $request = new Request();
        $response = new Response();
        $returnVO = new ReturnVO();
        if($request->isPost()){
            $getPost = $request->getPost("post");
            if($getPost){
                $result = Posts::insert($getPost);
                $returnVO->success = $result;
            }
        }
        return $response->setJsonContent($returnVO);
    }


}

