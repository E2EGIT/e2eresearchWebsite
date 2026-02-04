$(document).ready(function () {
  var actiobValue = actiobValuess.split("|")
$(".main-container").append(`<div class="flex-item-left">
<h2 id="h1Text"></h2>
<div class="display_flex">
  <div id="spanText"></div>
  <div id="image"></div>
</div>
</div>
<div class="flex-item-right"><div id="spanText2"></div></div`)
  var otp =[]
  var newarr=[];
  for (
    var i = url.split(","),
      a = lisTxt.split(","),
      l = h1.split(" "),
      t = [],
      n = spanText.split(" "),
      n1 = spanText2.split(" "),
      e = [],
      h = 0,
      o = 1,
      d = 0;
    d < a.length;
    d++
  )
  // console.log(l)
    for (var r = a[d].split(" "), p = 0; p < r.length; p++) e.push(r[p]);
  h = l.length + n.length + e.length + i.length;
  
  for (var C = 0; C < h; C++) ;
  for (var g = 0; g < l.length; g++)
    $("#h1Text").append(
      "<span class='noCk' data-info='" + o++ + "'>" + l[g] + "</span> "
    );
  for (var k = 0; k < n.length; k++)
    $("#spanText").append(
      "<span class='noCk' data-info='" + o++ + "'>" + n[k] + "</span> "
    );
  for (var l = 0; l < n1.length; l++)
    $("#spanText2").append(
      "<span class='noCk' data-info='" + o++ + "'>" + n1[l] + "</span> "
    );
  for (var c = 0; c < i.length; c++)
    $("#image").append(
      "<div class='imgnoCk' data-info='" +
        o++ +
        "'><img src='" +
        i[c] +
        "'></div></img>"
    );
    // console.log(o)
  $("span,img, .imgnoCk").click(function () {
    $("#res").val($(this).attr("data-info")),
      $(this).hasClass("noCk")
        ? ($(this).removeClass("noCk"), $(this).addClass("like"), outpuCal($(this), actiobValue[0]))
        : $(this).hasClass("like")
        ? ($(this).removeClass("like"),
          $(this).addClass("Dislike"),
          outpuCal($(this), actiobValue[1]))
        : $(this).hasClass("Dislike")
        ? ($(this).removeClass("Dislike"),
          $(this).addClass("noCk"),
          outpuCal($(this), 3))
        : $(this).hasClass("imgnoCk")
        ? ($(this).removeClass("imgnoCk"),
          $(this).addClass("imglike"),
          outpuCal($(this), actiobValue[0]))
        : $(this).hasClass("imglike")
        ? ($(this).removeClass("imglike"),
          $(this).addClass("imgdislike"),
          outpuCal($(this), actiobValue[1]))
        : $(this).hasClass("imgdislike") &&
          ($(this).removeClass("imgdislike"),
          $(this).addClass("imgnoCk"),
          outpuCal($(this), 3));
    // enableNext();
    dynamicVaraibleFunctionality();
  });
  if (backpunch == true || backpunch == "true") {
    var newBackData = outputStr.split(",")
    var backpunchArr=[];
    for (let index = 0; index < newBackData.length; index++) {
      backpunchArr.push(newBackData[index].split(":")[1])
      
    }
// console.log(backpunchArr)
    // const backpunchArr = outputStr.split(",");
    backpunchArr.forEach(function (element, index) {
      if (element == 1) {
        $("[data-info=".concat(index + 1, "]")).click();
      }

      if (element == 2) {
        $("[data-info=".concat(index + 1, "]")).click();
        $("[data-info=".concat(index + 1, "]")).click();
      }

      if (element == 3) {
        $("[data-info=".concat(index + 1, "]")).click();
        $("[data-info=".concat(index + 1, "]")).click();
        $("[data-info=".concat(index + 1, "]")).click();
      }
    });
    // enableNext();
  }

  function enableNext() {
    // var spanTxt1Arr = spanTxt1.split("|");
    //IF 1 THEN ALL SELECTION ARE MADE OD NONE OF THESE IS SELECTED OTHERWISE IT RETURNS 0
    var val = $("#res").val();
    var valArr;
    valArr = val.split(",");
    var data = 0;
    for (let i = 0; i < valArr.length; i++) {
      if (valArr[i] == "") {
        data = 1;
        flagOutput(data);
        break;
      }
    }
  }
  var  xv = h1.split(" ");
      var text1 = spanText.split(" ");
      var text2 = spanText2.split(" ");
      var ur = url.split(",")
      var all = xv.length + text1.length+text2.length+ur.length
      var newop =[]

      for (let index = 0; index < all+2; index++) {
        newop.push("") 
      }
      console.log(newop)
    function outpuCal(s, i) {
    

    var newoutput;
      var textId =s.attr("data-info")
      // t[s.attr("data-info") - 1] = i;
      // if(i== "")
      // {
      //  newoutput = ''
      // }
      // else{
      //   newoutput = `${textId}:${i}`
      // }
      // newop[s.attr("data-info") - 1] = newoutput, 
      newoutput = `${i}`
      newop[s.attr("data-info") - 1] = newoutput
      for (let index = 0; index < newop.length; index++) {
        var textId1 =s.attr("data-info")
        if(newop[index]!="" && newop[index]!=undefined){
          if(newarr.length == 0 && newop[index]!=3)
          {
            newarr.push(`${textId}:${newop[index]}`)
          }
        }
        else{
          for (let ind = 0; ind< newarr.length ; ind++) {
            if(newarr[ind].split(":")[0] == textId && newop[index]!=3){
              newarr[ind]=(`${textId}:${newop[textId-1]}`)
              break;
            }
            if(ind==newarr.length-1 && newop[index]!=3){
              newarr.push(`${textId}:${newop[index]}`)
            } 
          }
          
          if(newop[textId1-1]==3){
            for (let index1 = 0; index1 < newarr.length; index1++) {
              var textId =s.attr("data-info")
              if(newarr[index1].split(":")[0]== textId){
                newarr.splice(index1,1)
              }
              
            }
          }
        }
        
      }

      Output(newarr,0)
      console.log(newarr.length)
      if(newarr.length == o-1){
        Output(newarr,1)
      }
      // for (let index = 0; index <   newop.length; index++) {
       
      //   if( newop[index] =="")
      //   {
      //     Output(newarr,0)
      //   }
        
      // }
  }

  dynamicVaraibleFunctionality();


  function dynamicVaraibleFunctionality(){
    if ($(window).width() >= 1366) {
      $(".main-container").css({
        "width": toolWidth + "px",
      });
    }

    $(".flex-item-left").css({
      "background-color":  leftContBgcolor
    });

    $(".flex-item-right").css({
      "background-color":  rightContBgcolor
    });

    $(".flex-item-left #spanText").css({
      "color":  leftTextFontColor
    });

    $(".flex-item-right #spanText2").css({
      "color":  rightTextFontColor
    });

    $(".like").css({
      "background-color": firstClickHighlightColor,
      "border-color": firstClickHighlightColor,
    })

    $(".Dislike").css({
      "background-color": secondClickHighlightColor,
      "border-color": secondClickHighlightColor,
    })


  }
});
