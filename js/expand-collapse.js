$(document).ready(function(){
	let clicked = false;
	$(".header").click(function(){
		if(clicked)return;
		clicked = true;
		$header = $(this);
		// console.log($header)
		const content = $header.next();
		// console.log(content)
		const plus = $header.find('.plus');
		const minus = $header.find('.minus');

		if(content.is(':visible')){
			content.slideUp(500,()=>{
				minus.fadeOut(50,()=>{
					plus.fadeIn();
				});
			});
		}
		else{
			content.slideDown(500,()=>{
				plus.fadeOut(50,()=>{
					minus.fadeIn();
				})
			});
		}
		clicked = false;
	})
})