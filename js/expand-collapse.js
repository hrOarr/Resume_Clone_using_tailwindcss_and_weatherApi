$(document).ready(function(){
	let clicked = false;
	$(".header").click(function(){
		if(clicked)return;
		clicked = true;
		$header = $(this);
		// update
		const content = $header.next();
		const plus = $header.find('.plus');
		const minus = $header.find('.minus');

		if(content.is(':visible')){
			content.slideUp(500,()=>{
				clicked = false;
			});
			minus.fadeOut(200,()=>{
				plus.fadeIn(200);
			});
		}
		else{
			content.slideDown(500,()=>{
				clicked = false;
			});
			plus.fadeOut(200,()=>{
				minus.fadeIn(200);
			})
		}
	})
})