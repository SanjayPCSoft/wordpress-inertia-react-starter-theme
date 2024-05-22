<?php

use BoxyBird\Inertia\Inertia;

if (is_single()) {
    return Inertia::render('Single', [
        'post' => get_post(),
    ]);
}

if (is_page()) {
    return Inertia::render('Page', [
        'page' => get_post(),
    ]);
}