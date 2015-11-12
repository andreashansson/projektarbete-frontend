$(document).ready(function() {

	$("nav div").on("mouseenter", function() {

		$(this).css("box-shadow", "5px 5px 5px #0A0A2A");
		$(this).css("color", "white");
		$(this).css("background-color", "#F2F2F2");

	});

	$("nav div").on("mouseleave", function() {

		$(this).css("box-shadow", "0px 0px 0px white");
		$(this).css("color", "black");
		$(this).css("background-color", "white");

	});

	// Gör text arean större när du håller musen över den

	$("textarea").on("mouseenter", function() {

		$(this).animate({"width": "98%"}, 600);
		$(this).animate({"height": "200px"}, 600);

	});

	// Gör text arean till normal storlek när musen tas bort från den.

	$("textarea").on("mouseleave", function() {

		$(this).animate({"height": "120px"}, 600);	
		$(this).animate({"width": "200px"}, 600);
	});

	$("#copy").on("mouseenter", function() {

		$(this).animate({"top":"-10px"});
 		$(this).animate({"left":"-260px"}, 200);
 		$(this).animate({"top":"0px"});
 		$(this).animate({"left":"0px"}, 200);

	});

	$("footer").on("mouseenter", function() {

		$("footer").animate({"top":"-20px"}, 200);
		$("footer").animate({"top":"20px"}, 200);
		$("footer").animate({"top":"0px"}, 500);

	});

	//Ändrar bakgrunds bild på sidan om du klickar på h3 med klassen left.
	$(".left h3").click(function() {

		$("body").css("background-image", "url(img/html-background.jpg");
		$("h1").css("color", "white");

	});

	//Ändrar till en annan bakgrundsbild när du klickar på h3 elemnentet med klassen right.
	$(".right h3").click(function() {

		$("body").css("background-image", "url(img/back.jpg");
		$("h1").css("color", "black");

	});

	//
	$("#one").click(function() {

		$("#imgone").attr("src", "img/brant.jpg");
		$("#imgtwo").attr("src", "img/qotsa.jpg");
		$("#imgthree").attr("src", "img/qotsa2.jpg");

	});

	$("#two").click(function() {

		$(".rightimg").css("border-radius", "100px");

	});

	//Gör elementet med id three klickbart
	$("#three").click(function() {

		$(".rightimg").css("position", "relative");
		$(".rightimg").animate({"left":"-500px"}, 400);
		$(".rightimg").animate({"left":"20px"}, 200);
		$(".rightimg").animate({"left":"0px"}, 1000);

	});

	
	$(".center").click(function() {

		$("body").css("background-image", "url(img/wood.jpg");
		$("h1").css("color", "white");

	});

	//Gör så att img taggarna försvinner om du klickar på dom.
	$("img").click(function() {

		$(this).fadeOut(500);

	});

	$("header").dblclick(function() {

		var temp1;
		var temp2;

		//lagra innehållet i left klassen i temp1 och right klassen i temp2.
		temp1 = $(".left").detach();
		temp2 = $(".right").detach();

		//lägg sedan till värdet i variablerna på motsatta platser med prepend och append.
		$(".content").prepend(temp2);
		$(".content").append(temp1);

	});

});

