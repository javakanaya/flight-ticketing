<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Passenger extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function transaction(): BelongsTo {
        return $this->belongsTo(Transaction::class);
    }

    public function facilities(): BelongsToMany {
        return $this->belongsToMany(Facility:: class);
    }
}
