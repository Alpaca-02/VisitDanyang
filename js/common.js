$(function(){
    // 섹션스크롤

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