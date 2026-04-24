<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Text extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'component_id',
        'content',
        'key',
        'min_characters',
        'max_characters',
    ];

    public function component()
    {
        return $this->belongsTo(Component::class, 'component_id');
    }
}