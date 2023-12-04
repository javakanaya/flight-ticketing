<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Ticket extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    

    public function route(): BelongsTo
    {
        return $this->belongsTo(Route::class);
    }

    public function transaction(): HasMany
    {

        return $this->hasMany(Transaction::class);
    }
}