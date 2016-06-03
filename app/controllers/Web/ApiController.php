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

            $allPosts = Posts::getAllPosts();
            foreach ($allPosts as $key=>$allPost) {
                foreach ($allPost as $k=>$i) {
                    if($k=="image"){
                        $allPosts[$key][$k]= explode(",",$i);
                    }
                }
            }
            $returnVO->success = $allPosts;
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
                $lastPost = Posts::getPostByTitle($title)[0];
                if($lastPost["image"]){
                    $lastPost["image"] = explode(",",$lastPost["image"]);
                }
                $returnVO->success = $lastPost;
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

