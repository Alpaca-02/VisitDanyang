$(function(){
    //// 섹션스크롤 영역
    // 브라우저 기본 스크롤 제한
    window.addEventListener("wheel", function(e){
        e.preventDefault();
    },{passive : false});


var mHtml = $("html");
var page = 1;

mHtml.animate({scrollTop : 0},10);


    $(window).on("wheel", function(e) {
        if(mHtml.is(":animated")) return;
        if(e.originalEvent.deltaY > 0) {
            if(page == 4) return;
            page++;
        } else if(e.originalEvent.deltaY < 0) {
            if(page == 1) return;
            page--;
        }
        var posTop =(page-1) * $(window).height();
        mHtml.animate({scrollTop : posTop});
    })

    // 스크롤 위치 감지
    window.addEventListener('scroll',()=> {
        var scroll = document.documentElement.scrollTop;
        console.log(document.documentElement.scrollTop);
        if(scroll > 10){
            $('nav').css('background-color' , 'rgba(255, 255, 255, 0.7)');
            $('nav a').css('color' , '#111');
        }else {
            $('nav').css('background-color', '');
            $('nav a').css('color' , '#fff');
        }
    });

    










    var b_index = 0;
})