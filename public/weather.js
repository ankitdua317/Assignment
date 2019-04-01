$(document).ready(function(){
	$("#butn").click(function(){
		$("#errorCity").remove();
		return getWeather();
	});
});

function getWeather(){
	var city = $("#city").val();
	if(city != ''){
		$.ajax({
			url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' +
			'&appid=e2aaa1de1360cfb3469223a73f8e3ab7',
			type: "GET",
			dataType: "jsonp",
			success: function(data){
				//console.log(data);
				var temp = data.main.temp;
				var descp = data.weather[0].main;
				var humi = data.main.humidity + " %";
				var pressure = data.main.pressure + " hpa";
				//$("#temp1").text(temp);
				$('#curr').html('<h3 class="current">Current Weather for '+ data.name + ','+ data.sys.country + '</h3>')
				$('#temp1').html('<p>' + data.main.temp + '&deg;C</p>');
				$("#desc1").text(descp);
				$("#humi1").text(humi);
				$("#pres1").text(pressure);
				$("#icon1").html('<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">');
				$("#icon2").html('<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">');
				$("#icon3").html('<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">');
				$("#icon4").html('<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">');
				var temp2 = data.main.temp + 1;
				$('#temp2').html('<p>' + temp2 + '&deg;C</p>');
				var descp2 = data.weather[0].main;
				var humi2 = data.main.humidity + 4 + " %";
				var pressure2 = data.main.pressure + 10 + " hpa";
				$("#desc2").text(descp2);
				$("#humi2").text(humi2);
				$("#pres2").text(pressure2);

				var temp3 = data.main.temp + 0.5;
				var descp3 = data.weather[0].main;
				var humi3 = data.main.humidity - 1 + " %";
				var pressure3 = data.main.pressure + 20 + " hpa";
				$('#temp3').html('<p>' + temp3 + '&deg;C</p>');
				$("#desc3").text(descp3);
				$("#humi3").text(humi3);
				$("#pres3").text(pressure3);

				var temp4 = data.main.temp - 1.5;
				var descp4 = data.weather[0].main;
				var humi4 = data.main.humidity + 1.5 + " %";
				var pressure4 = data.main.pressure + " hpa";
				$('#temp4').html('<p>' + temp4 + '&deg;C</p>');
				$("#desc4").text(descp4);
				$("#humi4").text(humi4);
				$("#pres4").text(pressure4);
				//var widget = showResults(data);
				//$("#showWeather").html(widget);
				$("#city").val('');
				var a,b,c,d,e,f,g;
				var h,i,j,k,l,m,n;
				d = temp;
				a = d-2;
				b = d-1.5;
				c = d+0.5;
				e = d-0.5;
				f = d+2;
				g = d;

				k = data.main.humidity;
				h = k - 3.2;
				i = k - 1;
				j = k;
				l = k + 4;
				m = k + 7;
				n = k + 6;

				const CHART = document.getElementById("lineChart");
				let lineChart = new Chart(CHART,{
					type: 'line',
					data: {
						labels: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
						datasets: [
							{
								label: "Temperature Graph",
								fill: false,
								lineTension: 0.1,
								backgroundColor: "rgba(75,192,192,0.4)",
								borderColor: "rgba(75,192,192,1)",
								borderCapStyle: 'butt',
								borderDash: [],
								borderDashOffset: 0.0,
								borderJoinStyle: 'miter',
								pointBorderColor: "rgba(75,192,192,1)",
								pointBackgroundColor: "#fff",
								pointBorderWidth: 1,
								pointHoverRadius: 5,
								pointHoverBackgroundColor: "rgba(75,192,192,1)",
								pointHoverBorderColor: "rgba(220,220,220,1)",
								pointHoverBorderWidth: 2,
								pointRadius: 1,
								pointHitRadius: 10,
								data: [a,b,c,d,e,f,g], 
							}

						] 
					}
				});


				const CHART2 = document.getElementById("lineChart2");
				let lineChart2 = new Chart(CHART2,{
					type: 'line',
					data: {
						labels: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
						datasets: [
							{
								label: "Humidity Graph",
								fill: false,
								lineTension: 0.1,
								backgroundColor: "rgba(75,192,192,0.4)",
								borderColor: "rgba(75,192,192,1)",
								borderCapStyle: 'butt',
								borderDash: [],
								borderDashOffset: 0.0,
								borderJoinStyle: 'miter',
								pointBorderColor: "rgba(75,192,192,1)",
								pointBackgroundColor: "#fff",
								pointBorderWidth: 1,
								pointHoverRadius: 5,
								pointHoverBackgroundColor: "rgba(75,192,192,1)",
								pointHoverBorderColor: "rgba(220,220,220,1)",
								pointHoverBorderWidth: 2,
								pointRadius: 1,
								pointHitRadius: 10,
								data: [h,i,j,k,l,m,n], 
							}

						] 
					}
				});
			}

		});
	
	}else{
		$("#error").html("<div class='alert alert-danger' id='errorCity'> City Field cannot be empty </div>");
	}
}

// function showResults(data){
// 	return '<h3>Current Weather for '+ data.name + ','+ data.sys.country + '</h3>' +
// 	"<p> <img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'</p>" +
// 	"<p>Weather: " + data.weather[0].main + " </p>" +
// 	"<p>Temperature: " + data.main.temp + " &deg;C</p>" +
// 	"<p>Pressure: " + data.main.pressure + " hpa</p>" + 
// 	"<p>Humidity: " + data.main.humidity + " %</p>";
// }

//Add error field too
//keep only 1 graph
//disorientation