$(document).ready(function(){
    $(".btn").on({
        mouseenter:function(){
           $(this).find(".color").animate({
               width:"100%"
           },250)
        },
        mouseleave:function(){
            $(this).find(".color").animate({
                width:"0%"
            },250)
        }
    });
    $(".features .taps  ul li").on({
        click:function(){
            $($(this).data("tap")).show().siblings().hide(),
            $(this).addClass("active").siblings().removeClass("active")
        }
    });
    $(window).scroll(function(){
        if($(window).scrollTop()>=300){
            $(".scroll i").fadeIn(500)
        }else{
            $(".scroll i").fadeOut(500)
        }
    });
    $(".scroll i").on({
        click:function(){
            $("body,html").animate({
                scrollTop:0
            },1000)
        }
    });
    $("nav ul li a,.mini-navbar ul li a,.navbar-brand").on({
        click:function(e){
            e.preventDefault();
            $("body,html").animate({
                scrollTop:$($(this).data("scroll")).offset().top - $("nav").innerHeight()
            },500);
            $(this).parent().addClass("active").siblings().removeClass("active")
        }
    });
    $(window).scroll(function(){
        $("section").each(function(){
            if ($(window).scrollTop() +$("nav").innerHeight()+1 > $(this).offset().top){
                $("nav ul li a[data-scroll='"+"."+$(this).attr("id")+"'],.mini-navbar ul li a[data-scroll='"+"."+$(this).attr("id")+"'],navbar-brand").parent().addClass("active").siblings().removeClass("active")
            }
        });    
    })
});
$(document).ready(function(){
    $("button[type='button']").on({
        click:function(){
            $(".mini-navbar").animate({
                right:0
            },500)
        }
    });
    $(".mini-navbar .fa-times").on({
        click:function(){
            $(".mini-navbar").animate({
                right:"-260px"
            },500)
        }
    });
    $("section").on({
        click:function(){
            $(".mini-navbar").animate({
                right:"-260px"
            },500)
        }
    });
    $(".mini-navbar").on({
        click:function(e){
            e.stopPropagation()
        }
    })
});
$(window).on({
    load:function(){
        $(".multi-spinner-container").fadeOut(500,function(){
            $(".load").fadeOut(500),
            $("body").css("overflow","auto")
            })
    }
})