<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AirportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $indonesia_airports = [
            ['name' => 'Bandar Udara Aek Godang', 'IATA' => 'AEG', 'city_id' => 1, 'timezone' => 7],
            ['name' => 'Bandar Udara Alas Leuser', 'IATA' => 'LSR', 'city_id' => 2, 'timezone' => 7],
            ['name' => 'Bandar Udara Bengkalis (Bandar Udara Meranti, Bandar Udara Sei Selari, Bandar Udara Sei Pakning)', 'IATA' => 'SEQ', 'city_id' => 4, 'timezone' => 7],
            ['name' => 'Bandar Udara Binaka', 'IATA' => 'GNS', 'city_id' => 5, 'timezone' => 7],
            ['name' => 'Bandar Udara Blangkejeren (Bandar Udara Gayo Lues, Bandar Udara Senubung)', 'IATA' => 'GYO', 'city_id' => 8, 'timezone' => 7],
            ['name' => 'Bandar Udara Cut Nyak Dhien', 'IATA' => 'MEQ', 'city_id' => 9, 'timezone' => 7],
            ['name' => 'Bandar Udara Dabo', 'IATA' => 'SIQ', 'city_id' => 10, 'timezone' => 7],
            ['name' => 'Bandar Udara Depati Amir', 'IATA' => 'PGK', 'city_id' => 12, 'timezone' => 7],
            ['name' => 'Bandar Udara Depati Parbo', 'IATA' => 'KRC', 'city_id' => 13, 'timezone' => 7],
            ['name' => 'Bandar Udara Fatmawati Soekarno', 'IATA' => 'BKS', 'city_id' => 15, 'timezone' => 7],
            ['name' => 'Bandar Udara Ferdinand Lumban Tobing (Bandar Udara Pinangsori)', 'IATA' => 'FLZ', 'city_id' => 16, 'timezone' => 7],
            ['name' => 'Bandar Udara H.A.S. Hanandjoeddin (Bandar Udara Buluh Tumbang)', 'IATA' => 'TJQ', 'city_id' => 17, 'timezone' => 7],
            ['name' => 'Bandar Udara Internasional Hang Nadim', 'IATA' => 'BTH', 'city_id' => 18, 'timezone' => 7],
            ['name' => 'Bandar Udara Internasional Kualanamu', 'IATA' => 'KNO', 'city_id' => 19, 'timezone' => 7],
            ['name' => 'Bandar Udara Internasional Minangkabau', 'IATA' => 'PDG', 'city_id' => 20, 'timezone' => 7],
            ['name' => 'Bandar Udara Internasional Sultan Iskandar Muda', 'IATA' => 'BTJ', 'city_id' => 21, 'timezone' => 7],
            ['name' => 'Bandar Udara Japura (Bandar Udara Japura Rengat)', 'IATA' => 'RGT', 'city_id' => 22, 'timezone' => 7],
            ['name' => 'Bandar Udara Lasikin', 'IATA' => 'SNX', 'city_id' => 24, 'timezone' => 7],
            ['name' => 'Bandar Udara Lasondre', 'IATA' => 'LSE', 'city_id' => 25, 'timezone' => 7],
            ['name' => 'Bandar Udara Letung', 'IATA' => 'LMU', 'city_id' => 26, 'timezone' => 7],
            ['name' => 'Bandar Udara Maimun Saleh', 'IATA' => 'SBG', 'city_id' => 27, 'timezone' => 7],
            ['name' => 'Bandar Udara Malikus Saleh', 'IATA' => 'LSW', 'city_id' => 28, 'timezone' => 7],
            ['name' => 'Bandar Udara Muara Bungo', 'IATA' => 'MRB', 'city_id' => 29, 'timezone' => 7],
            ['name' => 'Bandar Udara Mukomuko', 'IATA' => 'MPC', 'city_id' => 30, 'timezone' => 7],
            ['name' => 'Bandar Udara Pinang Kampai', 'IATA' => 'DUM', 'city_id' => 32, 'timezone' => 7],
            ['name' => 'Bandar Udara Radin Inten II', 'IATA' => 'TKG', 'city_id' => 34, 'timezone' => 7],
            ['name' => 'Bandar Udara Raja Haji Abdullah', 'IATA' => 'TJB', 'city_id' => 35, 'timezone' => 7],
            ['name' => 'Bandar Udara Raja Haji Fisabilillah', 'IATA' => 'TNJ', 'city_id' => 36, 'timezone' => 7],
            ['name' => 'Bandar Udara Ranai (Bandar Udara Raden Sadjad)', 'IATA' => 'NTX', 'city_id' => 37, 'timezone' => 7],
            ['name' => 'Bandar Udara Rembele', 'IATA' => 'TXE', 'city_id' => 38, 'timezone' => 7],
            ['name' => 'Bandar Udara Rokot', 'IATA' => 'RKI', 'city_id' => 39, 'timezone' => 7],
            ['name' => 'Bandar Udara Sibisa', 'IATA' => 'SIW', 'city_id' => 40, 'timezone' => 7],
            ['name' => 'Bandar Udara Silampari', 'IATA' => 'PLM', 'city_id' => 41, 'timezone' => 7],
            ['name' => 'Bandar Udara Silangit', 'IATA' => 'DTB', 'city_id' => 42, 'timezone' => 7],
            ['name' => 'Bandar Udara Sultan Syarif Kasim II', 'IATA' => 'PKU', 'city_id' => 44, 'timezone' => 7],
            ['name' => 'Bandar Udara Teuku Cut Ali', 'IATA' => 'TPK', 'city_id' => 50, 'timezone' => 7],
            ['name' => 'Bandar Udara Tuanku Tambusai (Bandar Udara Pasir Pangaraian)', 'IATA' => 'PPR', 'city_id' => 51, 'timezone' => 7],
            ['name' => 'Bandar Udara Ahmad Yani', 'IATA' => 'SRG', 'city_id' => 58, 'timezone' => 7],
            ['name' => 'Bandar Udara Banyuwangi (Blimbingsari)', 'IATA' => 'BWX', 'city_id' => 59, 'timezone' => 7],
            ['name' => 'Bandar Udara Ngloram (Blora)', 'IATA' => 'CPF', 'city_id' => 60, 'timezone' => 7],
            ['name' => 'Bandar Udara Budiarto', 'IATA' => 'BTO', 'city_id' => 61, 'timezone' => 7],
            ['name' => 'Bandar Udara Cakrabhuwana (Penggung)', 'IATA' => 'CBN', 'city_id' => 62, 'timezone' => 7],
            ['name' => 'Bandar Udara Dewadaru', 'IATA' => 'KWB', 'city_id' => 63, 'timezone' => 7],
            ['name' => 'Bandar Udara Nusawiru', 'IATA' => 'CJN', 'city_id' => 64, 'timezone' => 7],
            ['name' => 'Bandar Udara Halim Perdanakusuma', 'IATA' => 'HLP', 'city_id' => 65, 'timezone' => 7],
            ['name' => 'Bandar Udara Harun Thohir', 'IATA' => 'BXW', 'city_id' => 66, 'timezone' => 7],
            ['name' => 'Bandar Udara Husein Sastranegara', 'IATA' => 'BDO', 'city_id' => 67, 'timezone' => 7],
            ['name' => 'Bandar Udara Internasional Adisumarmo', 'IATA' => 'SOC', 'city_id' => 68, 'timezone' => 7],
            ['name' => 'Bandar Udara Internasional Juanda', 'IATA' => 'SUB', 'city_id' => 69, 'timezone' => 7],
            ['name' => 'Bandar Udara Internasional Kertajati', 'IATA' => 'KJT', 'city_id' => 71, 'timezone' => 7],
            ['name' => 'Bandar Udara Internasional Soekarno–Hatta', 'IATA' => 'CGK', 'city_id' => 72, 'timezone' => 7],
            ['name' => 'Bandar Udara Jenderal Besar Sudirman (Wirasaba)', 'IATA' => 'PWL', 'city_id' => 74, 'timezone' => 7],
            ['name' => 'Bandar Udara Notohadinegoro', 'IATA' => 'JBB', 'city_id' => 76, 'timezone' => 7],
            ['name' => 'Bandar Udara Pondok Cabe', 'IATA' => 'PCB', 'city_id' => 77, 'timezone' => 7],
            ['name' => 'Bandar Udara Trunojoyo', 'IATA' => 'SUP', 'city_id' => 81, 'timezone' => 7],
            ['name' => 'Bandar Udara Tunggul Wulung', 'IATA' => 'CXP', 'city_id' => 82, 'timezone' => 7],
            ['name' => 'Bandar Udara Wiriadinata', 'IATA' => 'TSY', 'city_id' => 83, 'timezone' => 7],
            ['name' => 'Bandar Udara Bersujud (Batulicin)', 'IATA' => 'BTW', 'city_id' => 86, 'timezone' => 7],
            ['name' => 'Bandar Udara Beringin', 'IATA' => 'MTW', 'city_id' => 87, 'timezone' => 7],
            ['name' => 'Bandar Udara Datah Dawai', 'IATA' => 'DTD', 'city_id' => 89, 'timezone' => 7],
            ['name' => 'Bandar Udara Gusti Sjamsir Alam (Stagen)', 'IATA' => 'KBU', 'city_id' => 90, 'timezone' => 7],
            ['name' => 'Bandar Udara H. Asan', 'IATA' => 'SMQ', 'city_id' => 91, 'timezone' => 7],
            ['name' => 'Bandar Udara Haji Muhammad Sidik', 'IATA' => 'HMS', 'city_id' => 92, 'timezone' => 7],
            ['name' => 'Bandar Udara Internasional APT Pranoto (Samarinda Baru)', 'IATA' => 'AAP', 'city_id' => 93, 'timezone' => 7],
            ['name' => 'Bandar Udara Iskandar', 'IATA' => 'PKN', 'city_id' => 94, 'timezone' => 7],
            ['name' => 'Bandar Udara Juwata', 'IATA' => 'TRK', 'city_id' => 95, 'timezone' => 7],
            ['name' => 'Bandar Udara Kuala Kurun', 'IATA' => 'KLK', 'city_id' => 98, 'timezone' => 7],
            ['name' => 'Bandar Udara Kuala Pembuang', 'IATA' => 'KLP', 'city_id' => 99, 'timezone' => 7],
            ['name' => 'Bandar Udara LNG Badak Bontang', 'IATA' => 'BXT', 'city_id' => 100, 'timezone' => 7],
            ['name' => 'Bandar Udara Long Apung', 'IATA' => 'LPU', 'city_id' => 102, 'timezone' => 7],
            ['name' => 'Bandar Udara Maratua', 'IATA' => 'RTU', 'city_id' => 96, 'timezone' => 7],
            ['name' => 'Bandar Udara Melalan', 'IATA' => 'GHS', 'city_id' => 106, 'timezone' => 7],
            ['name' => 'Bandar Udara Nanga Pinoh', 'IATA' => 'NPO', 'city_id' => 110, 'timezone' => 7],
            ['name' => 'Bandar Udara Nunukan', 'IATA' => 'NNX', 'city_id' => 88, 'timezone' => 7],
            ['name' => 'Bandar Udara Pangsuma', 'IATA' => 'PSU', 'city_id' => 112, 'timezone' => 7],
            ['name' => 'Bandar Udara Paser (Tanah Grogot)', 'IATA' => 'TNB', 'city_id' => 113, 'timezone' => 7],
        ];
        // DB::table('airports')->insert($indonesia_airports);


                //
                // $indonesia_airports = [
                //     [
                //         'name' => 'Bandara Internasional Soekarno Hatta',
                //         'city_id' => 3671,
                //         'IATA' => 'CGK',
                //         "timezone" => 7,
                //     ],
                //     [
                //         'name' => 'Bandara Internasional Ngurah Rai',
                //         'city_id' => 5171,
                //         'IATA' => 'DPS',
                //         "timezone" => 8,
                //     ],
                //     [
                //         'name' => 'Bandara Internasional Kualanamu',
                //         'city_id' => 1275,
                //         'IATA' => 'KNO',
                //         "timezone" => 7,
                //     ],
                //     [
                //         'name' => 'Bandara Internasional Sultan Hasanuddin',
                //         'city_id' => 7371,
                //         'IATA' => 'UPG',
                //         "timezone" => 8,
                //     ],
                //     [
                //         'name' => 'Bandara Internasional Husein Sastranegara',
                //         'city_id' => 3273,
                //         'IATA' => 'BDO',
                //         "timezone" => 7,
                //     ],
                //     [
                //         'name' => 'Bandara Sultan Syarif Qasim II',
                //         'city_id' => 1471,
                //         'IATA' => 'PKU',
                //         "timezone" => 7,
                //     ],
        
        
                // ];
        
                DB::table('airports')->insert($indonesia_airports);
    }
}