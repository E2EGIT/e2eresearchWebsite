// function genieButtonOn() { $("#genie-on-off-switch").addClass("genie-btn-on"), $("#genie-on-off-switch").html("ON") }

// function genieButtonOff() { $("#genie-on-off-switch").removeClass("genie-btn-on"), $("#genie-on-off-switch").html("OFF") }
// $(document).ready(function() {
//     var a = document.getElementById("audio"),
//         b = (document.getElementById("audio").setAttribute("src", genieTypeAudio), !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)),
//         c = navigator.userAgent.toLowerCase(),
//         d = c.indexOf("android") > -1;
//     $("#animateimg").attr("src", genieTypeVoice), genieButtonOn(), b || d ? (genieButtonOff(), $("#genieimg").animate({ right: "-90px" }, 10)) : setTimeout(function() {}, 500), document.getElementById("audio").oncanplaythrough = function() { this.play(), $("#animateimg").attr("src", geniepaly) }, document.getElementById("audio").onended = function() { a.pause(), $("#animateimg").attr("src", genieTypeVoice), setTimeout(function() { $("#genieimg").animate({ right: "-262px" }, 500) }, 1e3), genieButtonOff() }, document.getElementById("audio").onplaying = function() { $("#animateimg").attr("src", geniepaly) }
// }), window.onload = function() { $(document).ready(function() { $("#genie-on-off-switch").click(function() { $("#genie-on-off-switch").toggleClass("genie-btn-on"), "OFF" == $(this).text() ? ($(this).html("ON"), setTimeout(function() { audio.currentTime = 0, audio.play() }, 500), $("#genieimg").animate({ right: "-90px" }, 500)) : ($(this).html("OFF"), audio.pause(), $("#animateimg").attr("src", genieTypeVoice), setTimeout(function() { $("#genieimg").animate({ right: "-262px" }, 500) }, 1e3)) }) }) };

function genieButtonOn() {
  $("#genie-on-off-switch").addClass("genie-btn-on");
  $("#genie-on-off-switch").html("ON");
}

function genieButtonOff() {
  $("#genie-on-off-switch").removeClass("genie-btn-on");
  $("#genie-on-off-switch").html("OFF");
}

$(document).ready(function () {
  var audio = document.getElementById("audio");
  var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
  var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;

  // Set image source
  $("#animateimg").attr("src", genieTypeVoice);

  // Initial state: genie button is ON
  genieButtonOn();

  // Handle specific device cases
  if (isSafari || isAndroid) {
    genieButtonOff();
    $("#genieimg").animate({ right: "-90px" }, 10);
  } else {
    setTimeout(function () {}, 500);
  }

  // Handle audio events
  audio.oncanplaythrough = function () {
    this.play();
    $("#animateimg").attr("src", geniepaly);
  };

  audio.onended = function () {
    audio.pause();
    $("#animateimg").attr("src", genieTypeVoice);
    setTimeout(function () {
      $("#genieimg").animate({ right: "-262px" }, 500);
    }, 1000);
    genieButtonOff();
  };

  audio.onplaying = function () {
    $("#animateimg").attr("src", geniepaly);
  };

  // Genie button click handler
  $("#genie-on-off-switch").click(function () {
    $(this).toggleClass("genie-btn-on");
    if ($(this).text() === "OFF") {
      $(this).html("ON");
      setTimeout(function () {
        audio.currentTime = 0;
        audio.play();
      }, 500);
      $("#genieimg").animate({ right: "-90px" }, 500);
    } else {
      $(this).html("OFF");
      audio.pause();
      $("#animateimg").attr("src", genieTypeVoice);
      setTimeout(function () {
        $("#genieimg").animate({ right: "-262px" }, 500);
      }, 1000);
    }
  });
});
