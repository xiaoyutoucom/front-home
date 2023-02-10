var ww = $(window).width();
var wh = $(window).height();

$(document).ready(function() {

	// 鼠标移上下拉列表按钮显示下拉列表，离开隐藏
    if(ww>769){
        $('.subnav').mouseenter(function(){
            $(this).children('ul').slideDown(400);
        }).mouseleave(function(){
            $(this).children('ul').slideUp(400);
        })
    }else{
        $('.subnav').click(function(){
            $(this).children('ul').fadeToggle(300);
        });
		if($('li.page').length > 0){
    		var seld = $('li.selected');
    		seld.css('display','inline');
    		var prev = seld.prev();
    		if(prev.attr('class').indexOf('previous') >= 0){ //第一个
    			seld.next().css('display','inline');
    			seld.next().next().css('display','inline');
    		}else{
    			prev.css('display','inline');
    		}
    		
    		var next = seld.next();
    		if(next.attr('class').indexOf('next') >= 0){ //最后一个
    			seld.prev().css('display','inline');
    			seld.prev().prev().css('display','inline');
    		}else{
    			next.css('display','inline');
    		}
    		
    		
    	}
    }

    // footer
    if(ww>700){
        $(".dz_biao").hover(function(){
            $(".dt_ceng").css("display","block");
        },function(){
            $(".dt_ceng").css("display","none");
        });
        $(".ewm1").hover(function(){
			$(".wx_ewm_ceng").css("display","block");
		},function(){
			$(".wx_ewm_ceng").css("display","none");
		});
		$(".ewm2").hover(function(){
			$(".wb_ewm_ceng").css("display","block");
		},function(){
			$(".wb_ewm_ceng").css("display","none");
		});
    }else{
        $(".dz_biao").click(function(){
            $(".dt_ceng").toggle();
            $(".wx_ewm_ceng").hide();
            $(".wb_ewm_ceng").hide();
        });
        $(".ewm1").click(function(){
        	$(".wx_ewm_ceng").toggle();
        	$(".dt_ceng").hide();
        	$(".wb_ewm_ceng").hide();
        })
        $(".ewm2").click(function(){
        	$(".wb_ewm_ceng").toggle();
        	$(".dt_ceng").hide();
        	$(".wx_ewm_ceng").hide();
        })
    }
    $('.de-close').click(function(event) {
        $(".dt_ceng").toggle();
    });
    
	$(".dt_ceng").hover(function(){
		$(this).css("display","block");
	},function(){
		$(this).css("display","none");
	});
	$(".wx_ewm_ceng").hover(function(){
		$(this).css("display","block");
	},function(){
		$(this).css("display","none");
	});
	$(".wb_ewm_ceng").hover(function(){
		$(this).css("display","block");
	},function(){
		$(this).css("display","none");
	});

	
	

});