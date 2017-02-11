/* ==========================================================================
CountDown Timer
========================================================================== */
function GoLive()
{
    window.location = "http://live.ptbogamejam.com";
}
$('#countdown_dashboard').countDown({
    targetDate: {
        // 'day': 17,
        // 'month': 2,
        // 'year': 2017,
        // 'hour': 21,
        // 'min': 0,
        // 'sec': 0
        'day': 17,
        'month': 2,
        'year': 2017,
        'hour': 21,
        'min': 0,
        'sec': 0
    },
    omitWeeks: true,
    onComplete: GoLive
});

