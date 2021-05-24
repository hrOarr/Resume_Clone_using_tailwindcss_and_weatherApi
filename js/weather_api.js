$(document).ready(function(){
	let visible = false;
	$('.location').click(function(e){
		e.preventDefault();
		if(visible) return;
		visible = true;
		const datatoast = $(this).attr("data-toast");
		// console.log(datatoast)
		const url = 'https://api.openweathermap.org/data/2.5/weather?q=chittagong&appid=5f5256021edcafafc6ac117d93983455';
		axios.get(url)
		.then((res)=>{
			// console.log(res);
			visible = false;
			const {weather, main} = res.data;
			$('.current_weather').text(weather[0].description);
			const temp = (main.temp-273).toFixed(2);
			$('.current_temp').text(temp+'C');
			const feels_like = (main.feels_like-273).toFixed(2);
			$('.feels_like').text(feels_like+'C');
			$("#" + datatoast).fadeIn(400).delay(5000).fadeOut(400);
		})
		.catch((err)=>{
			console.log("Error from weather_api.js "+err);
		})
	})
})