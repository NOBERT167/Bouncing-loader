/* Preloader */
document.window('load', function() {
    let preloaderFadeOutTime = 500;
    function hidePreloader() {
        let preloader = document.getElementById('spinner-wrapper');
        setTimeout(function() {
            preloader.fadeOut(preloaderFadeOutTime);
        }, 500);
    }
    hidePreloader();
});
