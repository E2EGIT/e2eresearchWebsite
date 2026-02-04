function shuffle(myArray) {
	    var currentindx = myArray.length,
	        tempryValue, randmIndx;

	    while (0 !== currentindx) {
	        randmIndx = Math.floor(Math.random() * currentindx);
	        currentindx -= 1;
	        tempryValue = myArray[currentindx];
	        myArray[currentindx] = myArray[randmIndx];
	        myArray[randmIndx] = tempryValue;
	    }
	    return myArray;
	}

	function getMealOrder() {
	    var brwsraftr = "-moz-|-ms-|-o-|-webkit-";
	    var bwsrversnaftr = brwsraftr.split("|");
	    listColor_after(aaftrelistlnrgradnt, bwsrversnaftr);
	    document.getElementById('mealitems').value = $("#meallist").sortable("toArray");
	}

	function getStarchOrder() {
	    var brwsraftr = "-moz-|-ms-|-o-|-webkit-";
	    var bwsrversnaftr = brwsraftr.split("|");

	    listColor_before(abefrelistlnrgradnt, bwsrversnaftr);
	}

	function getOrder(flip) {
	    var brwsraftr = "-moz-|-ms-|-o-|-webkit-";
	    var bwsrversnaftr = brwsraftr.split("|");
	    if (!flip) {
	        $(".container").append("<div class='arrowleft'><img src='image/arrow_topbttm.png'/></div><div id='mealdiv' class='mealclass'></div><div id='midElemnt' class='lg'><div id='arrowtxt'>Please drag the element... to the left.</div><div id='arrowimg'><img src='image/move_leftRight_icon.png'/></div></div><div id='starchdiv' class='clearfix'></div><div style='clear:both;'></div>");
	        $("#mealdiv").append("<div class='hintText1'>" + minTxt + "</div> <div class='hintText2'>" + maxTxt + "</div><ul id='meallist'></ul>");
	        $("#starchdiv").append("<ul id='starchlist' class='clearfix'></ul>");
	        $(".container").append("<div id='midElemnt' class='sm'><div id='arrowtxt'>Please drag the element... to the left.</div><div id='arrowimg'><img src='image/move_leftRight_icon.png'/></div></div>");
	    } else {
	        $(".container").append("<div id='starchdiv' class='clearfix'></div><div id='midElemnt'><div id='arrowtxt'>Please drag the element... to the right.</div><div id='arrowimg'><img src='image/move_leftRight_icon.png'/></div></div><div id='mealdiv' class='mealclass'></div><div class='arrowleft' ><img src='image/arrow_topbttm.png'/></div><div style='clear:both;'></div>");
	        $("#mealdiv").append("<div class='hintText1'>" + minTxt + "</div> <div class='hintText2'>" + maxTxt + "</div><ul id='meallist' style='float:left;'></ul>");
	        $("#starchdiv").append("<ul id='starchlist' style='float:left;'></ul>");
	        $(".container").append("<div id='midElemnt' class='sm'><div id='arrowtxt'>Please drag the element... to the left.</div><div id='arrowimg'><img src='image/move_leftRight_icon.png'/></div></div>");
	    }

	    for (var i = 1; i <= productRange.length; i++) {
	        if (image == 0)
	            $("#starchlist").append("<li id='" + i + "' class='ui-state-default'><div class='labelCl'><span class='listOrder'><p>" + i + "</p></span></div><span class='stsmentText'>" + productRange[i - 1] + "</span></li>");
	        else if (image == 1)
	            $("#starchlist").append("<li id='" + i + "' class='ui-state-default'><div class='labelCl'><span class='listOrder'><p>" + i + "</p></span></div><span class='stmentImg' ><img src='image/" + productImg[i - 1] + "' style='width:" + imageW + "px; height:" + imageH + "px;'/></span></li>");
	        else if (image == 2)
	            $("#starchlist").append("<li id='" + i + "' class='ui-state-default'><div class='labelCl'><span class='listOrder'><p>" + i + "</p></span></div><span class='stmentImg'><img src='image/" + productImg[i - 1] + "' style='width:" + imageW + "px; height:" + imageH + "px;'/></span><span class='stsmentText'>" + productRange[i - 1] + "</span></li>");
	    }
	    listColor_before(abefrelistlnrgradnt, bwsrversnaftr)
	}


	function listColor_before(abefrelistlnrgradnt, bwsrversnaftr) {
	    for (var i = 0; i < bwsrversnaftr.length; i++) {
	        $("#starchlist .ui-state-default").css({ 'border': '1px solid' + listbodrcolor });
	    }
	}

	function listColor_after(aaftrelistlnrgradnt, bwsrversnaftr) {
	    for (var i = 0; i < bwsrversnaftr.length; i++) {
	        $("#meallist .ui-state-default").css({ 'border': '1px solid' + listbodrcolor });
	    }
	}

	$("document").ready(function() {
	    if (image == 0) imageH = 1.23 + 'em';

	    productRange = producttxt.split("|");
	    if (randomization) shuffle(productRange);
	    productImg = productimg.split("|");
	    abefrelistlnrgradnt = befrelistlnrgradnt.split("|");
	    aaftrelistlnrgradnt = aftrelistlnrgradnt.split("|");
	    getOrder(flip);

	    if (!lft_arrow) {
	        $(".arrowleft").addClass("encrclecls");
	        $(".container").css({ 'width': 885 + 'px' });
	    } else {
	        $(".container").css({ 'width': 920 + 'px' });
	    }

	    if (!encirclednmbr)
	        $(".labelCl").addClass("encrclecls");


	    var allListHeight = $("#starchlist").height();
	    $("#meallist").css({ height: allListHeight });
	    //$("#starchlist").css({ height: allListHeight });
	    $(".stsmentText, .labelCl").css({ height: imageH });
	    var midHight = (allListHeight - $("#midElemnt").height()) / 2 - 40;
	    $("#midElemnt").css({ 'margin-top': midHight + 'px' })



	    $(window).resize(function() {
	        var allListHeight = $("#starchlist").height();
	        $("#meallist").css({ height: allListHeight });
	        //$("#starchlist").css({ height: allListHeight });
	        $(".stsmentText, .labelCl").css({ height: imageH });
	        var midHight = (allListHeight - $("#midElemnt").height()) / 2 - 40;
	        $("#midElemnt").css({ 'margin-top': midHight + 'px' })
	    });
	    $(function() {
	        $("#starchlist").sortable({
	            cursor: 'move',
	            update: function() { getStarchOrder(); },
	            connectWith: "#meallist",
	        });
	        $("#meallist").sortable({
	            cursor: 'move',
	            update: function() { getMealOrder(); },
	            connectWith: "#meatlist,#starchlist",
	        });
	    });


	}); // JavaScript Document