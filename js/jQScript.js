$(function(){
    var docH=640;
    if($(document).height()>docH){
        docH=$(document).height();
    }
    $(".container").css("height",docH);
    $(".innerwraper").css("height",docH);
    $(".inner").css("height","640");
    $("container").hScrollPane({
        mover:".innerwraper",
        showArrow:true,
        handleCssAlter:"draghandlealter",
        mousewheel:{bind:true,moveLength:500}
    })
    $("ul:nth-child(1)>li, ul:nth-child(2)>li, ul:nth-child(3)>li:nth-child(3),ul:nth-child(3)>li:nth-child(4), ul:nth-child(4)>li:nth-child(1), ul:nth-child(4)>li:nth-child(2), ul:nth-child(5)>li").hover(function(){
        $(this).css("border","1px outset #999");
        $(this).css("margin-bottom","6px");
        $(this).css("border-radius","4px");
    },function(){
        $(this).css("border","none");
        $(this).css("margin-bottom","8px");
        $(this).css("border-radius","0px")
    })
    $("ul:nth-child(3)>li:nth-child(1)>div:first-child, ul:nth-child(3)>li:nth-child(2)>div:first-child, ul:nth-child(4)>li:nth-child(3)>div:first-child, ul:nth-child(4)>li:nth-child(4)>div:first-child").hover(function(){
        $(this).css("border","1px outset #999");
        $(this).css("margin-bottom","6px");
        $(this).next().css("margin-left","6px")
        $(this).css("border-radius","4px");
    },function(){
        $(this).css("border","none");
        $(this).css("margin-bottom","8px");
        $(this).next().css("margin-left","8px")
        $(this).css("border-radius","0px");
    })
    $("ul:nth-child(3)>li:nth-child(1)>div:last-child, ul:nth-child(3)>li:nth-child(2)>div:last-child, ul:nth-child(4)>li:nth-child(3)>div:last-child, ul:nth-child(4)>li:nth-child(4)>div:last-child").hover(function(){
        $(this).css("border","1px outset #999");
        $(this).css("margin-bottom","6px");
        $(this).css("margin-left","6px")
        $(this).css("border-radius","4px");
    },function(){
        $(this).css("border","none");
        $(this).css("margin-bottom","8px");
        $(this).css("margin-left","8px")
        $(this).css("border-radius","0px");
    })
    $("ul:nth-child(1)>li:nth-child(4)").css("background","url()")
});