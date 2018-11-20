



$("ul").on("click", "li", function(){
    $(this).toggleClass("compleated");
});


$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(200,function(){
        $(this).remove();
    });
    event.stopPropagation();


});


$("input[type='text']").keypress(function(event){
    if(event.which === 13){
       var todoText = $(this).val();
       $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>");
       $("input").val('');
    }
});


$("button").click(function(){
    $("li").add("test");
});


$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});

function openWin() {
    myWindow = window.open("", "", "width=250, height=500");  // Opens a new window
}
