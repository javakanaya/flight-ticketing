<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Airport extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function arrival_route(): HasMany
    {
        return $this->hasMany(Route::class, 'destination_airport_id');
    }
    public function departure_route(): HasMany
    {
        return $this->hasMany(Route::class, 'source_airport_id');
    }
    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class, 'city_id');
    }
}
