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
        $('.nav').addClass("collapse-active");
    });
    var children = $(".page-list").children("div");

    for(var i = 0; i < children.length; i++ ){
        if(children[i].className != "block-nav"){
            $(children[i]).css('height',$(window).height());
            console.log($(children[i]).css('height'));
        }

    }

});
//平滑滚动导航



