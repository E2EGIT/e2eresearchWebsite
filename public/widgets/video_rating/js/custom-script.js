$(document).ready(function () {
  $(".video_rating_tool").append(
    '<div class="video-container clearFix">\
      <div class="panel videoPanel">\
          <div class="video-rating-panel">\
              <video playsinline preload="auto" id="ratingVideo" poster="images/IBRANCE_IAM_cut11-HiRes.png" src="https://www.w3schools.com/tags/movie.mp4">\
      <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4">\
      <source src="https://www.w3schools.com/tags/movie.webm" type="video/webm">\
      <source src="https://www.w3schools.com/tags/movie.ogv" type="video/ogg">\
      <p>Your user agent does not support the HTML5 Video element.</p>\
      </video>\
              <div id="btnPlay" class="play" style="display: block;">\
                  <div class="play-btn-inr">\
                      <i class="fa-solid fa-play"></i>\
                  </div>\
              </div>\
              <div class="videoNavigate">\
                  <div class="btn-overlay">\
                      <div class="pausePlay_btn Play_btn"></div>\
                      <div class="pausePlay_btn Playdisabled"></div>\
                      <div class="pausePlay_btn pause_btn"></div>\
                  </div>\
                  <div class="timerlineBlock">\
                      <div class="grey-bar">\
                          <div class="blue-bar">\
                              <div class="blue-circle"></div>\
                          </div>\
                      </div>\
                  </div>\
              </div>\
          </div>\
          <div class="durationBlock">\
              <div class="remaingTimeBlock"><span id="curtimetext">00:00</span> / <span id="durtimetext">00:00</span></div>\
          </div>\
          <div class="ratingBlock" style="display:none;"></div>\
      </div>\
      <div class="rate_your_experience">\
          <div class="tool-title">' +
      ratingTitle +
      '</div>\
          <div class="respondent-info">Respondent info</div>\
          <div class="thermometer-tool"></div>\
          <noscript>\
              <div class="noscript">\
                  <span> Tool does not support this device! </span>\
              </div>\
          </noscript>\
      </div>\
  </div>\
'
  );

  $(".thermometer-tool").append(
    '<div class="parent-circel">\
  <div class="round-data-circel">\
    <div class="drow-white-circel">\
      <div class="drow-upercircel">\
        <div id="slider2" class="rs-chrome rs-control"></div>\
      </div>\
    </div>\
  </div>\
</div>'
  );

  $("#slider2").roundSlider({
    sliderType: "min-range",
    editableTooltip: false,
    radius: 72,
    width: 7,
    step: 1,
    min: 1,
    max: 3,
    value: 1,
    handleSize: 0,
    handleShape: "square",
    circleShape: "pie",
    startAngle: 315,
    tooltipFormat: changeTooltip,
  });

  $("#slider2").roundSlider({
    disabled: true,
  });

  function changeTooltip(e) {
    var val = e.value,
      speed;
    output(val);
    currentId = val;
    if (val < 20) speed = "Slow";
    else if (val < 40) speed = "Normal";
    else if (val < 70) speed = "Speed";
    else speed = "Very Speed";
    return;
  }
  function checkURL(url) {
    return url.match(/\.(jpeg|jpg|png|svg)$/) != null;
  }
  var widgetStatementArr = widgetStatement.split("|");
  if (checkURL(widgetStatementArr[0])) {
    $(".rs-overlay").append(
      '<div class="disagree "> <img src="' +
        widgetStatement.split("|")[0] +
        '"/></div><div class="agree"> <img src="' +
        widgetStatement.split("|")[1] +
        '"/></div><div class="stronglyAgree"> <img src="' +
        widgetStatement.split("|")[2] +
        '"/></div>'
    );
  } else {
    $(".rs-overlay").append(
      '<div class="disagree disagree-text"><p>' +
        widgetStatement.split("|")[0] +
        '</p> </div><div class="agree agree-text"> <p>' +
        widgetStatement.split("|")[1] +
        '</p</div></div><div class="stronglyAgree stronglyAgree-text"><p>' +
        widgetStatement.split("|")[2] +
        "</p</div>"
    );
  }

  // $(".rs-container").append(
  //   '<div class="first-line icon-line "></div><div class="sec-line icon-line"></div><div class="third-line icon-line"></div><div class="four-line icon-line"></div><div class="five-line icon-line"></div><div class="six-line icon-line"><div class="Neutral">Neutral</div></div><div class="seven-line icon-line"></div><div class="eight-line icon-line"></div><div class="nine-line icon-line"></div><div class="ten-line icon-line"></div><div class="eleven-line icon-line"></div>'
  // );

  if (backpunchData != "") {
    if (backpunchData <= 100) {
      $("#slider2").roundSlider({
        value: backpunchData,
      });
    }
  }
});
