<?php 
// app/Models/CardModel.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    protected $table = 'promotion'; // Adjust the table name as needed
    protected $fillable = ['title', 'image_url', 'caption'];
}
