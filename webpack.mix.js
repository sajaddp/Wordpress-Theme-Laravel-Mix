let mix = require('laravel-mix');

let distDir = './dist';
let sassOption = {
    processCssUrls: false
};
mix.scripts([
    // './assets/vendor/jquery/dist/jquery.min.js',
    // './assets/vendor/popper.js/dist/umd/popper.min.js',
    // './assets/vendor/bootstrap/bootstrap.min.js',
    './assets/js/custom.js',
], `${distDir}/js/all.js`)
    .autoload({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    })
    .sourceMaps();

mix.sass('./assets/sass/style.scss', `${distDir}/css/all.css`).options(sassOption).sourceMaps();

mix.copyDirectory('./assets/images', `${distDir}/images`)
    .copyDirectory('./assets/fonts', `${distDir}/fonts`);
