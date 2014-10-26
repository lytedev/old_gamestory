<?php

function customElixir($file)
{
    static $manifest = null;

    if (is_null($manifest))
    {
        $manifest = json_decode(file_get_contents(public_path().'/build/rev-manifest.json'), true);
    }

    if (isset($manifest[$file]))
    {
        if (App::environment('production')) 
        {
            return asset('build/'.$manifest[$file]);
        }
        else 
        {
            return asset($file);
        }
    }

    throw new InvalidArgumentException("File {$file} not defined in asset manifest.");
}

?>