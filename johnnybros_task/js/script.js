new WOW().init();

$(".home__scroll-down, .item_title--about").click(function() { $('html, body').animate({ scrollTop: $(".about").offset().top -52 }, 700); });
$(".item_title--home").click(function() { $('html, body').animate({ scrollTop: $(".home").offset().top }, 700); });
$(".item_title--prizes").click(function() { $('html, body').animate({ scrollTop: $(".prizes").offset().top -52 }, 700); });
$(".item_title--join").click(function() { $('html, body').animate({ scrollTop: $(".about--join").offset().top -52 }, 700); });
$(".item_title--contact").click(function() { $('html, body').animate({ scrollTop: $(".contact").offset().top -52 }, 700); });

$(".wrapper_mobile-menu").click(function(){
	$(".wrapper").toggleClass("full_size_menu");
	$(".wrapper_nav").toggle();
});

window.onload = (function(){	
  $(window).scroll(function () { 
    if( $(window).scrollTop() > 1 ) {
      $(".wrapper").addClass("small_wrapper");
    } else {
	  $(".wrapper").removeClass("small_wrapper");	
	}
  })
});

var options = {
	useEasing : true, 
	useGrouping : true, 
	separator : ' ', 
	decimal : '.', 
	prefix : '', 
	suffix : '' 
};

var num1 = new CountUp("count1", 0, 90, 0, 4, options); 
var num2 = new CountUp("count2", 0, 1530, 0, 5, options); 
var num3 = new CountUp("count3", 0, 3, 0, 3, options); 

var element_position = $('.about').offset().top - 700;

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = element_position;

    if(y_scroll_pos > scroll_pos_test) {
		num1.start();
		num2.start();
		num3.start();
    }
});