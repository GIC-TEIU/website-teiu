<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pages extends Model
{
    protected $table = 'pages';

    protected $fillable = [
        'name',
        'customization_component_id',
        'path',
    ];

    public $timestamps = false; 

    public function components()
    {
        return $this->belongsToMany(
            Component::class,
            'pages_components',
            'page_id',
            'component_id'
        );
    }

    public function customizationComponent()
    {
        return $this->belongsTo(Component::class, 'customization_component_id');
    }
}