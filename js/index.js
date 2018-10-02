$(".imgwai").mouseenter(function () { 
    $(".imgwai").css("transform","scale(1.2)")
});
$(".imgwai").mouseleave(function () { 
    $(".imgwai").css("transform","scale(1)")
});

let img = $(".zhengwen img")
img.each(function(i){ 
    img.eq(i).mouseenter(function () { 
        img.eq(i).css("transform","scale(1.2)")
    });
    img.eq(i).mouseleave(function () { 
        img.eq(i).css("transform","scale(1)")
    });
});
    
