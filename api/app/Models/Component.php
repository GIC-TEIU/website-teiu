<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Asset;
use App\Models\Text;

class Component extends Model
{
    protected $table = 'components';
    protected $guarded = [];
 
    public $timestamps = false;

    public function pages()
    {
        return $this->belongsToMany(
            Page::class,
            'pages_components',
            'component_id',
            'page_id'
        );
    }

    public function updates()
    {
        return $this->hasMany(Update::class, 'updated_component_id');
    }

    public function texts()
    {
        return $this->hasMany(Text::class, 'component_id');
    }

    public function assets()
    {
        return $this->hasMany(Asset::class, 'component_id');
    }
}