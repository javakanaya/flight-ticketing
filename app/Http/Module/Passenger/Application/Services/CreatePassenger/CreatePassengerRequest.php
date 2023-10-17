<?php

namespace App\Http\Module\Passenger\Application\Services\CreatePassenger;

class CreatePassengerRequest
{
    public function __construct(
        public string $nik,
        public string $nama,
    )
    {}
}
