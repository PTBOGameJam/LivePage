/*global $, jQuery, document, window, navigator*/
/* ==========================================================================
Document Ready Function
========================================================================== */
jQuery(document).ready(function () {

    'use strict';

    var WindowsHeight, HomeSectionContainer, CalcMarginTop, formInput, sformInput, onMobile;

    /* ==========================================================================
    Home Section Height
    ========================================================================== */
    WindowsHeight = $(window).height();
    HomeSectionContainer = $('#home-section-container').height();
    CalcMarginTop = (WindowsHeight - HomeSectionContainer) / 2;

    $('#home-section').css({height: WindowsHeight});
    $('#home-section-container').css({top: CalcMarginTop });


    /* ==========================================================================
    ToolTip
    ========================================================================== */
    $("a[data-rel=tooltip]").tooltip({container: 'body'});


    /* ==========================================================================
    on mobile?
    ========================================================================== */
	onMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) { onMobile = true; }

	if (onMobile === true) {
        $("a[data-rel=tooltip]").tooltip('destroy');
        jQuery('#team-section').css("background-attachment", "scroll");
        $('#home-section').css({background: 'url(/content/images/background.jpg)'});
            $('#home-section').css({backgroundSize: 'cover'});
            $('#home-section').css({backgroundPosition: 'center center'});
    } else {
        /* ==========================================================================
        okvideo
        ========================================================================== */
        $(function () {
            $.okvideo({
                source: 'https://vimeo.com/202101870/72c580a349',
                volume: 0,
                loop: true,
                hd: true,
                autoplay: true,
                adproof: true,
                annotations: false
            });
        });
    }


    /* ==========================================================================
    Parallax
    ========================================================================== */
    jQuery('#team-section').parallax("50%", -0.5);


}); // JavaScript Document




/* ==========================================================================
Window Resize
========================================================================== */
$(window).resize(function () {

    'use strict';

    var WindowsHeight, HomeSectionContainer, CalcMarginTop;

    /* ==========================================================================
    Home Section Height
    ========================================================================== */
    WindowsHeight = $(window).height();
    HomeSectionContainer = $('#home-section-container').height();
    CalcMarginTop = (WindowsHeight - HomeSectionContainer) / 2;

    $('#home-section').css({height: WindowsHeight});
    $('#home-section-container').css({top: CalcMarginTop });

});




/* ==========================================================================
Window Load
========================================================================== */
jQuery(window).load(function () {

    'use strict';

    /* ==============================================
    Loader
    =============================================== */
    var LoaderDelay = 350,
        LoaderFadeOutTime = 800;

    function hideLoader() {
        var loadingLoader = $('#Loader');
        loadingLoader.fadeOut();
    }
    hideLoader();

    /* ==========================================================================
    Funny Text
    ========================================================================== */
    $('#welcome-msg').funnyText({
        speed: 500,
        fontSize: '2em',
        color: '#ffffff',
        activeColor: '#00ccff',
        borderColor: 'none'
    });

    $('#services-section-title').funnyText({
        speed: 500,
        fontSize: '1.5em',
        color: '#2c3e50',
        activeColor: '#00ccff',
        borderColor: 'none'
    });

    $('#team-section-title').funnyText({
        speed: 500,
        fontSize: '1.5em',
        color: '#ffffff',
        activeColor: '#2c3e50',
        borderColor: 'none'
    });
});