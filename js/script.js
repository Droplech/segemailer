
$(".description_item").click(function(){
    $(".description_item").removeClass('active')
    $(".description_item").find(".item_subtitle").slideUp()
    $(this).addClass('active')
    $(this).find(".item_subtitle").slideDown()
})






$('.select').on('click', '.select__head', function () {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).next().fadeOut();
    } else {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
        $(this).addClass('open');
        $(this).next().fadeIn();
    }
});

$('.select').on('click', '.select__item', function () {
    $('.select__head').removeClass('open');
    $(this).parent().fadeOut();
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
});

$(document).click(function (e) {
    if (!$(e.target).closest('.select').length) {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
    }
});


$(".example").PicCarousel("init");

$('.slider_customers').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrow: false
});




$('.mob_menu_button').click(function(){
    $('.mob_menu_button').addClass('active')
    $('.mob_menu_content').slideDown()
    
})
$('.close_btn, .mob_menu_content .content ul li a, .mob_menu_content .content .button .buttons a').click(function(){
    $('.mob_menu_button').removeClass('active')
    $('.mob_menu_content').slideUp()
    
})