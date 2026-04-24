<?php

namespace App\Http\Controllers;
use App\Models\Pages;

use Illuminate\Http\Request;

class pageController extends Controller
{
    public function index($path)
    {
        $page = Pages::with([
            'components' => function ($query) {
                $query->where('components.status', 'in_production')
                      ->with(['assets', 'texts']);
            },
            'customizationComponent'
        ])->where('path', $path)->first();
    
        if (!$page) {
            return response()->json([
                'message' => 'Página não encontrada'
            ], 404);
        }
    
        $componentsByKey = $page->components
            ->keyBy('key')
            ->map(function ($component) {
    
                $assetsByKey = $component->assets
                    ->keyBy('key')
                    ->map(function ($asset) {
                        return [
                            'id' => $asset->id,
                            'url' => $asset->path,
                        ];
                    });
    
                $textsByKey = $component->texts
                    ->keyBy('key')
                    ->map(function ($text) {
                        return [
                            'id' => $text->id,
                            'content' => $text->content,
                        ];
                    });
    
                return [
                    'id' => $component->id,
                    'key' => $component->key,
                    'texts' => $textsByKey,
                    'assets' => $assetsByKey,
                ];
            });
    
        return response()->json([
            'id' => $page->id,
            'name' => $page->name,
            'path' => $page->path,
            'components' => $componentsByKey,
            'customization_component' => $page->customizationComponent
        ]);
    }
}
