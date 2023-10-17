<?php

namespace App\Http\Module\Passenger\Domain\Services\Repository;

use App\Http\Module\Passenger\Domain\Model\Passenger;

interface PassengerRepositoryInterface
{
    public function save(Passenger $passenger);

}
