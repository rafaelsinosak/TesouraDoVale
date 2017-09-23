//config
$float_speed=1500; //milliseconds
$float_easing="easeOutQuint";
$menu2_fade_speed=500; //milliseconds
$closed_menu2_opacity=0.75;

//cache vars
$fl_menu2=$("#fl_menu2");
$fl_menu2_menu2=$("#fl_menu2 .menu2");
$fl_menu2_label=$("#fl_menu2 .label");

$(window).load(function() {
	menu2Position=$('#fl_menu2').position().top;
	Floatmenu2();

});

$(window).scroll(function () { 
	Floatmenu2();
});

function Floatmenu2(){
	var scrollAmount=$(document).scrollTop();
	var newPosition=menu2Position+scrollAmount;
	if($(window).height()<$fl_menu2.height()+$fl_menu2_menu2.height()){
		$fl_menu2.css("top",menu2Position);
	} else {
		$fl_menu2.stop().animate({top: newPosition}, $float_speed, $float_easing);
	}
}