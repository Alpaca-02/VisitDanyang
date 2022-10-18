$(function(){
    // 브라우저 시작시 배너 텍스트 애니메이션 동작
    $('.banner').eq(0).find('.b_ani').addClass('b_vis');
    $('.banner').eq(0).find('.sub_t').addClass('b_vis_sub');

    // 브라우저 시작시 최상단으로 이동
    // window.scrollTo(0, 0);


    function nav_colored(){
        $('nav').css('background-color','rgba(255, 255, 255, 0.8)');
        $('nav a').css('color','#111')
        .css('text-shadow','none');
        $('#logo>a').css('color','#86c036')
        .css('text-shadow','none');
        
    }

    function nav_nonColor(){
        $('nav').css('background-color','')
        $('nav a').css('color','#fff')
        .css('text-shadow','3px 3px 3px #222');
        $('#logo>a').css('color','#fff')
        .css('text-shadow','2px 2px 2px #222');
    }


    //상단메뉴바
    $('.main-menu').mouseover(function(){
        nav_colored();
        $('.main-menu>li').css('padding','0 50px');
        $('nav').css('height','20vh');
        $('.sub-menu').stop().slideDown(300,'linear');
        $('nav a').css('color','#111');
    })
    $('nav').mouseout(function(){
        nav_nonColor();
        $('nav').css('height','100%');
        $('.sub-menu').stop().slideUp(300,'linear',function(){
            $('.main-menu>li').css('padding','0 40px');
        });
        $('nav a').css('color','#fff');
    })






    //// 섹션스크롤 영역

    // 브라우저 기본 스크롤 제한
    window.addEventListener("wheel", function(e){
        e.preventDefault();
    },{passive : false});


let mHtml = $("html");
let page = 1;

mHtml.animate({scrollTop : 0},10);


    $(window).on("wheel",(e) => {
        if(mHtml.is(":animated")) return;
        if(e.originalEvent.deltaY > 0) {
            if(page == 4) return;
            page++;
        } else if(e.originalEvent.deltaY < 0) {
            if(page == 1) return;
            page--;
        }
        let posTop =(page-1) * $(window).height();
        mHtml.animate({scrollTop : posTop});
    })

    // 스크롤 위치 감지
    window.addEventListener('scroll',()=> {
        let scroll = document.documentElement.scrollTop;
        console.log(document.documentElement.scrollTop);
        if(scroll > 10){
            nav_colored();
        }else {
            nav_nonColor();
        }
    });

    
    // 배너 영역
    // 이미지 슬라이더 함수
    function moveSlider(index){
        //현재 창 크기를 저장
        let window_W = $( window ).width();
        $('.banner_img').animate({
            left: -(window_W*index)
        },500,function(){
            $('.banner').eq(index).find('.b_ani').addClass('b_vis');
            $('.banner').eq(index).find('.sub_t').addClass('b_vis_sub');
        });
        $('.b_ani').removeClass('b_vis');
        $('.sub_t').removeClass('b_vis_sub');


    }


    // 배너 버튼 동작

    $('.c_btn').click(function(){
        index = $(this).index();
        moveSlider(index);
        $('.c_btn').html('<i class="fa-regular fa-circle"></i>');
        $(this).html('<i class="fa-solid fa-circle"></i>');
    });

    // 화면크기 변화 감지
    $( window ).resize(function() {
        // $('.c_btn').eq(0).trigger('click');
    });







    var b_index = 0;
})