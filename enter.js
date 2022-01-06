 function logIn(){
if($('.enter').is(":hidden")){
    $('.enter').height($('main').height()+200)
    $('.burger_menu').css('display','none')
    $('.enter').width($('body').width())
    $('.enter').css({
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


$('.enter_system').on('click', logIn);

$('.enter_system').on('click', function(e){
    e.stopPropagation();
});
$('.enter_user').on('click', function(e){
    e.stopPropagation();
}); 
$(document).on('click', function(){
    $(".enter").hide();
    $('main').css({
                filter: "blur(0px)",
            })
            $('footer').css({
                filter: "blur(0px)",
            })
});


