<?php
namespace App\Controllers\Web;

use App\LogicLayer\ReturnVO;
use App\Models\Posts;
use App\Models\VisitIp;
use Phalcon\Http\Request;
use Phalcon\Http\Response;
use Phalcon\Mvc\View;

class ApiController extends ControllerBase
{

    public function getAllPostsAction(){
        $request = new Request();
        $response = new Response();
        $returnVO = new ReturnVO();
        if($request->isPost()){

            if($request->getURI() != "/favicon.ico"){
                $visit_ip = new VisitIp();
                $visit_ip->ip = $request->getClientAddress();
                $visit_ip->date = date("Y/m/d H:i:s");
                $visit_ip->page = "/";
                $visit_ip->save();
            }

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

            if($request->getURI() != "/favicon.ico"){
                $visit_ip = new VisitIp();
                $visit_ip->ip = $request->getClientAddress();
                $visit_ip->date = date("Y/m/d H:i:s");
                $visit_ip->page = $request->getPost("title");
                $visit_ip->save();
            }

            $title = str_replace("-"," ",$request->getPost("title"));
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

    public function getPartialAction($param){

        $view = new View();
        $view->setViewsDir("../app/views/Web");
        $view->partial('index/'.$param);
        //return null;
    }


}

