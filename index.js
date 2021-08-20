var count=0;

$(".dropdown").on("click",function(){
	if(count>0){
		 $(".container3").slideToggle(500);
		 
	}
});
$(".dropdown").on("click",function(){
	if(count==0){
		$(".container3").removeClass("invisible").hide();
	    $(".container3").slideToggle(500);
	   
	    count++;
	   
	}
	// $(".container3").toggle(1000);
});

function back(){
	$(".dropdown").css("backgroundColor","white");
	$(".dropdown").css("color","black");
	

}

