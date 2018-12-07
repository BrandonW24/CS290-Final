$.fn.makeItRain = function(){

		$(this).on('click',function(){

			var maxBills = 50;
			for (var i = 0; i < maxBills; i++){
			var random = $(window).width();
			var randomPosition = Math.floor(random*Math.random());
			var randomTime = Math.random() * 20;
			var randomSpeed = (Math.random()*20)+10 ;

			var bills = $("<span class='billsBillsBills'>")
				.css({
					right : randomPosition,
					top: '-150px',
					"-webkit-animation-delay" : randomTime + "s",
					"-webkit-animation-duration" : randomSpeed + "s"
				});

				$(bills).prepend('<img src="mones2.png" style="width = 10px" alt="a dollar bill">');
				$('body').append(bills);

			};

		});

	};

