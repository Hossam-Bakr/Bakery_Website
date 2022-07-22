// nav change color when scroll

$(window).scroll(function(){
    
    // nav change color
    let theScrollTop = $(window).scrollTop();

    if(theScrollTop > 39 ){
        $(".navs").css({"backgroundColor":"#f5f5f5", "padding":".5rem"})
        $(".logo img").attr("src","./img/bakery-color.png")
        $(".up").fadeIn(500)
        $(".up").css("display","flex")
        $(".navlinks").css("text-align","center")
        $(".menu-btn div").css("background-color","#000")
    }
    else
    {
        $(".navs").css({"backgroundColor":"transparent", "padding":"1.5rem"})
        $(".logo img").attr("src","./img/bakery-light-1.png")
        $(".up").fadeOut(500)
        $(".up").css("display","none")
        $(".navlinks").css("text-align","center")
        $(".menu-btn div").css("background-color","#f8f8f8")
    }

});

// blog ui

$("#ourBakingL").mousemove(function(){
    $("#ourBaking-ul").css("display","block")
});

$("#ourBakingL").mouseleave(function(){
    $("#ourBaking-ul").css("display","none")
});


// click on up

$(".up").click(function(){
    $("html,body").animate({scrollTop:0},1500)
});

// smooth scroll

$(".ancur a").click(function(e){
    let theHref = $(e.target).attr("href")
    let sectionOffset = $(theHref).offset().top
    
    $("html,body").animate({scrollTop:sectionOffset},1500)

});

// Color box

$(".boxIcon").click(function(){

    let colorsWidth = $(".colors").innerWidth();

    if( $(".colorBox").css("left") == "-192.562px")
    {
        $(".colorBox").animate({"left":0} , 1000);
    }
    else
    {
        $(".colorBox").animate({"left":`-${colorsWidth}`} , 1000);
    }

});


var allColors = ["red","green","orange","blue","black","white"]
let allSpans = $(".colors span");


for(var i=0;i<allColors.length;i++){
    allSpans.eq(i).css("background-color",`${allColors[i]}`)
}    


allSpans.click(function(e){
    
    let theColorSelected = $(e.target).css("background-color");
    $(".colorChange").css("color",`${theColorSelected}`)    
});

// menu btn

$(".menu-btn").click(function(){

    if($(".navlinks").offset().top == 0)
    {
        $(".navlinks .ancur").css("border","none")
        $(".navlinks").css({"width":"50%"})
        $(".navlinks").slideDown(800)
    }
    else
    {
        $(".navlinks").slideUp(800)
    }

});