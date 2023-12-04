<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Facility extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    // Facility bisa gaperlu nampilin passenger siapa aja yg mesen
    // public function passengers(): BelongsToMany
    // {
    //     return $this->belongsToMany(Passenger::class);
    // }

    public function airline(): BelongsTo
    {
        return $this->belongsTo(Airline::class);
    }

}