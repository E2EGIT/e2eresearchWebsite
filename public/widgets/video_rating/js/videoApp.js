var currentId = 0;
$(document).ready(function () {
  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;
  // Firefox 1.0+
  var isFirefox = typeof InstallTrigger !== "undefined";
  var isChrome =
    !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  var ourArr = [];
  var prvValVideo;
  var currentValVideo; /*get current time of video*/
  var videos = document.querySelectorAll("video");
  var behavior = document.querySelector("#behavior");

  var recordVal = [];
  var minutes;
  var lastsliderChange = 0;
  var videoReplay = 0; //0 means no and 1 means yes

  var backpunchDataArr = backpunchData.split(",");

  var clickValue = 0; /*Check the if the rating block has been clicked*/

  if (location.search === "?enabled=false") {
    behavior.innerHTML =
      "(module disabled everywhere via <code>?enabled=false</code>";
  } else if (location.search === "?enabled=true") {
    enableVideos(true);
    behavior.innerHTML =
      "(module enabled everywhere (whether itâ€™s necessary or not) via <code>?enabled=true</code>)";
  } else {
    enableVideos();
  }

  $(".video-container").prepend(
    "<div class='flag-box desktop'>" + flagTxt + "</div>"
  );
  if (flagHide == 0) {
    $(".flag-box.desktop").hide();
  }

  document.getElementById("ratingVideo").ontimeupdate = function () {
    var totaltime = this.duration;
    var currenttime = this.currentTime;
    var per = (currenttime * 100) / totaltime;

    $(".blue-bar").css("width", per + "%");
  };

  function showFlag() {
    setInterval(function () {
      var vid = document.getElementById("ratingVideo");
      vidCurTime = vid.currentTime;
      if (vidCurTime - lastsliderChange > flagAftr) {
        $(".flag-box.mobile").show();
        $(".flag-box.desktop").css("visibility", "visible");
        $(".flag-box.mobile,.flag-box.desktop").addClass("animate");
      } else {
        $(".flag-box.mobile").hide();
        $(".flag-box.desktop").css("visibility", "hidden");
        $(".flag-box.mobile,.flag-box.desktop").removeClass("animate");
      }
      vid.onended = function () {};
    }, 400);
  }

  function showPausePlay() {
    var vidEl = document.getElementById("ratingVideo");
    var playEl = $(".Play_btn");
    var playEl2 = $("#btnPlay"); // Video Overlay Play Icon
    var pauseEl = $(".pause_btn");
    if (vidEl.paused) {
      playEl.show();
      pauseEl.hide();
      playEl2.show();
      $("#slider2").roundSlider({
        disabled: true,
      });
      $(".agree").off("click");
      $(".disagree").off("click");
      $(".stronglyAgree").off("click");
    } else {
      playEl.hide();
      pauseEl.show();
      playEl2.hide();
      $("#slider2").roundSlider({
        disabled: false,
      });
      $(".agree").click(function () {
        $("#slider2").roundSlider({
          value: 2,
        });
      });

      $(".disagree").click(function () {
        $("#slider2").roundSlider({
          value: 1,
        });
      });

      $(".stronglyAgree").click(function () {
        $("#slider2").roundSlider({
          value: 3,
        });
      });
    }
  }

  $(".video-rating-panel").bind("click", function (e) {
    showPausePlay();
  });

  $(".play").click(function () {
    showPausePlay();
    // enableVideos();
    videos[0].play();
  });

  function enableButtons(video) {
    var playBtn = video.parentNode.querySelector(".Play_btn");
    var pauseBtn = video.parentNode.querySelector(".pause_btn");
    var fullscreenButton = video.parentNode.querySelector(".fullscreen");

    if (playBtn) {
      playBtn.addEventListener("click", function (e) {
        // console.log("clik called");
        // console.log("play caled");
        $(".errormsg").hide();
        //e.stopPropagation();
        // $("#pips-slider").slider("enable");
        $("body").removeClass("flag-disabled");
        func();
        //if (video.paused) {
        video.play();
        prvValVideo = 1;
        showPausePlay();

        // } else {
        //     video.pause();
        // }

        if (flagHide != 0) {
          showFlag();
        }
      });

      pauseBtn.addEventListener("click", function (e) {
        // console.log("pause called");
        //e.stopPropagation();
        // $("#pips-slider").slider("disable");
        // $("body").removeClass("flag-disabled");
        func();
        if (!video.paused) {
          video.pause();
          //$(".play").hide();
          prvValVideo = 1;
          showPausePlay();
        }
      });
    }

    if (fullscreenButton) {
      fullscreenButton.addEventListener("click", function () {
        video.webkitEnterFullScreen();
      });
    }
  }

  window.addEventListener(
    "load",
    function () {
      var videoloadS = document.querySelector("#ratingVideo");
      //var preloader = document.querySelector('.preloader');

      function checkLoad() {
        if (videoloadS.readyState === 4) {
          //preloader.parentNode.removeChild(preloader);
          //$(".play").show();
        } else {
          setTimeout(checkLoad, 100);
        }
      }

      checkLoad();
    },
    false
  );

  function intializePlayer() {
    // Set object references
    video = document.getElementById("ratingVideo");
    playbtn = document.getElementById("playpausebtn");
    curtimetext = document.getElementById("curtimetext");
    durtimetext = document.getElementById("durtimetext");
    video.addEventListener("timeupdate", seektimeupdate, true);
  }
  window.onload = intializePlayer;

  function seektimeupdate() {
    var curmins = Math.floor(video.currentTime / 60);
    var cursecs = Math.floor(video.currentTime - curmins * 60);
    var durmins = Math.floor(video.duration / 60);
    var dursecs = Math.floor(video.duration - durmins * 60);
    if (cursecs < 10) {
      cursecs = "0" + cursecs;
    }
    if (dursecs < 10) {
      dursecs = "0" + dursecs;
    }
    if (curmins < 10) {
      curmins = "0" + curmins;
    }
    if (durmins < 10) {
      durmins = "0" + durmins;
    }
    curtimetext.innerHTML = curmins + ":" + cursecs;
    durtimetext.innerHTML = durmins + ":" + dursecs;
  }

  // debug events
  function debugEvents(video) {
    [
      "loadstart",
      "progress",
      "suspend",
      "abort",
      "error",
      "emptied",
      "stalled",
      "loadedmetadata",
      "loadeddata",
      "canplay",
      "canplaythrough",
      "playing", // fake event
      "waiting",
      "seeking",
      "seeked",
      "ended",
      // 'durationchange',
      "timeupdate",
      "play", // fake event
      "pause", // fake event
      // 'ratechange',
      // 'resize',
      // 'volumechange',
      "webkitbeginfullscreen",
      "webkitendfullscreen",
    ].forEach(function (event) {
      video.addEventListener(event, function () {});
    });
  }

  function enableVideos(everywhere) {
    for (var i = 0; i < videos.length; i++) {
      window.makeVideoPlayableInline(
        videos[i],
        !videos[i].hasAttribute("muted"),
        !everywhere
      );
      enableButtons(videos[i]);
      debugEvents(videos[i]);
    }
  }

  $("#ratingVideo").on("ended", function () {
    $("#EndData").val("1");
    // $("#pips-slider").slider("disable");
    $("body").addClass("flag-disabled");

    if (clickValue == 1) {
      $(".Play_btn").hide();
    } else {
      $(".pause_btn").show();
    }
    setTimeout(function () {
      if ($("#EndData").val() == 1 && $("#clickval").val() == 1) {
        $("#forwardbutton").show();
        $(".video-rating-panel").unbind("click");
        $(".Play_btn").hide();
        $(".pause_btn").hide();
        $(".Playdisabled").show();
        videoReplay = 0;
      } else {
        $(".errormsg").show();
        $(".Play_btn").show();
        $(".pause_btn").hide();
        videoReplay = 1;
        showPausePlay();
      }
    }, 500);
  });

  $("#ratingVideo").on("play", function () {
    if (videoReplay == 1) {
      recordVal = [];
      $("#clickval").val("0");
      clickValue = 0;
      videoReplay = 0;
    }

    $(".ratingElement").removeAttr("style");
    $("#EndData").val("0");

    // currentId = defaultrate;
  });

  $(function () {
    var timeout;
    $(".errormsg").hide();
    var vid = document.getElementById("ratingVideo");
    $("#ratingVideo").on("playing pause", function (e) {
      var v = this;
      clearTimeout(timeout);
      minutesN = v.currentTime.toString().split(".")[0];
      performaction(minutesN, v.duration);
      if (e.type === "playing") {
        function duration() {
          minutes = v.currentTime.toString().split(".")[0];
          performaction(minutes, v.duration);
        }

        timeout = setInterval(function () {
          duration();
        }, 1000);

        setTimeout(function () {
          $("#ratingVideo").on("ended", function () {
            clearTimeout(timeout);
            $(".play").show();
          });
        }, 100);

        // setTimeout(function() {
        //     timeout = setInterval(function() {
        //         if (vid.ended) {
        //             clearInterval(timeout);
        //         } else {
        //             minutes = v.currentTime.toString().split('.')[0];
        //             performaction(minutes, v.duration);
        //         }

        //     }, 1000);
        // }, 100);
      }
    });
    var starter = false;
    function performaction(currentTime, duration) {
      if (!starter) {
        setTimeout(() => {
          starter = true;
        }, 1000);
      } else {
        recordVal.push(currentTime + ":" + currentId);
        recoreddata(recordVal);
      }
    }
  });
  // $("#pips-slider").slider({
  //     range: false,
  //     min: 1,
  //     max: 7,
  //     values: defaultrate,
  //     orientation: "vertical",
  //     step: 1,
  //     start: function() {},
  //     stop: function(event, ui) {
  //         $("#clickval").val("1");
  //         currentId = ui.value;
  //         clickValue = 1;

  //     },
  //     change: function(event, ui) {
  //         var lastchangeReading = document.getElementById("ratingVideo");
  //         lastsliderChange = Number(lastchangeReading.currentTime);

  //         currentId = ui.value;
  //         clickValue = 1;
  //         var sliderVal = ui.value;
  //         sliderVal = (sliderVal - 1) * 100 / 6;
  //         $(".slidr-hide").css("bottom", sliderVal + "%");
  //     },
  //     slide: function(event, ui) {
  //         var lastchangeReading = document.getElementById("ratingVideo");
  //         lastsliderChange = Number(lastchangeReading.currentTime);

  //         currentId = ui.value;
  //         clickValue = 1;
  //         var sliderVal = ui.value;
  //         sliderVal = (sliderVal - 1) * 100 / 6;
  //         $(".slidr-hide").css("bottom", sliderVal + "%");
  //     }
  // }).slider("pips", {
  //     first: "label",
  //     last: "label",
  //     rest: "label",
  //     step: 1,
  //     labels: false,
  //     prefix: "",
  //     suffix: ""
  // }).slider("float", {
  //     handle: true,
  //     pips: false,
  //     labels: false,
  //     prefix: "",
  //     suffix: ""
  // });

  // $("#pips-slider").on("slidechange", function(event, ui) {
  //     $("#clickval").val("1");
  //     clickValue = 1;
  //     var sliderVal = Math.round(ui.value);

  //     sliderVal = (sliderVal - 1) * 100 / 6;
  //     $(".slidr-hide").css("bottom", sliderVal + "%");
  // });

  $(".ui-slider-handle").append(
    "<div class='flag-box mobile'>" + flagTxt + "</div>"
  );
  // $("#pips-slider").slider("disable");
  $("#pips-slider").append("<div class='slider-ovrly'></div>");
  $(".slider-ovrly").append(
    "<div class='slidr-grad'></div><div class='slidr-hide'></div>"
  );
  $("body").addClass("flag-disabled");
  // $("#pips-slider").slider("value", defaultrate);

  $(document).on("click", ".ui-slider-label", function () {
    $("#clickval").val("1");
  });

  function func() {
    var vid = document.getElementById("ratingVideo");
    // var h = parseInt($("#ratingVideo").css("height"));
    // $(".video-container .panel").css({ "height": h + "px" });
    // var h = parseInt($(".video-rating-panel").css("height"));
    // $(".video-container .panel").css({ "height": h + 10 + "px" });

    // $(".very-interested").css({ top: 0 })
    // $(".neutral").css({ top: h / 2 - 20 })

    // $(".not-interested").css({ top: h - 30 })

    $(".video-container").addClass("opcity1");
  }
  func();
  $(window).resize(function () {
    func();
  });
  $(window).trigger("resize");
  $(".ui-slider-pip.ui-slider-pip-first").css("bottom", "1%");
  $(".ui-slider-pip.ui-slider-pip-last").css("bottom", "99%");
  $(".ui-slider-pip.ui-slider-pip-last .ui-slider-line").css("top", "30%");
  $(".ui-slider-pip.ui-slider-pip-first .ui-slider-line").css("top", "58%");

  setTimeout(function () {
    func();
    $(".video-container").removeAttr("style");
    dynamicVaraibleFunctionality();
  }, 100);

  $("#clickval").val("0");

  $(".agree").click(function () {
    $("#slider2").roundSlider({
      value: 2,
    });
  });

  $(".disagree").click(function () {
    $("#slider2").roundSlider({
      value: 1,
    });
  });

  $(".stronglyAgree").click(function () {
    $("#slider2").roundSlider({
      value: 3,
    });
  });

  // On window load emojis are disabled
  $(".agree").off("click");
  $(".disagree").off("click");
  $(".stronglyAgree").off("click");

  if (backpunch) backpunchLogic();

  function backpunchLogic() {
    var lastData = backpunchDataArr[backpunchDataArr.length - 1];
    var time = lastData.split(":")[0];
    var sliderVal = lastData.split(":")[1];
    console.log(backpunchData);
    $("#slider2").roundSlider({
      value: sliderVal,
    });

    var player = document.getElementById("ratingVideo");
    if (isIE) {
      player.addEventListener("canplay", function () {
        this.currentTime = Number(time) + 1;
      });
      recordVal.push(backpunchDataArr);
      // output(recordVal);
      recoreddata(recordVal);
    }

    // if(isFirefox)
    // {
    //     player.addEventListener('canplay', function() {
    //         this.currentTime = Number(time) + 1;
    //     });
    //     recordVal.push(backpunchDataArr);
    //     // output(recordVal);
    //     recoreddata(recordVal);
    // }

    player.currentTime = Number(time) + 1;
    console.log("TOP");
    recordVal.push(backpunchDataArr);
    output(recordVal);
    recoreddata(recordVal);
  }

  // dynamicVaraibleFunctionality();
  // function dynamicVaraibleFunctionality(){
  //     if ($(window).width() >= 1366) {
  //       $(".video-container").css({
  //         "width": toolWidth + "px",
  //       });
  //     }

  //     console.log("HELLOW WORD!")
  //   }

  dynamicVaraibleFunctionality();
  function dynamicVaraibleFunctionality() {
    if ($(window).width() >= 1366) {
      $(".video-container").css({
        width: toolWidth + "px",
      });

      $(".play-btn-inr").css({
        height: playBtnHeight + "px",
        width: playBtnWidth + "px",
      });

      $(".tool-title").css({
        "font-size": rateTextFontSize + "px",
      });
    }

    $(".play-btn-inr").css({
      "background-color": playBtnBgcolor,
    });

    $(".tool-title").css({
      color: rateTextFontColor,
      "font-family": rateTextFontFamily,
      "font-weight": rateTextFontWeight,
    });
  }
});
