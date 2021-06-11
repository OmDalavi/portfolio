var count=0;
window.onload=function(){
	document.getElementById("container").focus();
};
$(".dropdown").on("click",function(){
	if(count>0){
		 $(".container3").slideToggle(1000);

	}
});
$(".dropdown").on("click",function(){
	if(count==0){
		$(".container3").removeClass("invisible").hide();
	    $(".container3").slideToggle(1000);
	    count++;
	   
	}
	// $(".container3").toggle(1000);
});



