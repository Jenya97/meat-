function logIn(){
    if($('.registr_field').is(":hidden")){
        $('.burger_menu').css('display','none')
        $('.registr_field').height($('main').height()+200)
        $('.registr_field').width($('body').width())
        $('.registr_field').css({
            display:'block',
            background:'rgb(0,0,0,0.6)',
            position:'absolute',
            "z-index":1,
            margin:'unset',
            paddingTop:'30%'
        })
        $('main').css({
            filter: "blur(3px)",
        })
        $('footer').css({
            filter: "blur(3px)",
        })
        }
    
    
    }
    
    
    $('.registration_system').on('click', logIn);
    
    
    $('.registration_system').on('click', function(e){
        e.stopPropagation();
    });
    $('.registr_user').on('click', function(e){
        e.stopPropagation();
    }); 
    $(document).on('click', function(){
        $(".registr_field").hide();
        $('main').css({
                    filter: "blur(0px)",
                })
                $('footer').css({
                    filter: "blur(0px)",
                })
    });
    
    
    