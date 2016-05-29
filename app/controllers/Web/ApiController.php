<?php
namespace App\Controllers\Web;

use App\LogicLayer\ReturnVO;
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

}

