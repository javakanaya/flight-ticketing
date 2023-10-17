<?php

namespace App\Http\Module\Passenger\Domain\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class Passenger
{
    /**
     * @param string $nama
     * @param string $nik
     */
    public function __construct(
        public string $nik,
        public string $nama,
    )
    {
    }
}
