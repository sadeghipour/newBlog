<?php
namespace App\Models;
class Posts extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $id;

    /**
     *
     * @var integer
     */
    public $lang;

    /**
     *
     * @var string
     */
    public $title;

    /**
     *
     * @var string
     */
    public $image;

    /**
     *
     * @var string
     */
    public $description;

    /**
     *
     * @var string
     */
    public $date;

    /**
     *
     * @var integer
     */
    public $is_active;

    /**
     *
     * @var integer
     */
    public $visit_count;

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'posts';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Posts[]
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Posts
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }


    public static function getAllPosts(){

        $posts = Posts::find("is_active=1");
        return $posts->toArray();

    }

    public static function getPostByTitle($title){

        return Posts::find(array("title=?0","bind"=>array($title)))->toArray();
    }


    public static function insert($params){

        $newPost = new Posts();
        foreach ($params as $key=>$param) {
            $newPost->{$key} = $param;
        }
        if($newPost->save()){
            return true;
        }
        else{
            return false;
        }

    }

}
