/**
 * Created by lenovo on 2017/5/2.
 */

$(function(){

    $('.nav a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top-52}, 600);
        event.preventDefault();
    });
    $('.collapse').bind('click',function(event){
        alert('a');
        $('.nav').addClass("collapse-active");
    });
});
//平滑滚动导航

