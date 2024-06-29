$(function(){
    var docH=640;
    if($(document).height()>docH){
        docH=$(document).height();
    }
    $(".container").css("height",docH);
    $(".innerwraper").css("height",docH);
    $(".inner").css("height","640");
    $(".container").hScrollPane({
        mover:".innerwraper",
        showArrow:true,
        handleCssAlter:"draghandlealter",
        mousewheel:{bind:true,moveLength:500}
    })
    $(".test:nth-child(1)>li:nth-child(1), .test:nth-child(1)>li:nth-child(2), .test:nth-child(2)>li:nth-child(1), .test:nth-child(2)>li:nth-child(2)").hover(function(){
        $(this).css("border","3px outset #999");
        $(this).css("margin-bottom","35px");
        $(this).css("border-radius","6px");
        $(this).css("rotate","5deg");
    },function(){
        $(this).css("border","none");
        $(this).css("margin-bottom","30px");
        $(this).css("border-radius","0px");
        $(this).css("rotate","-6deg");
    })
});