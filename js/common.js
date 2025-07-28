
    try{ AOS.init() }
    catch(err){ console.warn(err);}

$(function(){

    /* tabs */
    $("#portfolio .btn").click(function(){
        $("#portfolio .btn").removeClass("active");
        $(this).addClass("active");

        if( $(this).text()=="All" ){
            $("#portfolio .all").fadeIn();
        }
        else if( $(this).text()=="Website" ){
            $("#portfolio .all").fadeOut(0);
            $("#portfolio .website").fadeIn();
        }
        else{
            $("#portfolio .all").fadeOut(0);
            $("#portfolio .brand").fadeIn();
        }
    });


    $("#portfolio .seemore").click(function(){
        $(this).children("span").toggleClass("fa-minus-circle");
        // $(".wrap-5 .all:nth-child(7),.wrap-5 .all:nth-child(8),.wrap-5 .all:nth-child(9)").slideToggle();
         $(".wrap-5 .all:nth-last-child(-n+3)").slideToggle();
    });

    $(".wrap-7 .seemore").click(function(){
        $(this).children("span").toggleClass("fa-minus-circle");
        // $(".wrap-7 .all:nth-child(4),.wrap-7 .all:nth-child(5),.wrap-7 .all:nth-child(6)").slideToggle();
        $(".wrap-7 .all:nth-last-child(-n+3)").slideToggle();
    });


    $(".accordion a").click(function(e){
        e.preventDefault();
        $(".accordion a").removeClass("active");
        $(this).addClass("active");
        $(".accordion p").slideUp();
        $(this).next("p").slideDown();
    });

    $(".wrap-13 button").click(function(){
        $(window).scrollTop(0);
    });


    $(".signup").click(function(){
        $("body").append(`<div class="overlay"></div>`);
        $("body").css({'overflow-y':'hidden'});
        $("body").append(`<div class="popover"></div>`);
        $(".popover").load("form.html",function(){ 
            $(".popover #name").focus();
            $(".close,.overlay").click(function(){
                $(".popover,.overlay").remove();
                 $("body").css({'overflow-y':'auto'});
            });
            $(window).keyup(function(e){
                if(e.which==27){
                    $(".popover,.overlay").remove();
                    $("body").css({'overflow-y':'auto'});
                }
            });
        });
    });


    $(".menu").click(function(){
        $(this).toggleClass("active");
        $(".collapse").slideToggle();
    
        $(".collapse a").click(function(){
            $('.collapse').slideUp();
            $(".menu").removeClass("active");
        });
       
    });


    $(".banner a, .banner button").click(function(e){
        e.preventDefault();
        $("body").append(`<div class="overlay"></div>`);
        $("body").css({'overflow-y':'hidden'});
        $("body").append(`<div class="popover"></div>`);
        $('.popover').append(`<button class="close"><span class="fa fa-times"></span></button><iframe width="720" height="405" src="https://www.youtube.com/embed/1gtws9PtcLg?si=3kaFJsY5wk7SDn9q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);

         $(window).keyup(function(e){
                if(e.which==27){
                    $(".popover,.overlay").remove();
                    $("body").css({'overflow-y':'auto'});
                }
        });

        $(".close,.overlay").click(function(){
                $(".popover,.overlay").remove();
                 $("body").css({'overflow-y':'auto'});
        });

    });


    $(".reviews").slick({
        autoplay:true,
        autoplaySpeed:5000,
        arrows:false,
        dots:true
    });


});