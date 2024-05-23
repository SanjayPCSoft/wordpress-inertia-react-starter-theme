<?php

use BoxyBird\Inertia\Inertia;

if (is_single()) {
    return Inertia::render('Single', [
        'post' => get_post(),
    ]);
}