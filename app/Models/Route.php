<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Route extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function source_airport(): BelongsTo
    {
        return $this->belongsTo(Airport::class, 'source_airport_id');
    }

    public function destination_airport(): BelongsTo
    {
        return $this->belongsTo(Airport::class, 'destination_airport_id');
    }

    public function airline(): BelongsTo
    {
        return $this->belongsTo(Airline::class);
    }

    public function seat_conf(): BelongsTo
    {
        return $this->belongsTo(Seat::class, 'seat_id');
    }

    public function ticket(): HasMany 
    {
        return $this->hasMany(Ticket::class);
    }

    public function facilities(): HasMany 
    {
        return $this->hasMany(Facility::class);
    }
}
