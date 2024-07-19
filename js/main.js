$('#nav-btn').on('click', function () {
    if ($('#nav-btn').attr('style') == undefined) {
        $('#nav-btn').css('margin-left', '300px');
        $('.main').css('margin-left', '300px');
        $('nav').css('transform', 'translateX(0px)');
    } else {
        $('#nav-btn').removeAttr('style');
        $('.main').removeAttr('style');
        $('nav').removeAttr('style');
    }
})


$('nav .fa-xmark').on('click', function () {
    $('#nav-btn').removeAttr('style');
    $('.main').removeAttr('style');
    $('nav').removeAttr('style');
})

$('.details h4').on('click', function (e) {
    let singerId = $(e.target).attr('for');

    if ($(`#${singerId}`).attr('style') == 'display: none;') {
        $('.details p').slideUp(300);
        $(`#${singerId}`).slideDown(300);
    } else {
        $(`#${singerId}`).slideUp(300);
    }
})
//happy new year
let eventDate = new Date('Dec 31 2023 23:59:59');
let x = setInterval(() => {
    let nowDate = new Date();
    let deff = eventDate - nowDate;

    let days = Math.floor(deff / (1000 * 60 * 60 * 24));
    let remain = deff - days * (1000 * 60 * 60 * 24);
    let hours = Math.floor(remain / (1000 * 60 * 60));
    remain -= hours * (1000 * 60 * 60);
    let min = Math.floor(remain / (1000 * 60));
    remain -= min * (1000 * 60);
    let sec = Math.floor(remain / 1000);



    $('.duration .days span').text(days);
    $('.duration .hours span').text(hours);
    $('.duration .minutes span').text(min);
    $('.duration .seconds span').text(sec);

    if (deff < 0) {
        clearInterval(x);
    }
}, 1000);

$('textarea').on('keyup',function(){
    let remain = 100 - $('textarea').val().length;
    $('.contact h5 span').text(remain)
})