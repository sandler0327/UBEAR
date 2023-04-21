



// scrollreveal
window.sr = ScrollReveal({ reset: true });
sr.reveal('.kv_card1', {
    delay: 400,
    scale: 1,
    easing: 'ease-in-out'
});
sr.reveal('.kv_card2', {
    delay: 500,
    scale: 1,
    easing: 'ease-in-out'
});

sr.reveal('.kv_card3', {
    delay: 600,
    scale: 1,
    easing: 'ease-in-out'
});

sr.reveal('.text1', {
    delay: 300,
    scale: 1,
    easing: 'ease-in-out'
});


sr.reveal('.text2', {
    delay: 300,
    scale: 1,
    easing: 'ease-in-out'
});


sr.reveal('.text3', {
    delay: 300,
    scale: 1,
    easing: 'ease-in-out'
});



$('.noticeTitle').on('click', function (e) {
    $(this).next('div.noticeContent').slideToggle();
    $(this).toggleClass('active');
    e.preventDefault();
});

AOS.init();

function fixed_block() {
    $(".fixed_block").css({'display':'block'});
    if($(window).width() < 500) {
        $(".fixed_block").css({'display':'flex'});
        $(window).scroll(function(){
            //最後一頁scrollTop=body-window，50是預留空間
            last=$("body").           height()-$(window).height()-60;
            $(".fixed_block").css({'display':'block'});
            if($(window).scrollTop()>=last){  
                $(".fixed_block").hide()
            }else {
                $(".fixed_block").css({'display':'flex'});
            }
        });
    }else {
        $(".fixed_block").css({'display':'block'});
        $(window).scroll(function(){
            $(".fixed_block").css({'display':'block'});
        });
    }
}
fixed_block()
$(window).resize(function () {
    fixed_block();
});

document.oncontextmenu = function(){
    window.event.returnValue=false;
}

//for ie
function isIE(){
    if (window.navigator.userAgent.indexOf("MSIE")>=1){
        $('.wrap .indexHow .indexHowBlock .cardBlock .card .front').css('display','none');
        $('.wrap .indexHow .indexHowBlock .cardBlock .card .back').css('transform','rotateY(0deg)');
    }else if (!!window.ActiveXObject || "ActiveXObject" in window){
        $('.wrap .indexHow .indexHowBlock .cardBlock .card .front').css('display','none');
        $('.wrap .indexHow .indexHowBlock .cardBlock .card .back').css('transform','rotateY(0deg)');
    }else{
        //card flip
        $('.card').on('click', function () {
            $(this).toggleClass('flipped');
            $('.front').removeClass('animate__animated');
        });
    };
}
isIE();
