<?php
namespace App\Controllers\Web;

use App\LogicLayer\ReturnVO;
use App\Models\Posts;
use Phalcon\Http\Request;
use Phalcon\Http\Response;

class ApiController extends ControllerBase
{

    public function getAllPostsAction(){
            $request = new Request();
            $response = new Response();
            $returnVO = new ReturnVO();
            if($request->isPost()){

                $returnVO->success = Posts::getAllPosts();
            }
            return $response->setJsonContent($returnVO);
        }

    
    
    public function getPostByTitleAction(){
            $request = new Request();
            $response = new Response();
            $returnVO = new ReturnVO();
            if($request->isPost()){
                $title = $request->getPost("title");
                if($title){
                    $returnVO->success = Posts::getPostByTitle($title)[0];
                }
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

