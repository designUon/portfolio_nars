$(function () {

        ///////////// 섹션01 - #new_img 호버 /////////////
        $('#new_img').hover(function () {

            $('#new_line01').css({
                opacity: 1,
            });
    
            $('#new_line02').css({
                opacity: 1,
            });
    
            $('#new_line03').css({
                opacity: 1,
            });
    
        }, function () {
    
            $('#new_line01').css({
                opacity: 0,
            });
    
            $('#new_line02').css({
                opacity: 0,
            });
    
            $('#new_line03').css({
                opacity: 0,
            });
    
        });


            ///////////// 섹션01 - #best_img 호버 /////////////
            $('#best_img').hover(function () {

                $('#best_line01').css({
                    opacity: 1,
                });
        
                $('#best_line02').css({
                    opacity: 1,
                });
        
                $('#best_line03').css({
                    opacity: 1,
                });
        
            }, function () {
        
                $('#best_line01').css({
                    opacity: 0,
                });
        
                $('#best_line02').css({
                    opacity: 0,
                });
        
                $('#best_line03').css({
                    opacity: 0,
                });
        
            });
    

    ///////////// 섹션01 - #man_img 호버 /////////////
    $('#man_img').hover(function () {

        $('#man_line01').css({
            opacity: 1,
        });

        $('#man_line02').css({
            opacity: 1,
        });

        $('#man_line03').css({
            opacity: 1,
        });

    }, function () {

        $('#man_line01').css({
            opacity: 0,
        });

        $('#man_line02').css({
            opacity: 0,
        });

        $('#man_line03').css({
            opacity: 0,
        });

    });

    ///////////// 섹션02 - 제품 카테고리 박스 호버 /////////////

    // let productBox = $(".productBox"),
    // productBlack = $(".product_blackbox"),
    // productText = $(".product_title");

    // 선택자오류
    // $('.productBox').hover(function () {

    $('.product_box').hover(function () {

        $(this).find('.product_blackbox').css({
            // display: 'none',
            opacity: '0',
        });

        $(this).find('.product_title').css({
            // display: 'none',
            opacity: '0',
        });

    }, function () {

        $(this).find('.product_blackbox').css({
            // display: 'block',
            opacity:'1',
        });

        $(this).find('.product_title').css({
            // display: 'block',
            opacity:'1',
        });

    });


    ///////////// 섹션04 - 자동슬라이드 /////////////

    //2초마다 next버튼이 클릭되도록

    function sec4Func() {

        sec4AutoSlide = setInterval(function () {
            $('.swiper-button-next').trigger('click');
        }, 1500);

    }

    sec4Func();

    //마우스를 올리면 멈추고 다시 올리면 실행

    $('.sec04_btn').hover(function () {
        clearInterval(sec4AutoSlide);
    }, function () {
        sec4Func();
    });

    $('.swiper-wrapper').hover(function () {
        clearInterval(sec4AutoSlide);
    }, function () {
        sec4Func();
    });



});