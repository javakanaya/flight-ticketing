<?php

namespace App\Http\Module\Passenger\Infrastructure\Repository;

use App\Http\Module\Passenger\Domain\Model\Passenger;
use App\Http\Module\Passenger\Domain\Services\Repository\PassengerRepositoryInterface;
use Illuminate\Support\Facades\DB;


class PassengerRepository implements PassengerRepositoryInterface
{
    public function save(Passenger $passenger)
    {
        DB::table('passengers')
        ->upsert(
            [
                'nama' => $passenger->nama,
                'nik' => $passenger->nik,
            ],
            ['nik'], // Unique field to determine whether to insert or update
            ['nama'] // Fields to be updated if the record already exist
        );
    }
}
