$(function(){
    $('.link1').hover(function() {
        $('.link1 i').removeClass('icon-g2').addClass('icon-g1');
        $('.link-text1').delay(250).animate({"top": "10px", "opacity": "1", "font-size": "14px"}, 100);
    });
    $('.link1').mouseout(function() {
        $('.link1 i').removeClass('icon-g1').addClass('icon-g2');
        $('.link-text1').animate({"top": "0px", "opacity": "0", "font-size": "10px"}, 100).delay(250);
    });
    
    $('.link2').hover(function() {
        $('.link2 i').removeClass('icon-g2').addClass('icon-g1');
        $('.link-text2').delay(250).animate({"top": "10px", "opacity": "1", "font-size": "14px"}, 100);
    });
    $('.link2').mouseout(function() {
        $('.link2 i').removeClass('icon-g1').addClass('icon-g2');
        $('.link-text2').animate({"top": "0px", "opacity": "0", "font-size": "10px"}, 100).delay(250);
    });

    $('.link3').hover(function() {
        $('.link3 i').removeClass('icon-g2').addClass('icon-g1');
        $('.link-text3').delay(250).animate({"top": "10px", "opacity": "1", "font-size": "14px"}, 100);
    });
    $('.link3').mouseout(function() {
        $('.link3 i').removeClass('icon-g1').addClass('icon-g2');
        $('.link-text3').animate({"top": "0px", "opacity": "0", "font-size": "10px"}, 100).delay(250);
    });

    $('.link4').hover(function() {
        $('.link4 i').removeClass('icon-g2').addClass('icon-g1');
        $('.link-text4').delay(250).animate({"top": "10px", "opacity": "1", "font-size": "14px"}, 100);
    });
    $('.link4').mouseout(function() {
        $('.link4 i').removeClass('icon-g1').addClass('icon-g2');
        $('.link-text4').animate({"top": "0px", "opacity": "0", "font-size": "10px"}, 100).delay(250);
    });

    $('.link5').hover(function() {
        $('.link5 i').removeClass('icon-g2').addClass('icon-g1');
        $('.link-text5').delay(250).animate({"top": "10px", "opacity": "1", "font-size": "14px"}, 100);
    });
    $('.link5').mouseout(function() {
        $('.link5 i').removeClass('icon-g1').addClass('icon-g2');
        $('.link-text5').animate({"top": "0px", "opacity": "0", "font-size": "10px"}, 100).delay(250);
    });
})