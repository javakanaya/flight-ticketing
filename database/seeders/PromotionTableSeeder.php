<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PromotionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
            
        $promotions = [
            ['title' => 'Jakarta', 
            'image_url' => 'https://images.unsplash.com/photo-1617687611017-48db8d42fd8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amFrYXJ0YXxlbnwwfHwwfHx8MA%3D%3D', 
            'caption' => '100+ Flight\'s Deals'],

            ['title' => 'Surabaya', 
            'image_url' => 'https://images.unsplash.com/photo-1586518807840-32d52d101cb4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
            'caption' => '100+ Flight\'s Deals'],

            ['title' => 'Medan', 
            'image_url' => 'https://images.unsplash.com/photo-1642651094033-12d999a4fbe7?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
            'caption' => '100+ Flight\'s Deals'],

            ['title' => 'Bali', 
            'image_url' => 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
            'caption' => '100+ Flight\'s Deals'],

            ['title' => 'Semarang', 
            'image_url' => 'https://images.unsplash.com/photo-1568226127485-5ecea46cb483?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
            'caption' => '100+ Flight\'s Deals'],

            ['title' => 'Surakarta', 
            'image_url' => 'https://images.unsplash.com/photo-1618652109044-22ec124cc4ba?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
            'caption' => '100+ Flight\'s Deals'],
            ];

            DB::table('promotion')->insert($promotions);
    }
}
