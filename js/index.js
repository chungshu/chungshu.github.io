/**
 * Created by lenovo on 2017/5/2.
 */

$(function(){
//    $('.nav a').bind('click',function(event){
//        var $anchor = $(this);
//        $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top-52}, 600);
//        event.preventDefault();
//    });
//    var children = $(".page-list").children("div");
//    $(children).css('height',$(window).height());
//    for(var i = 0; i < children.length; i++ ){
//        if(children[i].className != "block-nav"){
//
//            console.log($(children[i]).css('height'));
//        }
//
//    }

});


//$(function(){
//    $('#dowebok').fullpage({
//        anchors: ['introContent', 'itemSkill', 'itemWorking', 'itemProject','itemMail'],
//        menu: '#menu'
//    });
//
//});



$(function(){
    $('#dowebok').fullpage({
        anchors: ['introContent', 'itemSkill', 'itemWorking', 'itemProject','itemMail'],
        menu: '#menu'
    });
    $(window).resize(function(){
        autoScrolling();
    });

    function autoScrolling(){
        var $ww = $(window).width();
        if($ww < 1024){
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }

    autoScrolling();
});
