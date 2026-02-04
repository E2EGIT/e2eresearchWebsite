var ArrayList = new Array();
var Done = true;
var isMobile = false;
var flag = 0;
var intervalID;
var count = 0;
var run = false;
var paras = ratingText.split("|");
var Imgparas = ratingImg.split("|");
var ratingopt = "";
var ratingTime = "";
var countDown = "0";
var complete = "0";
var btnsize = "70";
$(document).ready(function () {
  $("#popupid").html(
    '<div class="popupblock"><div class="popupmsg"></div><div class="close" id="butclose">X</div></div>'
  );
  $(".mainBlock").html(
    '<div class="imbContainer"><div class="imgBlock" id="passingImgVal"></div></div><div class="RightMsgContainer"><div class="btnClick pulseAnimation" id="butstart">&nbsp;</div><div class="msgBlock hide"></div><div class="clearAll"></div><div id="Deactive" class="btnZblock left Deactive center disagreeIcon"></div><div id="active" class="btnZblock right Deactive center  agreeIcon" ></div><div id="DeactiveText"></div><div id="ActiveText"></div></div><div class="clearAll"></div>'
  );
  $("#Deactive").html(pressHintLeft);
  $("#active").html(pressHintRight);
  $(".btnClick").css({
    backgroundColor: btnBgColor,
    width: btnsize + "px",
    height: btnsize + "px",
  });
  if (ratingImg == "") {
    $(".imbContainer").css("display", "none");
    $(".mainBlock").css("height", "220");
  }
  isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  Play();
});

function tempOutput() {
  var ratept = ratingopt;
  var timept = ratingTime;
  var cntpoint = countDown;
  var compltepoint = complete;

  outputValue(ratept, timept, cntpoint, compltepoint);
}

function Play() {
  $(".popupmsg").html(alertMessage);
  $(".btnClick").html(startBtnText);

  $("#DeactiveText").html(strTextDisagree);
  $("#ActiveText").html(strTextAgree);

  $("#butstart").click(function () {
    flag++;
    run = true;
    $(this).addClass("hide").removeClass("pulseAnimation");

    $(".msgBlock").removeClass("hide");
    $(".btnZblock").removeClass("Deactive");
    $(".btnZblock").addClass("Active");
    createList(); // Create Image and Statement List.
    var Setvalue = shuffle().split(":");
    $("#passingImgVal").html("<img src='" + Imgparas[Setvalue[0]] + "' />");
    $(".msgBlock").html(
      "<div class='animateContainer'><span>" +
        paras[Setvalue[1]] +
        "</span></div>"
    );
    setTimeout(myVar, 10);
    intervalID = setInterval(myFunction, 10);
  });
  $("#butclose").click(function () {
    $("#popupid").addClass("hide");
  });

  $(document).keyup(function (event) {
    if (event.which == 32) {
      if (flag == 0) {
        $("#butstart").trigger("click");
        flag++;
      }
    }
  });

  if (isMobile) {
    $("#active").click(function () {
      if ($("#butstart").hasClass("hide") && Done) {
        audioHandle();
        $(this).css("cursor", "pointer");
        $(".circle-wrap,.dots-wrap").remove();
        $(".thumb").removeClass("thumb").addClass("agreeIcon");
        $("#active").removeClass("Active").addClass("Deactive");
        $("#active").addClass("thumb").removeClass("agreeIcon");
        $("#active").append(` <div class="circle-wrap">
        <div class="circle-lg"></div>
      </div>
      <div class="dots-wrap">
        <div class="dot dot--t"></div>
        <div class="dot dot--tr"></div>
        <div class="dot dot--br"></div>
        <div class="dot dot--b"></div>
        <div class="dot dot--bl"></div>
        <div class="dot dot--tl"></div>
      </div>`);
        SetValues(2, "left");
        setTimeout(() => {
          $(".circle-wrap,.dots-wrap").remove();
          $(".thumb").removeClass("thumb").addClass("agreeIcon");
        }, 1000);
      } else {
        if (run) {
          Empty();
        }
      }
    });
    $("#Deactive").click(function () {
      if ($("#butstart").hasClass("hide") && Done) {
        audioHandle();
        $(this).css("cursor", "pointer");
        $("#Deactive").removeClass("Active").addClass("Deactive");
        $(".circle-wrap,.dots-wrap").remove();
        $(".thumb").removeClass("thumb").addClass("agreeIcon");
        $("#Deactive").removeClass("Active").addClass("Deactive");
        $("#Deactive").addClass("thumb").removeClass("agreeIcon");
        $("#Deactive").append(` <div class="circle-wrap">
        <div class="circle-lg"></div>
      </div>
      <div class="dots-wrap">
        <div class="dot dot--t"></div>
        <div class="dot dot--tr"></div>
        <div class="dot dot--br"></div>
        <div class="dot dot--b"></div>
        <div class="dot dot--bl"></div>
        <div class="dot dot--tl"></div>
      </div>`);
        // SetValues(2, "left");
        SetValues(1, "right");
        setTimeout(() => {
          $(".circle-wrap,.dots-wrap").remove();
          $(".thumb").removeClass("thumb").addClass("agreeIcon");
        }, 1000);
      } else {
        if (run) {
          Empty();
        }
      }
    });
    $("#active").mouseout(function () {
      if ($("#butstart").hasClass("hide") && Done) {
        $(this).css("cursor", "pointer");
        $("#active").removeClass("Deactive").addClass("Active");
      } else {
        if (run) {
          Empty();
        }
      }
    });
    $("#Deactive").mouseout(function () {
      if ($("#butstart").hasClass("hide") && Done) {
        $(this).css("cursor", "pointer");
        $("#Deactive").removeClass("Deactive").addClass("Active");
      } else {
        if (run) {
          Empty();
        }
      }
    });
  } else {
    $(document).keyup(function (e) {
      if ($("#popupid").hasClass("hide")) {
        if ($("#butstart").hasClass("hide") && Done) {
          if (e.which == 77) {
            audioHandle();
            $(".circle-wrap,.dots-wrap").remove();
            $(".thumb").removeClass("thumb").addClass("agreeIcon");
            $("#active").removeClass("Active").addClass("Deactive");
            $("#active").addClass("thumb").removeClass("agreeIcon");
            $("#active").append(` <div class="circle-wrap">
            <div class="circle-lg"></div>
          </div>
          <div class="dots-wrap">
            <div class="dot dot--t"></div>
            <div class="dot dot--tr"></div>
            <div class="dot dot--br"></div>
            <div class="dot dot--b"></div>
            <div class="dot dot--bl"></div>
            <div class="dot dot--tl"></div>
          </div>`);
            SetValues(2, "left");
            setTimeout(() => {
              $(".circle-wrap,.dots-wrap").remove();
              $(".thumb").removeClass("thumb").addClass("agreeIcon");
            }, 1000);
          } else if (e.which == 90) {
            audioHandle();
            $("#Deactive").removeClass("Active").addClass("Deactive");
            $(".circle-wrap,.dots-wrap").remove();
            $(".thumb").removeClass("thumb").addClass("agreeIcon");
            $("#Deactive").removeClass("Active").addClass("Deactive");
            $("#Deactive").addClass("thumb").removeClass("agreeIcon");
            $("#Deactive").append(` <div class="circle-wrap">
            <div class="circle-lg"></div>
          </div>
          <div class="dots-wrap">
            <div class="dot dot--t"></div>
            <div class="dot dot--tr"></div>
            <div class="dot dot--br"></div>
            <div class="dot dot--b"></div>
            <div class="dot dot--bl"></div>
            <div class="dot dot--tl"></div>
          </div>`);
            // SetValues(2, "left");
            SetValues(1, "right");
            setTimeout(() => {
              $(".circle-wrap,.dots-wrap").remove();
              $(".thumb").removeClass("thumb").addClass("agreeIcon");
            }, 1000);
          } else {
            $("#popupid").removeClass("hide");
          }
        } else {
          Empty();
        }
      } else {
        $("#popupid").removeClass("hide");
      }
    });
    $(document).keyup(function (e) {
      if ($("#butstart").hasClass("hide") && Done) {
        if (e.which == 77) {
          $("#active").removeClass("Deactive").addClass("Active");
          console.log("gaurav1");
        } else if (e.which == 90) {
          $("#Deactive").removeClass("Deactive").addClass("Active");
        } else {
          $("#popupid").removeClass("hide");
        }
      } else {
        Empty();
      }
    });
  }
}
function Empty() {
  $(".msgBlock").addClass("hide");
  $(".btnZblock").removeClass("Deactive");
  $(".btnZblock").addClass("Deactive");
  $("#passingImgVal").html("");
}
function myFunction() {
  //$("#counterValue").val(count);
  countDown = count;
  count++;
  tempOutput();
}
function myVar() {
  $("#butclose").trigger("click");
}

function SetValues(value, SetAnimation) {
  if (currentpunchvalue != "") {
    if (SetAnimation == "left") {
      $(".animateContainer").animate(
        { right: "-500", opacity: "0", width: "750px" },
        "300",
        function () {
          if (ratingImg == "") {
            ratingopt = ratingopt + currentpunchvalue[2] + ":" + value + ", "; ////editing....1
            tempOutput();
          } else {
            ratingopt = ratingopt + currentpunchvalue + ":" + value + ", "; ////editing....2
            tempOutput();
          }
          // Set time
          var countvalue = parseInt(countDown) / 100;
          tempOutput();

          ratingTime = ratingTime + countvalue + ",";
          countDown = count = 0;
          tempOutput();
          $(".animateContainer").remove();
          RemoveIndex(ArrayList, currentpunchvalue);

          var ImageAndStatementvalue = shuffle();
          if (ImageAndStatementvalue != undefined) {
            var Setvalue = ImageAndStatementvalue.split(":");
            $("#passingImgVal").html(
              "<img src='" + Imgparas[Setvalue[0]] + "' />"
            );
            $(".msgBlock").html(
              "<div class='animateContainer '><span>" +
                paras[Setvalue[1]] +
                "</span></div>"
            );
          }
          $(".animateContainer").css({
            opacity: "0",
            transform: "scale(0.3)",
          });
          setTimeout(() => {
            $(".animateContainer").css({
              opacity: "1",
              transition: "transform 0.2s ease-in-out",
              transform: "scale(1)",
            });
          }, 10);
        }
      );
    }
    if (SetAnimation == "right") {
      $(".animateContainer").animate(
        { left: "-300", opacity: "0", width: "750px" },
        "300",
        function () {
          if (ratingImg == "") {
            ratingopt = ratingopt + currentpunchvalue[2] + ":" + value + ", "; ////editing....3
            tempOutput();
          } else {
            ratingopt = ratingopt + currentpunchvalue + ":" + value + ", "; ////editing....4
            tempOutput();
          }
          // Set time
          var countvalue = parseInt(countDown) / 100;

          ratingTime = ratingTime + countvalue + ",";
          countDown = count = 0;
          tempOutput();

          $(".animateContainer").remove();
          RemoveIndex(ArrayList, currentpunchvalue);

          var ImageAndStatementvalue = shuffle();
          if (ImageAndStatementvalue != undefined) {
            var Setvalue = ImageAndStatementvalue.split(":");
            $("#passingImgVal").html(
              "<img src='" + Imgparas[Setvalue[0]] + "' />"
            );
            $(".msgBlock").html(
              "<div class='animateContainer'><span>" +
                paras[Setvalue[1]] +
                "</span></div>"
            );
            $(".animateContainer").css({
              opacity: "0",
              transform: "scale(0.3)",
            });
            setTimeout(() => {
              $(".animateContainer").css({
                opacity: "1",
                transition: "transform 0.2s ease-in-out",
                transform: "scale(1)",
              });
            }, 10);
          }
        }
      );
    }
  }
}
function createList() {
  try {
    if (
      paras != undefined &&
      paras.length > 0 &&
      Imgparas != undefined &&
      Imgparas.length > 0
    ) {
      for (var i = 0; i < Imgparas.length; i++) {
        for (var j = 0; j < paras.length; j++) {
          ArrayList.push(i + ":" + j);
          //alert('i'+i+'j'+j);
        }
      }
    }
  } catch (ex) {}
}
function RemoveIndex(array, index) {
  //for (var i = array.length - 1; i--;) {
  //    if (array[i] == index)
  //        array.splice(i, 1);
  //}
  array.splice(array.indexOf(index), 1);
}
var currentpunchvalue = "";

function shuffle() {
  var ArrStr = "";
  if (ArrayList.length > 0) {
    if (randomizationVal == 1) {
      var min = 0;
      var max = ArrayList.length - 1;
      var random = Math.floor(Math.random() * (max - min + 1)) + min;
      currentpunchvalue = ArrStr = ArrayList[random];
      //var ot=currentpunchvalue.split("0:")
      //currentpunchvalue[2]
      // RemoveIndex(ArrayList, currentpunchvalue);
    } else {
      currentpunchvalue = ArrStr = ArrayList[0];
      // RemoveIndex(ArrayList, 0);
    }
    return ArrStr;
  } else {
    $("#popupid").removeClass("hide");
    $(".popupmsg").html(
      "<center>Exercise completed! Please click next button to continue...</center>"
    );
    currentpunchvalue = "";
    Done = false;
    //$("#EndValue").val("1");
    clearInterval(intervalID);
    complete = "1";
    tempOutput();
    Empty();
  }
}

if (!Array.indexOf) {
  Array.prototype.indexOf = function (obj, start) {
    for (var i = start || 0; i < this.length; i++) {
      if (this[i] == obj) {
        return i;
      }
    }
    return -1;
  };
}

function audioHandle(params) {
  //   <audio id="myAudio">
  //   <source src="horse.ogg" type="audio/ogg">
  //   <source src="horse.mp3" type="audio/mpeg">
  //   Your browser does not support the audio element.
  // </audio>
  $(".mainBlock").append(`<audio id="myAudio">
  <source src="audio/audio1.mp3" type="audio/mpeg" />
</audio>`);
  var x = document.getElementById("myAudio");

  x.play();

  // function pauseAudio() {
  //   x.pause();
  // }
  setTimeout(() => {
    $("#myAudio").remove();
  }, 1000);
}
