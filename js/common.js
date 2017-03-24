$(document).ready(function() {
    
    function heightDetect() {
         //высота первого экрана
    $(".main_head").css("min-height", $(window).height());
    $(".top_wrapper").css("height", $(window).height()); 
    };
    heightDetect();
    $(window).resize(function() {
       heightDetect();
   });
	
    
});
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});