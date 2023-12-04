<?php 
// app/Domain/Card.php

namespace App\Domain;

class Promotion
{
    public $imageUrl;
    public $title;
    public $caption;

    public function __construct($imageUrl, $title, $caption)
    {
        $this->imageUrl = $imageUrl;
        $this->title = $title;
        $this->caption = $caption;
    }
}
