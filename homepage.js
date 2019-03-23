$(document).ready(function(){

	alert("This website works best when seen on Chrome on 1366x768 Resolution. Firefox omits some of the transitions, and it was never meant for IE, really. This is for demo purposes only. Distribution without asking the author is not permitted.");
  

	var lastScroll =0;
	var ht = window.innerHeight;
	var ht1 = $(this).innerHeight();

	// positioning fixed till a certain point. Then absolute. 

	$.fn.followTo = function (pos,prev) {
	    var $this = this,
	        $window = $(window);

	    $window.scroll(function (e) {
	        if ($window.scrollTop() > pos) {
	            $this.css({
	                position: 'absolute',
	                top: pos+prev
	            });
	        } else {
	            $this.css({
	                position: 'fixed',
	                top: prev
	            });
	        }
	    });
	};

	var prevLogo = parseInt($("#logo").css('top'));
	


	$("#autoplay").click(function(event) {
		/* Act on the event */
		
		window.autointerval = setInterval(function () {

        var iScroll = $(window).scrollTop();

        iScroll = iScroll + 350;



        $('html, body').animate({

            scrollTop: iScroll

        }, 500);


    }, 500);

		
		
		

	});


	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		var prevTwo = parseInt($("#two").css('top'));
		var prevOne = parseInt($("#one").css('top'));
		var newh = prevLogo+st+'px';
		$("p#scrolldet").html("Height of window:"+ht+"And "+ht1+"<br> Scrolscrolled: "+st+"="+(st/ht)*100+"% <br>new ht of logo : "+newh+"<br> prevTwo:"+prevTwo+"<br> prevOne:"+prevOne);

		// $("#logo").followTo(5*ht,prevLogo);
		$("#two").followTo(5*ht,ht/2);
		$("#one").followTo(5*ht,0);
		$("#logo-wrap").followTo(5*ht,0);

		if(st>5*ht){
			$("#logo").css('top',prevLogo+(st-5*ht));

		}
		else{
			$("#logo").css('top',prevLogo);
		}


		if(st>28.7*ht){
			clearInterval(autointerval);
		}

		

	});


	

// function parallax(){
//     var scrolled = $(window).scrollTop();
// 		var posbott = parseInt($("#two").css("bottom"));
// 		// alert(posbott);
//         $('#two').css('bottom', posbott+(1*scrolled) + 'px');
// }

// $(window).scroll(function(e){
//     parallax();
// });

});


