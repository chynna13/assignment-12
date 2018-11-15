$(document).ready(function(){
	var unit = 'imperial';

function getWeather(unit){
	$.ajax({
		url:"https://api.openweathermap.org/data/2.5/find?",
		type:"GET",
		dataType:"JSON",
		data:{
			q:"New York",
			units:unit,
			appid:"5bb22714a08c3c5316ba025775e800a7",
		},

		success: function(data){
			console.log(data);
			console.log(data.list[0].main.temp);
			$("h1").html("The current tempurature is: " +  data.list[0].main.temp +" degrees");

   			 var Sunny = $(".sunny");
			var	KV= $(".snow");
			var London = $(".rain");

            $(".sunny").html("The temp is: " + data.list[0].main.temp +"Fahrenheit for sunny weather!");
	      	$('body').append(Sunny);
			$(".snow").html("The temp is: " + data.list[1].main.temp +"Fahrenheit for snowy weather!");
			$('body').append(KV);
			$(".rain").html("The temp is: " + data.list[2].main.temp +"Fahrenheit for rainy Weather!");
			$('body').append(London);

		},

		error: function(){
			console.log("error")
		},
	});
}
	$('#metric').on('click',function(){
		getWeather('metric',function(){
		var unit = 'metric';
		console.log("clicked");
		});
	});
	$("#imperial").click(function(){
		getWeather('imperial', function(){
		var unit= 'imperial';
		console.log("iclicked");
		});
	});

})
