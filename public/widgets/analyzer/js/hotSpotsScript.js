// JavaScript Document
var sliderChange=98; 


$(document).ready(function(){
var containerWid=WidthStr;
var containerHid=HeightStr;
var imagesUrlArr=imagesUrl.split("|");
	
var Storyboard_1Arr=Storyboard_1.split("|");
var Greencoardinate=Storyboard_1Arr[0].split(",");
var Redcoardinate=Storyboard_1Arr[1].split(",");


	$(".active").removeClass("active");
	$("#removepoint").addClass("active");

	 $("#green").click(function() {
		$(".active").removeClass("active");
		$("#green").addClass("active");
		$(".opacityCss").remove();
		GreenCordinate(Greencoardinate);
		$(".opacityCss").css({opacity:sliderChange/100});
	 });
	
	 $("#red").click(function() {
		$(".active").removeClass("active");
		$("#red").addClass("active");
		$(".opacityCss").remove();
		RedCordinate(Redcoardinate);
		$(".opacityCss").css({opacity:sliderChange/100});
	});
	
	 $("#removepoint").bind('click', function() {
		$(".active").removeClass("active");
		$("#removepoint").addClass("active");
		$(".opacityCss").remove();
		GreenCordinate(Greencoardinate);
		RedCordinate(Redcoardinate);
		$(".opacityCss").css({opacity:sliderChange/100});

		
	});	


$("#countryData").change(function() {

	if( $('option:selected', $(this)).val() == "1" ){
		$(".contantBlock").css({width:(740+2)});
		$(".mainContainer").css({width:740, height:512});
		$(".mainContainer").html('<div class="imgBlock" style="overflow:hidden; background:url('+imagesUrlArr[0]+') no-repeat; width:'+740+'px; height:'+512+'px;"></div><div class="clearAll"></div>');
		Greencoardinate=Storyboard_1Arr[0].split(",");
		Redcoardinate=Storyboard_1Arr[1].split(",");

		$(".active").removeClass("active");
		$("#removepoint").addClass("active");
		$(".opacityCss").remove();
		GreenCordinate(Greencoardinate);
		RedCordinate(Redcoardinate);
		$("#slider").slider({
		value:98,
    	});	
	}
	if( $('option:selected', $(this)).val() == "2" ){
		$(".contantBlock").css({width:(514+2)});
		$(".mainContainer").css({width:512, height:719});
		$(".mainContainer").html('<div class="imgBlock" style="overflow:hidden; background:url('+imagesUrlArr[1]+') no-repeat; width:'+512+'px; height:'+719+'px;"></div><div class="clearAll"></div>');
		var Storyboard_2Arr=Storyboard_2.split("|");
		Greencoardinate=Storyboard_2Arr[0].split(",");
		Redcoardinate=Storyboard_2Arr[1].split(",");
		$(".active").removeClass("active");
		$("#removepoint").addClass("active");
		$(".opacityCss").remove();
		GreenCordinate(Greencoardinate);
		RedCordinate(Redcoardinate);
		$("#slider").slider({
		value:98,
    	});	
	}
	
	if( $('option:selected', $(this)).val() == "3" ){
		$(".contantBlock").css({width:(511+2)});
		$(".mainContainer").css({width:511, height:646});
		$(".mainContainer").html('<div class="imgBlock" style="overflow:hidden; background:url('+imagesUrlArr[2]+') no-repeat; width:'+511+'px; height:'+646+'px;"></div><div class="clearAll"></div>');
		var Storyboard_3Arr=Storyboard_3.split("|");
		Greencoardinate=Storyboard_3Arr[0].split(",");
		Redcoardinate=Storyboard_3Arr[1].split(",");
		$(".active").removeClass("active");
		$("#removepoint").addClass("active");
		$(".opacityCss").remove();
		GreenCordinate(Greencoardinate);
		RedCordinate(Redcoardinate);
		$("#slider").slider({
		value:98,
    	});	
	}

	if( $('option:selected', $(this)).val() == "4" ){
		$(".contantBlock").css({width:(515+2)});
		$(".mainContainer").css({width:515, height:720});
		$(".mainContainer").html('<div class="imgBlock" style="overflow:hidden; background:url('+imagesUrlArr[3]+') no-repeat; width:'+515+'px; height:'+720+'px;"></div><div class="clearAll"></div>');
		var Storyboard_4Arr=Storyboard_4.split("|");
		Greencoardinate=Storyboard_4Arr[0].split(",");
		Redcoardinate=Storyboard_4Arr[1].split(",");
		$(".active").removeClass("active");
		$("#removepoint").addClass("active");
		$(".opacityCss").remove();
		GreenCordinate(Greencoardinate);
		RedCordinate(Redcoardinate);
		$("#slider").slider({
		value:98,
    	});	
	}
	
	if( $('option:selected', $(this)).val() == "5" ){
		$(".contantBlock").css({width:(550+2)});
		$(".mainContainer").css({width:550, height:760});
		$(".mainContainer").html('<div class="imgBlock" style="overflow:hidden; background:url('+imagesUrlArr[4]+') no-repeat; width:'+550+'px; height:'+760+'px;"></div><div class="clearAll"></div>');
		var Storyboard_5Arr=Storyboard_5.split("|");
		Greencoardinate=Storyboard_5Arr[0].split(",");
		Redcoardinate=Storyboard_5Arr[1].split(",");
		$(".active").removeClass("active");
		$("#removepoint").addClass("active");
		$(".opacityCss").remove();
		GreenCordinate(Greencoardinate);
		RedCordinate(Redcoardinate);
		$("#slider").slider({
		value:98,
    	});	
	}
	
	if( $('option:selected', $(this)).val() == "6" ){
		$(".contantBlock").css({width:(607+2)});
		$(".mainContainer").css({width:607, height:859});
		$(".mainContainer").html('<div class="imgBlock" style="overflow:hidden; background:url('+imagesUrlArr[5]+') no-repeat; width:'+607+'px; height:'+859+'px;"></div><div class="clearAll"></div>');
		var Storyboard_6Arr=Storyboard_6.split("|");
		Greencoardinate=Storyboard_6Arr[0].split(",");
		Redcoardinate=Storyboard_6Arr[1].split(",");
		$(".active").removeClass("active");
		$("#removepoint").addClass("active");
		$(".opacityCss").remove();
		GreenCordinate(Greencoardinate);
		RedCordinate(Redcoardinate);
		$("#slider").slider({
		value:98,
    	});	
	}
	
	if( $('option:selected', $(this)).val() == "7" ){
		$(".contantBlock").css({width:(637+2)});
		$(".mainContainer").css({width:637, height:880});
		$(".mainContainer").html('<div class="imgBlock" style="overflow:hidden; background:url('+imagesUrlArr[6]+') no-repeat; width:'+637+'px; height:'+880+'px;"></div><div class="clearAll"></div>');
		var Storyboard_7Arr=Storyboard_7.split("|");
		Greencoardinate=Storyboard_7Arr[0].split(",");
		Redcoardinate=Storyboard_7Arr[1].split(",");
		$(".active").removeClass("active");
		$("#removepoint").addClass("active");
		$(".opacityCss").remove();
		GreenCordinate(Greencoardinate);
		RedCordinate(Redcoardinate);
		$("#slider").slider({
		value:98,
    	});	
	}
	
	if( $('option:selected', $(this)).val() == "8" ){
		$(".contantBlock").css({width:(642+2)});
		$(".mainContainer").css({width:642, height:877});
		$(".mainContainer").html('<div class="imgBlock" style="overflow:hidden; background:url('+imagesUrlArr[7]+') no-repeat; width:'+642+'px; height:'+877+'px;"></div><div class="clearAll"></div>');
		var Storyboard_8Arr=Storyboard_8.split("|");
		Greencoardinate=Storyboard_8Arr[0].split(",");
		Redcoardinate=Storyboard_8Arr[1].split(",");
		$(".active").removeClass("active");
		$("#removepoint").addClass("active");
		$(".opacityCss").remove();
		GreenCordinate(Greencoardinate);
		RedCordinate(Redcoardinate);
		$("#slider").slider({
		value:98,
    	});	
	}
	
	if( $('option:selected', $(this)).val() == "9" ){
		$(".contantBlock").css({width:(638+2)});
		$(".mainContainer").css({width:638, height:884});
		$(".mainContainer").html('<div class="imgBlock" style="overflow:hidden; background:url('+imagesUrlArr[8]+') no-repeat; width:'+638+'px; height:'+884+'px;"></div><div class="clearAll"></div>');
		var Storyboard_9Arr=Storyboard_9.split("|");
		Greencoardinate=Storyboard_9Arr[0].split(",");
		Redcoardinate=Storyboard_9Arr[1].split(",");
		$(".active").removeClass("active");
		$("#removepoint").addClass("active");
		$(".opacityCss").remove();
		GreenCordinate(Greencoardinate);
		RedCordinate(Redcoardinate);
		$("#slider").slider({
		value:98,
    	});	
	}
	
	if( $('option:selected', $(this)).val() == "10" ){
		$(".mainContainer").css({width:744, height:418});
		$(".mainContainer").html('<div class="imgBlock" style="overflow:hidden; background:url('+imagesUrlArr[9]+') no-repeat; width:'+744+'px; height:'+418+'px;"></div><div class="clearAll"></div>');
		var Storyboard_10Arr=Storyboard_10.split("|");
		Greencoardinate=Storyboard_10Arr[0].split(",");
		Redcoardinate=Storyboard_10Arr[1].split(",");
		$(".active").removeClass("active");
		$("#removepoint").addClass("active");
		$(".opacityCss").remove();
		GreenCordinate(Greencoardinate);
		RedCordinate(Redcoardinate);
		$("#slider").slider({
		value:98,
    	});	
	}

	if( $('option:selected', $(this)).val() == "11" ){
		$(".mainContainer").css({width:744, height:418});
		$(".mainContainer").html('<div class="imgBlock" style="overflow:hidden; background:url('+imagesUrlArr[10]+') no-repeat; width:'+744+'px; height:'+418+'px;"></div><div class="clearAll"></div>');
		var Storyboard_11Arr=Storyboard_11.split("|");
		Greencoardinate=Storyboard_11Arr[0].split(",");
		Redcoardinate=Storyboard_11Arr[1].split(",");
		$(".active").removeClass("active");
		$("#removepoint").addClass("active");
		$(".opacityCss").remove();
		GreenCordinate(Greencoardinate);
		RedCordinate(Redcoardinate);
		$("#slider").slider({
		value:98,
    	});	
	}
	
	if( $('option:selected', $(this)).val() == "12" ){
		$(".mainContainer").css({width:744, height:418});
		$(".mainContainer").html('<div class="imgBlock" style="overflow:hidden; background:url('+imagesUrlArr[11]+') no-repeat; width:'+744+'px; height:'+418+'px;"></div><div class="clearAll"></div>');
		var Storyboard_12Arr=Storyboard_12.split("|");
		Greencoardinate=Storyboard_12Arr[0].split(",");
		Redcoardinate=Storyboard_12Arr[1].split(",");
		$(".active").removeClass("active");
		$("#removepoint").addClass("active");
		$(".opacityCss").remove();
		GreenCordinate(Greencoardinate);
		RedCordinate(Redcoardinate);
		$("#slider").slider({
		value:98,
    	});	
	}

	if( $('option:selected', $(this)).val() == "13" ){
		$(".mainContainer").css({width:744, height:418});
		$(".mainContainer").html('<div class="imgBlock" style="overflow:hidden; background:url('+imagesUrlArr[12]+') no-repeat; width:'+744+'px; height:'+418+'px;"></div><div class="clearAll"></div>');
		var Storyboard_13Arr=Storyboard_13.split("|");
		Greencoardinate=Storyboard_13Arr[0].split(",");
		Redcoardinate=Storyboard_13Arr[1].split(",");
		$(".active").removeClass("active");
		$("#removepoint").addClass("active");
		$(".opacityCss").remove();
		GreenCordinate(Greencoardinate);
		RedCordinate(Redcoardinate);
		$("#slider").slider({
		value:98,
    	});	
	}
	
	if( $('option:selected', $(this)).val() == "14" ){
		$(".mainContainer").css({width:744, height:418});
		$(".mainContainer").html('<div class="imgBlock" style="overflow:hidden; background:url('+imagesUrlArr[13]+') no-repeat; width:'+744+'px; height:'+418+'px;"></div><div class="clearAll"></div>');
		var Storyboard_14Arr=Storyboard_14.split("|");
		Greencoardinate=Storyboard_14Arr[0].split(",");
		Redcoardinate=Storyboard_14Arr[1].split(",");
		$(".active").removeClass("active");
		$("#removepoint").addClass("active");
		$(".opacityCss").remove();
		GreenCordinate(Greencoardinate);
		RedCordinate(Redcoardinate);
		$("#slider").slider({
		value:98,
    	});	
	}
	
	if( $('option:selected', $(this)).val() == "15" ){
		$(".mainContainer").css({width:744, height:418});
		$(".mainContainer").html('<div class="imgBlock" style="overflow:hidden; background:url('+imagesUrlArr[14]+') no-repeat; width:'+744+'px; height:'+418+'px;"></div><div class="clearAll"></div>');
		var Storyboard_15Arr=Storyboard_15.split("|");
		Greencoardinate=Storyboard_15Arr[0].split(",");
		Redcoardinate=Storyboard_15Arr[1].split(",");
		$(".active").removeClass("active");
		$("#removepoint").addClass("active");
		$(".opacityCss").remove();
		GreenCordinate(Greencoardinate);
		RedCordinate(Redcoardinate);
		$("#slider").slider({
		value:98,
    	});	
	}
	
	
	
 });
	
	
	$(".contantBlock").css({width:(containerWid+2)});
	$(".mainContainer").css({width:containerWid, height:containerHid});
	$(".mainContainer").html('<div class="imgBlock" style="overflow:hidden; background:url('+imagesUrlArr[0]+') no-repeat; width:'+WidthStr+'px; height:'+HeightStr+'px;"></div><div class="clearAll"></div>');
	var count=0;				
	

GreenCordinate(Greencoardinate);
RedCordinate(Redcoardinate);

function GreenCordinate(GreencoardinateData){
	GarrX = [];
	GarrY = [];
	for(var i=0;i<GreencoardinateData.length;i++){
		GarrX.push(GreencoardinateData[i].split(":")[0]);
		GarrY.push(GreencoardinateData[i].split(":")[1]);
		$(".imgBlock").append("<div class='opacityCss point1' style='left:"+GarrX[i]+"px; top:"+GarrY[i]+"px; z-index:"+i+"'></div>");
		if(GarrY ==0){
			$(".point1").remove();
		}
	}
	}

function RedCordinate(RedcoardinateData){
	RarrX = [];
	RarrY = [];
	for(var j=0;j<RedcoardinateData.length;j++){
		RarrX.push(RedcoardinateData[j].split(":")[0]);
		RarrY.push(RedcoardinateData[j].split(":")[1]);
		$(".imgBlock").append("<div class='opacityCss point2' style='left:"+RarrX[j]+"px; top:"+RarrY[j]+"px; z-index:"+j+"'></div>");
		if(RarrY ==0){
			$(".point2").remove();
		}
	}
	}
	
	
	
	

$('.opacityCss').css({opacity:sliderChange/100})

    $("#slider").slider({
        min: 0,
        max: 100,
        range: 'min',
		value:sliderChange,
        slide: function (event, ui) {
			$( "#amount" ).val(ui.value);
			$('.opacityCss').css({opacity:ui.value/100})
			sliderChange=ui.value;
        }
    });
	

});
//# sourceMappingURL=hotSpotsScript.js.map