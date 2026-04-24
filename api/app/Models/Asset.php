<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Asset extends Model
{
    protected $table = 'assets';
    public $timestamps = false;
    protected $fillable = [
        'component_id',
        'key',
        'path',
        'format',
        'recommended_size',
    ];

    public function component()
    {
        return $this->belongsTo(Component::class, 'component_id');
    }
}