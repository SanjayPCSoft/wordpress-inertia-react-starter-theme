<?php
use BoxyBird\Inertia\Inertia;

if (is_page('sample-page')) {
    return Inertia::render('Page', [
        'page' => get_post(),
    ]);
} else {
    ?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php wp_head(); ?>
    </head>

    <body>
        <?php get_header(); ?>
        <?php the_content(); ?>
        <?php get_footer(); ?>
    </body>

    </html>
    <?php
}



