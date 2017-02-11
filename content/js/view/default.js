jQuery(document).ready(function () {
     /* ==========================================================================
    CountDown Timer
    ========================================================================== */
    $('#countdown_dashboard').countDown({
        targetDate: {
            'day': 19,
            'month': 2,
            'year': 2017,
            'hour': 18,
            'min': 0,
            'sec': 0
        },
        omitWeeks: true
    });
});