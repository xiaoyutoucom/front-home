// (function(){
//     // .img的高度
//     $('.projects .img').css('height',$('.projects .img img').height()+'px')
//     // .text的高度
//     $('.projects .text').css('height',$('.projects .img').height()/2+'px')
// })();

var ww = $(window).width();
var wh = $(window).height();

function cmore(){
    var i = $('.projects .category .on').attr('data-href');
    $('.projects_top .more').attr('href',i);
}
function rmore(){
    var i = $('.resources .category .on').attr('data-href');
    $('.resources_top .more').attr('href',i);
}


$(function(){
    
    // 导航栏鼠标移上时显示英文，离开隐藏，直接使用排他
    $(".nav a").mouseenter(function(e){
        $(this).children('span').animate({'bottom':0},300)
        .siblings().children('span').animate({'bottom':'-20px'},300)
    }).mouseleave(function(e){
        $(this).children('span').animate({'bottom':'-20px'},300)
        .siblings().children('span').animate({'bottom':0},300)
    })
    
    $('.category li').mouseenter(function(e){
        $(this).addClass('cur').siblings().removeClass('cur');
    }).mouseleave(function(e){
        $(this).removeClass('cur').siblings().removeClass('cur');
    })
    var swiperWrapper = document.getElementById('swiper_wrapper');

    $('.category li').click(function(e){
        // swiperWrapper.style.transform="translate3d(-"+($(this).index()+1)*$('.projects_bottom').width()+"px,0px,0px)"
        // swiperWrapper.style.transitionDuration='0.3s';
        $(this).addClass('cur on').siblings().removeClass('cur on');

        /**- 20180706 start -**/
        cmore();
        /**- 20180706 end -**/

    })

    /**- 20180706 start -**/
    var n = $('.sw-projects .swiper-slide').length;
    /**- 20180706 end -**/

    // var mySwiper = new Swiper ('.sw-projects', {
    //     direction: 'vertical',
    //     loop: true,
    //     autoplay:4000,
    //     speed:800,
    //     // grabCursor: true,
    //     paginationClickable: true,
    //     onSlideChangeStart:function(swiper){
    //         var m = mySwiper.activeIndex-1;
    //         if(m == n){
    //             m = 0;
    //         }
    //         $('.projects .category li').eq(m).addClass('cur on').siblings().removeClass('cur on');
    //         cmore();
    //     }
    // })

    // $('.projects .arrow-left').on('click', function(e){
    //     e.preventDefault()
    //     mySwiper.swipePrev()

    //     /**- 20180706 start -**/
    //     $('.projects .category li').eq(mySwiper.activeIndex-1).addClass('cur on').siblings().removeClass('cur on');
    //     cmore();
    //     /**- 20180706 end -**/

    // })
    // $('.projects .arrow-right').on('click', function(e){
    //     e.preventDefault()
    //     mySwiper.swipeNext()

    //     /**- 20180706 start -**/
    //     var m = mySwiper.activeIndex-1
    //     if(m == n){
    //         m = 0;
    //     }
    //     $('.projects .category li').eq(m).addClass('cur on').siblings().removeClass('cur on');
    //     cmore();
    //     /**- 20180706 end -**/

    // })
    $('.project ul li').mouseenter(function(e){
        $(this).children('.img').children('.img_cover').css('zIndex',0)
        $(this).siblings().children('.img').children('.img_cover').css('zIndex',99)
    }).mouseleave(function(e){
        $('.project ul li').children('.img').children('.img_cover').css('zIndex',99)
    })
    $('.project ul li').mouseenter(function(e){
        $(this).children('.text').css({'background':'url(./images/project_hong.png) center top',
                                        'color':'#fff'});
        $(this).siblings().children('.bg_sh').css({'background':'url(./images/project_shenhui.png) center top',
                                        'color':'#414141'})
        $(this).siblings().children('.bg_h').css({'background':'url(./images/project_hui.png) center top',
                                        'color':'#414141'})
        $(this).children('.text').children('a').css({'border':'1px #fff solid',
                                        'color':'#fff'});
        $(this).siblings().children('.text').children('a').css({'border':'1px #fd9158 solid',
                                        'color':'#fd9158'})
    }).mouseleave(function(e){
        $('.project ul li').children('.bg_h').css({'background':'url(./images/project_hui.png) center top',
                                        'color':'#414141'});
        $('.project ul li').children('.bg_sh').css({'background':'url(./images/project_shenhui.png) center top',
                                        'color':'#414141'});
        $('.project ul li').children('.text').children('a').css({'border':'1px #fd9158 solid',
                                        'color':'#fd9158'})
    })

    $('.newsSecurity .news .b_box').mouseenter(function(e){
        $(this).children('.box').children('.text').css('backgroundColor','#ff683f')
        $(this).parent().siblings().children('.b_box').children('.box').children('.text').css('backgroundColor','#fff')
    }).mouseleave(function(e){
        $('.newsSecurity .news .b_box').children('.box').children('.img').children('.img_cover').css('zIndex',99)
        $('.newsSecurity .news .b_box').children('.box').children('.text').css('backgroundColor','#fff');
    })
    
})

// // banner
// $(function(){
//     var mySwiper = new Swiper('.sw-banner',{
//         // pagination: '.banner .pagination',
//         loop:true,
//         autoplay:4000,
//         speed:800,
//         // grabCursor: true,
//         paginationClickable: true
//     })
//     $('.banner .arrow-left').on('click', function(e){
//         e.preventDefault()
//         mySwiper.swipePrev()
//     })
//     $('.banner .arrow-right').on('click', function(e){
//         e.preventDefault()
//         mySwiper.swipeNext()
//     })
// })

// group
$(function(){
    $('.group .arrow-left').on('click', function(e){
        e.preventDefault()
        mySwiper.swipePrev()
    })
    $('.group .arrow-right').on('click', function(e){
        e.preventDefault()
        mySwiper.swipeNext()
    })
    if(ww > 769){
   //      var mySwiper = new Swiper ('.sw-group', {
   //          direction: 'vertical',
   //          loop: true,
			// roundLengths:true,
   //          autoplay:4000,
   //          pagination: '.group-pagination',
   //          paginationClickable: true,
   //          speed:800,
   //          slidesPerView : 2,
   //          slidesPerGroup : 2
   //      })
        $('.group-pagination').each(function(index, el) {
            var glen = $(this).children('span').length;
            for(var i=0;i<glen;i++){
                if( i%2 == 1 ){
                    $('.group-pagination span').eq(i).hide();
                }
            }
        });
    }
    if(ww <= 769){
        var mySwiper = new Swiper ('.sw-group', {
            direction: 'vertical',
            loop: true,
            autoplay:4000,
            pagination: '.group-pagination',
            paginationClickable: true,
            speed:800,
            slidesPerView : 1,
            slidesPerGroup : 1,
            calculateHeight : true,
            autoHeight: true,

        })
    }
})

//resources
$(function(){
    $('.resources .category li').mouseenter(function(e){
        $(this).addClass('cur').siblings().removeClass('cur');
    }).mouseleave(function(e){
        $(this).removeClass('cur').siblings().removeClass('cur');
    })
    var wrapper = document.getElementById('wrapper');
    $('.resources .category li').click(function(e){
       // wrapper.style.transform="translate3d(-"+($(this).index()+1)*$('.resources_bottom').width()+"px,0px,0px)"
       // wrapper.style.transitionDuration='0.3s';
        $(this).addClass('cur on').siblings().removeClass('cur on');

        /**- 20180706 start -**/
        rmore();
        /**- 20180706 end -**/

    })

    /**- 20180706 start -**/
    var r = $('.resources .swiper-slide').length;
    /**- 20180706 end -**/

    // var mySwiper = new Swiper ('.sw-resources', {
    //     direction: 'vertical',
    //     loop: true,
    //     autoplay:4000,
    //     speed:800,
    //     // grabCursor: true,
    //     paginationClickable: true,
    //     onSlideChangeStart:function(swiper){
    //         var m = mySwiper.activeIndex-1;
    //         if(m == r){
    //             m = 0;
    //         }
    //         $('.resources .category li').eq(m).addClass('cur on').siblings().removeClass('cur on');
    //         rmore();
    //     }
    // })

    $('.resources .arrow-left').on('click', function(e){
        e.preventDefault()
        mySwiper.swipePrev()

        /**- 20180706 start -**/
        $('.resources .category li').eq(mySwiper.activeIndex-1).addClass('cur on').siblings().removeClass('cur on');
        rmore();
        /**- 20180706 end -**/

    })
    $('.resources .arrow-right').on('click', function(e){
        e.preventDefault()
        mySwiper.swipeNext()

        /**- 20180706 start -**/
        var m = mySwiper.activeIndex-1;
        if(m == r){
            m = 0;
        }
        $('.resources .category li').eq(m).addClass('cur on').siblings().removeClass('cur on');
        rmore();
        /**- 20180706 end -**/

    })
    $('.resources ul li .b_box').mouseenter(function(e){
        $(this).children('.box').children('.img').children('.img_cover').css('zIndex',0);
        $(this).parent().siblings().children('.b_box').children('.box').children('.img').children('.img_cover').css('zIndex',99)
        $(this).children('.ceng').css('display','block');
        $(this).parent().siblings().children('.b_box').children('.ceng').css('display','none');
    }).mouseleave(function(e){
        $('.resources ul li .b_box').children('.box').children('.img').children('.img_cover').css('zIndex',99)
        $('.resources ul li .b_box').children('.ceng').css('display','none');
    })
})

//滚动
$(function(){
    var $lists = $('.banner').nextAll('div').not('.group');
    
    function nav_bar(navs, lists){
		var lists_top=[];
		lists.each(function(index, element) {
			lists_top[index] = $(element).offset().top;
		});
		//当鼠标点击导航栏的时候
		navs.click(function(e) {
			$(this).addClass('cur').siblings().removeClass('cur');
			//窗口滚动到指定的位置
            
            /**- 20180708 start -**/
            var h = $(this).index();
			var a = 50;
			if(h>2)
			{
				a=200
			}
			if(h>3)
			{
				a=300
			}
			
            if(h == 5){
              window.scrollTo(0, document.documentElement.scrollHeight)
            }else{
                $('html,body').stop().animate({scrollTop:lists_top[$(this).index()-1]+a}, 800);
            }
            /**- 20180708 end -**/
			
		});
        $('.nav a').eq(0).click(function(e){
            //window.href.location == 'index.html'
            $('html,body').stop().animate({scrollTop:0}, 500);
            $(this).addClass('cur').siblings().removeClass('cur');
        })
        $('.subnav li').eq(0).click(function(e){

            $('html,body').stop().animate({scrollTop:0}, 500);
            $(this).addClass('cur').siblings().removeClass('cur');
        })
		var certain_height=$(window).height()/2;
		//当窗口滚动的时候
		$(window).scroll(function(e){
			var win_center=$(window).scrollTop()+certain_height;  //页面中央的文档坐标值
			var current_nav=lists_top.length-1;  //默认最后一楼
			//判断当前窗口位于哪一楼
            if(lists_top[0]>win_center){
                $('.header a').eq(0).addClass('cur').siblings().removeClass('cur');
            }else{
                for(var i=0; i<lists_top.length; i++){
    				if(lists_top[i]>win_center){
    					current_nav=i-1;
    					break;
    				}
    			}
                navs.eq(current_nav).addClass('cur').siblings().removeClass('cur');
            }
		});
	}
    nav_bar( $('.subnav li:gt(0)'),$lists);
    nav_bar($('.nav a:gt(0)'),$lists);
})

$(document).ready(function() {
    $('.companies li > a').click(function(){
        $(this).siblings('.comp-con').fadeIn(300);
        $('.comp-layer').fadeIn(300);
    })
    $('.comp-close').click(function(){
        $(this).parent('.comp-con').fadeOut(300);
        $('.comp-layer').fadeOut(300);
        $('.ceng_cont').fadeOut(300);
    })
    $('.comp-layer').click(function(){
        $('.comp-con').fadeOut(300);
        $(this).fadeOut(300);
        $('.ceng_cont').fadeOut(300);
    })

    $('.security .first').click(function(){
        $('.ceng_cont').fadeIn(300);
        $('.comp-layer').fadeIn(300);
    })
    
    if( (ww<=950) || (wh<=620) ){
        $('.companies li > a').click(function(){
            var ch = $(this).siblings('.comp-con').height();
            var cfl = $(this).siblings('.comp-con').find('.fl').height();
            $(this).siblings('.comp-con').find('.fr').children('div').height( ch - cfl - 60 );
        });
        $('.security .first').click(function(){
            var ch = $('.comp-con.ceng_cont').height();
            var cfl = $('.comp-con.ceng_cont').find('.fl').height();
            $('.comp-con.ceng_cont').find('.fr').children('div').height( ch - cfl - 60 );
        })
    }
    if( ww<=769 ){
        $('.security .first').click(function(){
            // $('.comp-con.ceng_cont').height(170);
            $('.comp-con.ceng_cont').find('.fr').children('div').remove();
            $('.comp-con.ceng_cont').find('.fr').html('<p>请在电脑上查看<p>"北京文化[000802]股票实时行情"')
        })
    }

    //video
    /**- 20180708 start -**/
  
    /**- 20180708 end -**/

});

