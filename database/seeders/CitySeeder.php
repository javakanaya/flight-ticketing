<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
     
    public function run(): void
    {
        

 $indonesia_cities = [
    ['id' => 1, 'name' => 'Padang Sidempuan', 'province_id' => 12],
    ['id' => 2, 'name' => 'Aceh Tenggara', 'province_id' => 11],
    ['id' => 4, 'name' => 'Bengkalis', 'province_id' => 14],
    ['id' => 5, 'name' => 'Gunung Sitoli', 'province_id' => 12],
    ['id' => 6, 'name' => 'Bintan', 'province_id' => 21],
    ['id' => 7, 'name' => 'Bireuen', 'province_id' => 11],
    ['id' => 8, 'name' => 'Gayo Lues', 'province_id' => 11],
    ['id' => 9, 'name' => 'Suka Makmue', 'province_id' => 11],
    ['id' => 10, 'name' => 'Lingga', 'province_id' => 21],
    ['id' => 11, 'name' => 'Danau Toba', 'province_id' => 12],
    ['id' => 12, 'name' => 'Pangkal Pinang', 'province_id' => 19],
    ['id' => 13, 'name' => 'Kerinci', 'province_id' => 15],
    ['id' => 14, 'name' => 'Pulau Enggano, Bengkulu Utara', 'province_id' => 17],
    ['id' => 15, 'name' => 'Bengkulu', 'province_id' => 17],
    ['id' => 16, 'name' => 'Sibolga', 'province_id' => 12],
    ['id' => 17, 'name' => 'Tanjung Pandan', 'province_id' => 19],
    ['id' => 18, 'name' => 'Batam', 'province_id' => 21],
    ['id' => 19, 'name' => 'Medan', 'province_id' => 12],
    ['id' => 20, 'name' => 'Padang Pariaman', 'province_id' => 13],
    ['id' => 21, 'name' => 'Banda Aceh', 'province_id' => 11],
    ['id' => 22, 'name' => 'Kabupaten Indragiri Hulu', 'province_id' => 14],
    ['id' => 23, 'name' => 'Blangpidie, Aceh Barat Daya', 'province_id' => 11],
    ['id' => 24, 'name' => 'Sinabang', 'province_id' => 11],
    ['id' => 25, 'name' => 'Tanahmasa, Nias Selatan', 'province_id' => 12],
    ['id' => 26, 'name' => 'Letung, Jemaja, Kepulauan Anambas', 'province_id' => 14],
    ['id' => 27, 'name' => 'Sabang', 'province_id' => 11],
    ['id' => 28, 'name' => 'Muara Batu, Aceh Utara', 'province_id' => 11],
    ['id' => 29, 'name' => 'Bungo', 'province_id' => 15],
    ['id' => 30, 'name' => 'Mukomuko', 'province_id' => 17],
    ['id' => 32, 'name' => 'Dumai', 'province_id' => 14],
    ['id' => 33, 'name' => 'Simpang Ampek, Pasaman Barat', 'province_id' => 13],
    ['id' => 34, 'name' => 'Bandar Lampung', 'province_id' => 18],
    ['id' => 35, 'name' => 'Karimun', 'province_id' => 21],
    ['id' => 36, 'name' => 'Tanjung Pinang', 'province_id' => 21],
    ['id' => 37, 'name' => 'Ranai, Kepulauan Natuna', 'province_id' => 21],
    ['id' => 38, 'name' => 'Takengon', 'province_id' => 11],
    ['id' => 39, 'name' => 'Sipora', 'province_id' => 13],
    ['id' => 40, 'name' => 'Toba', 'province_id' => 12],
    ['id' => 41, 'name' => 'Lubuklinggau', 'province_id' => 16],
    ['id' => 42, 'name' => 'Siborongborong', 'province_id' => 12],
    ['id' => 43, 'name' => 'Palembang', 'province_id' => 16],
    ['id' => 44, 'name' => 'Pekanbaru', 'province_id' => 14],
    ['id' => 45, 'name' => 'Aceh Singkil', 'province_id' => 11],
    ['id' => 46, 'name' => 'Bintan', 'province_id' => 21],
    ['id' => 47, 'name' => 'Lampung Barat', 'province_id' => 18],
    ['id' => 49, 'name' => 'Kabupaten Indragiri Hilir', 'province_id' => 14],
    ['id' => 50, 'name' => 'Aceh Barat Daya', 'province_id' => 11],
    ['id' => 51, 'name' => 'Rokan Hilir', 'province_id' => 14],
    ['id' => 53, 'name' => 'Astra Ksetra, Tulang Bawang', 'province_id' => 18],
    ['id' => 55, 'name' => 'Padang', 'province_id' => 13],
    ['id' => 58, 'name' => 'Semarang', 'province_id' => 33],
    ['id' => 59, 'name' => 'Banyuwangi', 'province_id' => 35],
    ['id' => 60, 'name' => 'Blora', 'province_id' => 33],
    ['id' => 61, 'name' => 'Kabupaten Tangerang', 'province_id' => 36],
    ['id' => 62, 'name' => 'Cirebon', 'province_id' => 32],
    ['id' => 63, 'name' => 'Karimunjawa, Jepara', 'province_id' => 33],
    ['id' => 64, 'name' => 'Pangandaran', 'province_id' => 32],
    ['id' => 65, 'name' => 'Jakarta', 'province_id' => 31],
    ['id' => 66, 'name' => 'Bawean, Gresik', 'province_id' => 35],
    ['id' => 67, 'name' => 'Bandung', 'province_id' => 32],
    ['id' => 68, 'name' => 'Boyolali', 'province_id' => 33],
    ['id' => 69, 'name' => 'Sidoarjo', 'province_id' => 35],
    ['id' => 70, 'name' => 'Karawang', 'province_id' => 32],
    ['id' => 71, 'name' => 'Majalengka', 'province_id' => 32],
    ['id' => 72, 'name' => 'Tangerang', 'province_id' => 36],
    ['id' => 74, 'name' => 'Purbalingga', 'province_id' => 33],
    ['id' => 76, 'name' => 'Jember', 'province_id' => 35],
    ['id' => 77, 'name' => 'Tangerang Selatan', 'province_id' => 36],
    ['id' => 79, 'name' => 'Pulau Kangean, Sumenep', 'province_id' => 35],
    ['id' => 80, 'name' => 'Pandeglang', 'province_id' => 36],
    ['id' => 81, 'name' => 'Sumenep', 'province_id' => 35],
    ['id' => 82, 'name' => 'Cilacap', 'province_id' => 33],
    ['id' => 83, 'name' => 'Tasikmalaya', 'province_id' => 32],
    ['id' => 86, 'name' => 'Tanah Bumbu', 'province_id' => 63],
    ['id' => 87, 'name' => 'Barito Utara', 'province_id' => 62],
    ['id' => 88, 'name' => 'Nunukan', 'province_id' => 65],
    ['id' => 89, 'name' => 'Mahakam Ulu', 'province_id' => 64],
    ['id' => 90, 'name' => 'Kotabaru', 'province_id' => 63],
    ['id' => 91, 'name' => 'Sampit', 'province_id' => 62],
    ['id' => 92, 'name' => 'Trinsing', 'province_id' => 62],
    ['id' => 93, 'name' => 'Samarinda', 'province_id' => 64],
    ['id' => 94, 'name' => 'Pangkalanbun', 'province_id' => 62],
    ['id' => 95, 'name' => 'Tarakan', 'province_id' => 65],
    ['id' => 96, 'name' => 'Berau', 'province_id' => 64],
    ['id' => 97, 'name' => 'Kota Bangun, Kutai Kartanegara', 'province_id' => 64],
    ['id' => 98, 'name' => 'Kuala Kurun, Gunung Mas', 'province_id' => 62],
    ['id' => 99, 'name' => 'Kuala Pembuang Satu, Seruyan', 'province_id' => 62],
    ['id' => 100, 'name' => 'Bontang', 'province_id' => 64],
    ['id' => 101, 'name' => 'Long Apari, Mahakam Ulu', 'province_id' => 64],
    ['id' => 102, 'name' => 'Malinau', 'province_id' => 65],
    ['id' => 103, 'name' => 'Nunukan', 'province_id' => 65],
    ['id' => 104, 'name' => 'Nunukan', 'province_id' => 65],
    ['id' => 105, 'name' => 'Berau', 'province_id' => 64],
    ['id' => 106, 'name' => 'Melak, Kutai Barat', 'province_id' => 64],
    ['id' => 107, 'name' => 'Kutai Kartanegara', 'province_id' => 64],
    ['id' => 108, 'name' => 'Kutai Timur', 'province_id' => 64],
    ['id' => 110, 'name' => 'Melawi', 'province_id' => 61],
    ['id' => 111, 'name' => 'Nunukan', 'province_id' => 65],
    ['id' => 112, 'name' => 'Putussibau', 'province_id' => 61],
    ['id' => 113, 'name' => 'Paser', 'province_id' => 64],
    ['id' => 114, 'name' => 'Ketapang', 'province_id' => 61],
    ['id' => 115, 'name' => 'Malinau', 'province_id' => 65],
    ['id' => 116, 'name' => 'Barito Selatan', 'province_id' => 62],
    ['id' => 117, 'name' => 'Balikpapan', 'province_id' => 64],
    ['id' => 119, 'name' => 'Pontianak', 'province_id' => 61],
    ['id' => 121, 'name' => 'Banjarbaru', 'province_id' => 63],
    ['id' => 122, 'name' => 'Kutai Timur', 'province_id' => 64],
    ['id' => 123, 'name' => 'Tanjung Selor', 'province_id' => 65],
    ['id' => 124, 'name' => 'Sintang', 'province_id' => 61],
    ['id' => 126, 'name' => 'Palangkaraya', 'province_id' => 62],
    ['id' => 127, 'name' => 'Katingan', 'province_id' => 62],
    ['id' => 128, 'name' => 'Tabalong', 'province_id' => 63],
    ['id' => 129, 'name' => 'Long Bawan, Nunukan', 'province_id' => 65],
    ['id' => 130, 'name' => 'Masamba', 'province_id' => 73],
    ['id' => 131, 'name' => 'Bone', 'province_id' => 73],
    ['id' => 133, 'name' => 'Bau-Bau', 'province_id' => 74],
    ['id' => 134, 'name' => 'Bolaang Mongondow', 'province_id' => 71],
    ['id' => 135, 'name' => 'Luwu', 'province_id' => 73],
    ['id' => 136, 'name' => 'Kota Gorontalo', 'province_id' => 75],
    ['id' => 137, 'name' => 'Kepulauan Selayar', 'province_id' => 73],
    ['id' => 138, 'name' => 'Kendari', 'province_id' => 74],
    ['id' => 139, 'name' => 'Manado', 'province_id' => 71],
    ['id' => 140, 'name' => 'Maros', 'province_id' => 73],
    ['id' => 141, 'name' => 'Poso', 'province_id' => 72],
    ['id' => 145, 'name' => 'Melonguane', 'province_id' => 71],
    ['id' => 146, 'name' => 'Kepulauan Talaud', 'province_id' => 71],
    ['id' => 147, 'name' => 'Palu', 'province_id' => 72],
    ['id' => 148, 'name' => 'Pulau Sangihe', 'province_id' => 71],
    ['id' => 149, 'name' => 'Buol', 'province_id' => 72],
    ['id' => 151, 'name' => 'Tana Toraja', 'province_id' => 73],
    ['id' => 152, 'name' => 'Luwu Utara', 'province_id' => 73],
    ['id' => 153, 'name' => 'Kolaka', 'province_id' => 74],
    ['id' => 154, 'name' => 'Luwu Utara', 'province_id' => 73],
    ['id' => 155, 'name' => 'Muna', 'province_id' => 74],
    ['id' => 156, 'name' => 'Tolitoli', 'province_id' => 72],
    ['id' => 157, 'name' => 'Mamasa', 'province_id' => 76],
    ['id' => 158, 'name' => 'Banggai', 'province_id' => 72],
    ['id' => 159, 'name' => 'Kepulauan Sitaro', 'province_id' => 71],
    ['id' => 160, 'name' => 'Mamuju', 'province_id' => 76],
    ['id' => 161, 'name' => 'Tojo Una-Una', 'province_id' => 72],
    ['id' => 162, 'name' => 'Tana Toraja', 'province_id' => 73],
    ['id' => 163, 'name' => 'Atambua', 'province_id' => 53],
    ['id' => 165, 'name' => 'Rote Ndao', 'province_id' => 53],
    ['id' => 166, 'name' => 'Kupang', 'province_id' => 53],
    ['id' => 167, 'name' => 'Maumere', 'province_id' => 53],
    ['id' => 168, 'name' => 'Kabupaten Manggarai', 'province_id' => 53],
    ['id' => 169, 'name' => 'Flores Timur', 'province_id' => 53],
    ['id' => 170, 'name' => 'Ende', 'province_id' => 53],
    ['id' => 171, 'name' => 'Denpasar', 'province_id' => 51],
    ['id' => 172, 'name' => 'Mataram', 'province_id' => 52],
    ['id' => 173, 'name' => 'Labuan Bajo, Manggarai Barat', 'province_id' => 53],
    ['id' => 174, 'name' => 'Sumbawa', 'province_id' => 52],
    ['id' => 175, 'name' => 'Alor', 'province_id' => 53],
    ['id' => 178, 'name' => 'Waingapu, Sumba Timur', 'province_id' => 53],
    ['id' => 181, 'name' => 'Sumbawa', 'province_id' => 52],
    ['id' => 182, 'name' => 'Bima', 'province_id' => 52],
    ['id' => 183, 'name' => 'Ngada', 'province_id' => 53],
    ['id' => 184, 'name' => 'Waikabubak', 'province_id' => 53],
    ['id' => 185, 'name' => 'Pulau Sawu, Sabu Raijua', 'province_id' => 53],
    ['id' => 186, 'name' => 'Lembata', 'province_id' => 53],
    ['id' => 187, 'name' => 'Amahai', 'province_id' => 81],
    ['id' => 188, 'name' => 'Banda', 'province_id' => 81],
    ['id' => 190, 'name' => 'Buli', 'province_id' => 82],
    ['id' => 192, 'name' => 'Dobo', 'province_id' => 81],
    ['id' => 195, 'name' => 'Sanana, Kepulauan Sula', 'province_id' => 82],
    ['id' => 196, 'name' => 'Galela', 'province_id' => 82],
    ['id' => 197, 'name' => 'Pulau Gebe, Halmahera Tengah', 'province_id' => 82],
    ['id' => 198, 'name' => 'Pulau Kisar, Maluku Barat Daya', 'province_id' => 81],
    ['id' => 200, 'name' => 'Langgur', 'province_id' => 81],
    ['id' => 201, 'name' => 'Kao', 'province_id' => 81],
    ['id' => 202, 'name' => 'Saumlaki, Kep. Tanimbar', 'province_id' => 81],
    ['id' => 204, 'name' => 'Namlea', 'province_id' => 81],
    ['id' => 206, 'name' => 'Namrole', 'province_id' => 81],
    ['id' => 207, 'name' => 'Pulau Bacan, Halmahera Selatan', 'province_id' => 82],
    ['id' => 208, 'name' => 'Ambon', 'province_id' => 81],
    ['id' => 209, 'name' => 'Pulau Morotai', 'province_id' => 82],
    ['id' => 210, 'name' => 'Ternate', 'province_id' => 82],
    ['id' => 211, 'name' => 'Pulau Seram, Maluku Tengah', 'province_id' => 81],
    ['id' => 219, 'name' => 'Teluk Bintuni', 'province_id' => 91],
    ['id' => 227, 'name' => 'Mamberamo Raya', 'province_id' => 94],
    ['id' => 234, 'name' => 'Fakfak', 'province_id' => 91],
    ['id' => 236, 'name' => 'Biak, Biak Numfor', 'province_id' => 94],
    ['id' => 258, 'name' => 'Mimika Barat, Mimika', 'province_id' => 94],
    ['id' => 259, 'name' => 'Kornasoren, Biak Numfor', 'province_id' => 94],
    ['id' => 261, 'name' => 'Jayapura', 'province_id' => 94],
    ['id' => 266, 'name' => 'Sarmi', 'province_id' => 94],
    ['id' => 269, 'name' => 'Teluk Bintuni', 'province_id' => 91],
    ['id' => 270, 'name' => 'Mindiptana, Boven Digoel', 'province_id' => 94],
    ['id' => 289, 'name' => 'Manokwari Selatan', 'province_id' => 91],
    ['id' => 290, 'name' => 'Manokwari', 'province_id' => 91],
];

DB::table('cities')->insert($indonesia_cities);

    }
}
