<?php
use BoxyBird\Inertia\Inertia;

if (is_front_page()) {
    return Inertia::render('Index', [
        'posts' => get_posts(),
        'page' => get_post(),
    ]);
}