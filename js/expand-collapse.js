$(document).ready(function(){
	let clicked = false;
	$(".header").click(function(){
		if(clicked)return;
		clicked = true;
		$header = $(this);
		const content = $header.next();
		const plus = $(this).find('.plus');
		const minus = $(this).find('.minus');

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