$(document).ready(function () {
  let browserInfo = { isSafari, isChrome, isFirefox, isEdge, isOpera };
  let recordedBlobs;
  var recorder; // globally accessible;
  let userAgent = window.navigator.userAgent;
  var connections;
  var second = 1;
  var hour = 0;
  var minute = 0;
  var minimumRecordTime = minimumRecording * 1000;
  var maximumRecordTime = maxRecording + 0.4 * 1000;
  var visibleButtonOnTime = 1;
  var videoPathLink =
    "https://raven.e2eresearch.com/video-transcription/api/view";
  var apiLink =
    "https://raven.e2eresearch.com/video-transcription/api/file-sharing/upload-files";
  //   var indicatorPrecent = (minimumRecording * 100) / maxRecording;
  //   $(".p-indicator").css({ left: `${indicatorPrecent - 0.5}%` });
  // start camera button

  $(".main-container").append(`<div class="tool-details-container">
<div class="video_container">
  <video id="recorder" autoplay playsinline loop muted></video>
  <video
    id="recorded"
    class="blurback"
    playsinline
    controls="true"
    controlsList="nodownload noplaybackrate foobar"
    disablePictureInPicture
  ></video>
  <div class="recording-time-frame hide-container">
    <div class="recording-text">
      <span class="recording-dot"></span> <span>REC</span>
    </div>
    <div class="cus-arrow top-left-arrow"></div>
    <div class="cus-arrow top-right-arrow"></div>
    <div class="cus-arrow bottom-left-arrow"></div>
    <div class="cus-arrow bottom-right-arrow"></div>
    <div class="counting" id="clocks">
      <span id="hours">00</span>:<span id="minutes">00</span>:<span
        id="seconds"
        >00</span
      >
    </div>
  </div>
  <div class="all-action-buton gaurav ">
  <span class="endedautomatic hide-container">${automaticEndRecordingMsg}</span>
    <div class="all-action-button-container hide-container gaurav-exchange">
    
      <div class="play-button action-buton animation-button1">
        <span class="action-button-icon play-button-con">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56.434"
            height="56.434"
            viewBox="0 0 56.434 56.434"
          >
            <g
              id="Group_11"
              data-name="Group 11"
              transform="translate(-77.733 -25.755)"
            >
              <path
                id="Rectangle_16"
                data-name="Rectangle 16"
                d="M39.9,0h0a0,0,0,0,1,0,0V0A39.9,39.9,0,0,1,0,39.9H0a0,0,0,0,1,0,0v0A39.9,39.9,0,0,1,39.9,0Z"
                transform="translate(105.95 25.755) rotate(45)"
                fill="#fb6565"
              />
              <circle
                id="Ellipse_10"
                data-name="Ellipse 10"
                cx="11.823"
                cy="11.823"
                r="11.823"
                transform="translate(94.127 42.117)"
                fill="#fb6565"
                stroke="#fff"
                stroke-width="2"
              />
              <path
                id="Polygon_1"
                data-name="Polygon 1"
                d="M4.941,0,9.882,8.306H0Z"
                transform="translate(110.864 48.998) rotate(90)"
                fill="#fff"
              />
            </g>
          </svg>
        </span>
        <span class="action-button-text play-button-text"
          >${reviewBtnText}</span
        >
      </div>
      <div class="download-button action-buton animation-button2">
        <span class="action-button-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <g
              id="Icon_feather-upload"
              data-name="Icon feather-upload"
              transform="translate(3 3)"
            >
              <path
                id="Path_5"
                data-name="Path 5"
                d="M38.5,22.5v7.556a3.778,3.778,0,0,1-3.778,3.778H8.278A3.778,3.778,0,0,1,4.5,30.056V22.5"
                transform="translate(-4.5 0.167)"
                fill="none"
                stroke="#fb6565"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="6"
              />
              <path
                id="Path_6"
                data-name="Path 6"
                d="M29.389,4.5l-9.444,9.444L10.5,4.5"
                transform="translate(-2.945 8.722)"
                fill="none"
                stroke="#fb6565"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="6"
              />
              <path
                id="Path_7"
                data-name="Path 7"
                d="M18,27.167V4.5"
                transform="translate(-1 -4.5)"
                fill="none"
                stroke="#fb6565"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="6"
              />
            </g>
          </svg>
        </span>
        <span class="action-button-text">${downloadRecordtBtnText}</span>
      </div>
      <div class="re-record-button action-buton animation-button3">
        <span class="action-button-icon re-record-butto-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="37.412"
            viewBox="0 0 36 37.412"
          >
            <path
              id="Icon_open-reload"
              data-name="Icon open-reload"
              d="M17.021,0A17,17,0,1,0,29.106,29.07l-3.064-3.06A12.767,12.767,0,1,1,16.979,4.25a12.386,12.386,0,0,1,8.894,3.868L21.234,12.75H34V0L28.936,5.058A16.937,16.937,0,0,0,16.979,0Z"
              transform="translate(1 2.412)"
              fill="#fb6565"
              stroke="#fb6565"
              stroke-width="2"
            />
          </svg>
        </span>
        <span class="action-button-text">${reRecordBtnText}</span>
      </div>
      <div class="upload-button action-buton animation-button4">
        <span class="action-button-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <g
              id="Icon_feather-upload"
              data-name="Icon feather-upload"
              transform="translate(-1.5 -1.5)"
            >
              <path
                id="Path_5"
                data-name="Path 5"
                d="M38.5,22.5v7.556a3.778,3.778,0,0,1-3.778,3.778H8.278A3.778,3.778,0,0,1,4.5,30.056V22.5"
                transform="translate(0 4.667)"
                fill="none"
                stroke="#fb6565"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="6"
              />
              <path
                id="Path_6"
                data-name="Path 6"
                d="M29.389,13.944,19.944,4.5,10.5,13.944"
                transform="translate(1.556 0)"
                fill="none"
                stroke="#fb6565"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="6"
              />
              <path
                id="Path_7"
                data-name="Path 7"
                d="M18,4.5V27.167"
                transform="translate(3.5 0)"
                fill="none"
                stroke="#fb6565"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="6"
              />
            </g>
          </svg>
        </span>
        <span class="action-button-text">${uploadBtnText}</span>
      </div>
    </div>
    <div class="server-errorMessage hide-container">
     ${serverErrormsg}
    </div>
  </div>
  <div class="upload-loading hide-container">
    <div class="upload-loader-animation">
    <span class="uploading-text">Uploading... <span>
    </div>
  </div>
</div>
<div class="button-control">
  <div class="pulseAnimation start-cameraAnimation">
    <div class="start-button start-camera">
      <span class="button-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29.836"
          height="24.775"
          viewBox="0 0 29.836 24.775"
        >
          <g
            id="Icon_feather-camera"
            data-name="Icon feather-camera"
            transform="translate(-0.5 -3.5)"
          >
            <path
              id="Path_3"
              data-name="Path 3"
              d="M29.336,24.745a2.531,2.531,0,0,1-2.531,2.531H4.031A2.531,2.531,0,0,1,1.5,24.745V10.826A2.531,2.531,0,0,1,4.031,8.3H9.092l2.531-3.8h7.592l2.531,3.8h5.061a2.531,2.531,0,0,1,2.531,2.531Z"
              transform="translate(0)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <path
              id="Path_4"
              data-name="Path 4"
              d="M20.862,17.931A4.431,4.431,0,1,1,16.431,13.5,4.431,4.431,0,0,1,20.862,17.931Z"
              transform="translate(-1.013 -0.652)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </g>
        </svg>
      </span>
      <span class="button-text">${startCamBtnText}</span>
    </div>
  </div>
  <div class="pulseAnimation start-recordingAnimation hide-container">
    <div class="start-button start-recording">
      <span class="button-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="46.121"
          height="26.947"
          viewBox="0 0 46.121 26.947"
        >
          <defs>
            <filter
              id="Icon_metro-video-camera"
              x="0"
              y="0"
              width="46.121"
              height="26.947"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dy="1" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="0.5" result="blur" />
              <feFlood flood-opacity="0.2" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
            <radialGradient
              id="radial-gradient"
              cx="0.313"
              cy="0.109"
              r="0.5"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#a2a1a1" />
              <stop offset="0.556" stop-color="#4f4f4f" />
              <stop offset="1" stop-color="#363636" />
            </radialGradient>
          </defs>
          <g
            id="Group_4"
            data-name="Group 4"
            transform="translate(1.5 0.5)"
          >
            <g
              transform="matrix(1, 0, 0, 1, -1.5, -0.5)"
              filter="url(#Icon_metro-video-camera)"
            >
              <path
                id="Icon_metro-video-camera-2"
                data-name="Icon metro-video-camera"
                d="M25.057,14.036Zm-15.873,0Zm25.132,8.487V17.431c0-1.867-1.19-3.395-2.645-3.395H5.216c-1.455,0-2.645,1.528-2.645,3.395V34.4c0,1.867,1.19,3.395,2.645,3.395H31.671c1.455,0,2.645-1.528,2.645-3.395V29.312S43.932,38.989,44.9,37.8s1.146-22.7,0-23.763-10.582,8.487-10.582,8.487Z"
                transform="translate(-1.07 -13.45)"
                fill="#fff"
              />
            </g>
            <circle
              id="Ellipse_6"
              data-name="Ellipse 6"
              cx="2.5"
              cy="2.5"
              r="2.5"
              transform="translate(21.121 5.009)"
              fill="#363636"
            />
            <circle
              id="Ellipse_7"
              data-name="Ellipse 7"
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="translate(22.121 6.009)"
              fill="url(#radial-gradient)"
            />
          </g>
        </svg>
      </span>
      <span class="button-text">${startBtnText}</span>
    </div>
  </div>
  <div class="pulseAnimation stop-recordingAnimation hide-container">
    <div class="start-button stop-recording">
      <span class="button-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <rect
            id="Rectangle_20"
            data-name="Rectangle 20"
            width="30"
            height="30"
            rx="3"
            fill="#fff"
          />
        </svg>
      </span>
      <span class="button-text">${stopBtnText}</span>
    </div>
  </div>
</div>
<div class="custom-loader-container1 hide-container">
  <div class="custom-loader1"></div>
</div>
<div class="progress-Bg hide-container">
  <div class="cs-progress"><div class="progress-fill"></div>
  
  <span class="p-indicator">${minimumRecording}</span>
  </div>
</div>
<div class="bottom-base">
  <div class="userText hide-container">
    ${minimumRecordingText}
  </div>
  <div class="play-pause-container hide-container">
    <div class="back-button">
   
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<path id="Icon_material-arrow_back" data-name="Icon material-arrow_back" d="M30,16.5H11.745L20.13,8.115,18,6,6,18,18,30l2.115-2.115L11.745,19.5H30Z" transform="translate(-6 -6)" fill="#f15a5c"/>
</svg>

 </div>
    <div class="play-pause-button pause-video hide-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="54"
        viewBox="0 0 54 54"
      >
        <g id="pause" transform="translate(-5.5 -5.5)">
          <circle
            id="Ellipse_1"
            data-name="Ellipse 1"
            cx="25.5"
            cy="25.5"
            r="25.5"
            transform="translate(7 7)"
            fill="none"
            stroke="#f15a5c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          ></circle>
          <line
            id="Line_1"
            data-name="Line 1"
            y2="17"
            transform="translate(27 25)"
            fill="none"
            stroke="#f15a5c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          ></line>
          <line
            id="Line_2"
            data-name="Line 2"
            y2="17"
            transform="translate(39 25)"
            fill="none"
            stroke="#f15a5c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          ></line>
        </g>
      </svg>
    </div>
    <div class="play-pause-button play-video hide-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
      >
        <path
          id="play_icon"
          d="M15,24.75,24,18l-9-6.75ZM18,3A15,15,0,1,0,33,18,15.005,15.005,0,0,0,18,3Zm0,27A12,12,0,1,1,30,18,12.016,12.016,0,0,1,18,30Z"
          transform="translate(-3 -3)"
          stroke-width="3"
          fill="#f15a5c"
        ></path>
      </svg>
    </div>
  </div>
</div>
<div class="camera-permission-con hide-container">
  <div class="camera-permission">
    ${cameraPremissionText}
  </div>
  <div class="retryBtn" id="retryBtn">${retryBtnText}</div>
</div>
<div class="end-message hide-container">
${thanksMsg}
</div>
</div>`);

  let video = document.querySelector("#recorder");
  let recordedVideo = document.querySelector("#recorded");
  var indicatorPrecent = (minimumRecording * 100) / maxRecording;

  $(".p-indicator").css({ left: `${indicatorPrecent}%` });

  $(".start-camera").click(function (event) {
    $(".start-cameraAnimation").addClass("hide-container");
    $(".custom-loader-container1").removeClass("hide-container");
    $(".start-recordingAnimation")
      .removeClass("hide-container")
      .addClass("hoverHide");
    startCamera();
    visibleButtonOnTime = 2;
  });

  $(".start-recording").click(function (event) {
    startRecording();
    $(".start-recordingAnimation").addClass("hide-container");
    $(".stop-recordingAnimation").addClass("first-time-active");
    $(".recording-text").addClass("readyState");
    connectionStarting();
    visibleButtonOnTime = 0;
  });

  $(".stop-recording").click(function (event) {
    $(".endedautomatic").addClass("hide-container");
    actionButoonAnimation();
    recorder.stopRecording(stopRecordingCallback);
    // $("#recorded").show();
    // $("#recorder").hide();
    // recordedVideo.controls = false;
    // $(".stop-recordingAnimation ,.recording-time-frame ,.progress-Bg").addClass(
    //   "hide-container"
    // );
    // $(".userText").removeClass("hide-container");
    // $(".userText").text("");
    // $(".userText").text(actionHeadingText);
    // clearInterval(connections);
    // $(".all-action-buton").removeClass("hide-container");

    // for animation
    // $(".all-action-buton").animate({ left: "0" }, 500);
    // setTimeout(() => {
    //   $(".all-action-button-container").removeClass("hide-container");
    // }, 400);
  });

  $(".retryBtn").click(function (event) {
    visibleButtonOnTime = 1;
    $(".start-cameraAnimation").removeClass("hide-container");
    $(".start-recordingAnimation")
      .addClass("hide-container")
      .removeClass("hoverHide");
    $(".camera-permission-con ,.custom-loader-container1").addClass(
      "hide-container"
    );
  });

  $(".upload-button").click(function (event) {
    $(".endedautomatic").addClass("hide-container");
    $(".upload-loading").removeClass("hide-container");
    $(".server-errorMessage ,.all-action-button-container,.userText").addClass(
      "hide-container"
    );
    uploadVideo();
  });

  $(".download-button").click(function (event) {
    $(".server-errorMessage ").addClass("hide-container");
    downloadVideo();
  });

  $(".play-button").click(function (event) {
    setTimeout(() => {
      $(".endedautomatic").addClass("hide-container");
    }, 1000);
    resetActionButoonAnimation();
    $(".server-errorMessage").addClass("hide-container");
    playVideo();
    // $("#recorded").removeClass("blurback");
    $(".play-pause-container").removeClass("hide-container");
    $(".userText").addClass("hide-container");
    // $(".all-action-buton ,.userText").addClass("hide-container");
  });

  $(".play-video").click(function (event) {
    $(".pause-video").removeClass("hide-container");
    $(".play-video").addClass("hide-container");
    recordedVideo.play();
  });

  $(".pause-video").click(function (event) {
    $(".play-video").removeClass("hide-container");
    $(".pause-video").addClass("hide-container");
    recordedVideo.pause();
  });

  $(".back-button").click(function (avent) {
    actionButoonAnimation();
    recordedVideo.pause();
    // $(".play-video").removeClass("hide-container");
    $(".pause-video,.play-pause-container").addClass("hide-container");
    $(".userText").removeClass("hide-container");
    // $(".all-action-buton ,.userText").removeClass("hide-container");
    // $("#recorded").addClass("blurback");
  });

  $(".re-record-button").click(function (avent) {
    setTimeout(() => {
      $(".endedautomatic").addClass("hide-container");
    }, 1000);
    visibleButtonOnTime = 2;
    $(".server-errorMessage").addClass("hide-container");
    $("#minutes").text(`00`);
    $("#hours").text(`00`);
    $("#seconds").text(`00`);
    $(".progress-fill").css({ width: `${0}%` });
    recordedVideo.pause();
    recordedVideo.removeAttribute("src"); // empty source
    recordedVideo.load();
    $(".recording-text").removeClass("readyState");
    $(".start-recordingAnimation").removeClass("hide-container");
    $(".stop-recordingAnimation").removeClass("first-time-active");
    // $(".all-action-buton").addClass("hide-container");
    $("#recorded").hide().addClass("blurback");
    // $("#recorded").hide().addClass("blurback");
    $("#recorder").show();
    startCamera();
    second = 1;
    $(".userText").text("");
    $(".userText").text(minimumRecordingText);
    resetActionButoonAnimation();
  });

  onkeyPress();
  function onkeyPress() {
    $(document).on("keypress", function (event) {
      if (event.code === "Space" || event.code === "Enter") {
        if (visibleButtonOnTime == 1) {
          $(".start-camera").click();
          console.log(visibleButtonOnTime, ",visibleButtonOnTime");
        } else if (visibleButtonOnTime == 2) {
          $(".start-recording").click();
          console.log(visibleButtonOnTime, ",visibleButtonOnTime");
        }
        // do your stuff
        // $(".start-cameraAnimation").addClass("hide-container");
        // $(".custom-loader-container1").removeClass("hide-container");
        // $(".start-recordingAnimation")
        //   .removeClass("hide-container")
        //   .addClass("hoverHide");
        // startCamera();
      }
    });
  }

  // video play end
  recordedVideo.onended = function () {
    $(".play-video").removeClass("hide-container");
    $(".pause-video,.play-pause-container").addClass("hide-container");
    $(".userText").removeClass("hide-container");
    actionButoonAnimation();
    // $(".all-action-buton.userText").removeClass("hide-container");
    // $("#recorded").addClass("blurback");
    // recordedVideo.pause();
    // recordedVideo.removeAttribute("src"); // empty source
    // recordedVideo.load();
  };

  // Capture Camera
  function captureCamera(callback) {
    // $(".endedautomatic").addClass("hide-container");
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then(function (camera) {
        callback(camera);

        $(".custom-loader-container1").addClass("hide-container");
        $(".start-recordingAnimation")
          .addClass("first-time-active")
          .removeClass("hoverHide");

        $(".recording-time-frame ,.progress-Bg ,.userText").removeClass(
          "hide-container"
        );
      })
      .catch(function (error) {
        console.log(error);
        // You can check if the error is related to permission denial
        if (
          error.name === "PermissionDeniedError" ||
          error.name === "NotAllowedError"
        ) {
          // Handle permission denial
          console.log("Camera permission denied");
          $(".camera-permission-con").removeClass("hide-container");
        } else {
          // Handle other errors
          console.log("Error:", error);
          $(".camera-permission-con").removeClass("hide-container");
        }
      });
  }

  // start camera
  function startCamera() {
    captureCamera(function (camera) {
      video.srcObject = camera;

      if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
        // iPad or iPhone
        recorder = RecordRTC(camera, {
          type: "video",
          mimeType: "video/webm;codecs=h264,opus",
        });
        const constraints = {
          video: {
            width: {
              min: 320,
            },
            height: {
              min: 240,
            },
          },
        };
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(function success(stream) {
            video.srcObject = stream;
          });
      }
      // if (browserInfo.isSafari) {
      //   console.log("isSafari");
      //   recorder = RecordRTC(camera, {
      //     type: "video",
      //     // mimeType: "video/webm",
      //     mimeType: "video/mp4; codecs='avc1.424028, mp4a.40.2'",
      //   });
      //   const constraints = {
      //     video: {
      //       width: {
      //         min: 640,
      //         max: 1024,
      //       },
      //       height: {
      //         min: 280,
      //         max: 320,
      //       },
      //     },
      //   };
      //   navigator.mediaDevices
      //     .getUserMedia(constraints)
      //     .then(function success(stream) {
      //       video.srcObject = stream;
      //     });
      // }
      else {
        recorder = RecordRTC(camera, {
          type: "video",
          mimeType: "video/webm;codecs=vp8,opus",
        });
        const constraints = {
          video: {
            width: {
              min: 640,
              max: 1024,
            },
            height: {
              min: 480,
              max: 768,
            },
          },
        };
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(function success(stream) {
            video.srcObject = stream;
          });
      }
    });
  }

  const startRecording = () => {
    this.disabled = true;
    captureCamera(function (camera) {
      recordedBlobs = [];
      //   video.muted = true;
      //   video.volume = 0;
      video.srcObject = camera;

      if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
        // iPad or iPhone
        recorder = RecordRTC(camera, {
          type: "video",
          mimeType: "video/webm;codecs=h264,opus",
          timeSlice: 1000, // pass this parameter
          onTimeStamp: function (timestamp, timestamps) {
            var duration = (new Date().getTime() - timestamps[0]) / 1000;
            var precentage = (Math.round(duration) * 100) / maxRecording;
            $(".progress-fill").css({ width: `${precentage}%` });
            console.log(duration, "precentage");
            if (precentage == 100) {
              setTimeout(() => {
                $(".endedautomatic").removeClass("hide-container");
              }, 800);
            }
            if (duration < 0) return;
          },
        });
      } else {
        recorder = RecordRTC(camera, {
          type: "video",
          mimeType: "video/webm;codecs=vp8,opus",
          timeSlice: 1000, // pass this parameter
          onTimeStamp: function (timestamp, timestamps) {
            var duration = (new Date().getTime() - timestamps[0]) / 1000;
            var precentage = (Math.round(duration) * 100) / maxRecording;
            $(".progress-fill").css({ width: `${precentage}%` });
            console.log(precentage, "precentage");
            if (precentage == 100) {
              setTimeout(() => {
                $(".endedautomatic").removeClass("hide-container");
              }, 800);
            }
            if (duration < 0) return;
          },
        });
      }
      // automatic stop recording
      recorder
        .setRecordingDuration(maxRecording * 1000)
        .onRecordingStopped(stopRecordingCallback);
      recorder.startRecording();
      recorder.ondataavailable = handleDataAvailable;
      recorder.camera = camera;

      // setTimeout(() => {
      //   $(".endedautomatic").removeClass("hide-container");
      //   // $(".userText").addClass("hide-container");
      // }, maximumRecordTime);

      setTimeout(() => {
        $(".stop-recordingAnimation").removeClass("hide-container");
        $(".userText").addClass("hide-container");
      }, minimumRecordTime);
    });
  };

  function getVideoBlob() {
    if (browserInfo.isSafari) {
      let blob = recorder.getBlob();
      recordedVideo.src = recordedVideo.srcObject = null;
      let url = URL.createObjectURL(blob);
      recordedVideo.src = url;

      // recordedVideo.controls = false;
      // recordedVideo.play();
    } else {
      let blob = recorder.getBlob();
      recordedVideo.src = recordedVideo.srcObject = null;
      recordedVideo.src = URL.createObjectURL(blob);
    }
  }

  function stopRecordingCallback() {
    actionButoonAnimation();
    recorder.camera.stop();
    getVideoBlob();
    recorder.camera.stop();
    clearInterval(connections);
    // $(".counting").hide();
    // $(".progress-Bg").removeClass("progress-Bg-show");
    $("#recorded").show();
    $("#recorder").hide();
    // recordedVideo.controls = false;
    $(".stop-recordingAnimation ,.recording-time-frame ,.progress-Bg").addClass(
      "hide-container"
    );
    $(".userText").removeClass("hide-container");
    $(".userText").text("");
    $(".userText").text(actionHeadingText);
  }

  function downloadVideo() {
    recorder.save("test");
  }

  function handleDataAvailable(event) {
    if (event.data && event.data.size > 0) {
      recordedBlobs.push(event.data);
    }
  }

  const uploadVideo = async () => {
    let headersList = {
      Accept: "*/*",
    };
    let bodyContent = new FormData();
    bodyContent.append("respId", respID);
    bodyContent.append("projectId", projectID);
    bodyContent.append("video", recorder?.blob, "custom-video-name.webm");
    bodyContent.append("languageCode", language);
    try {
      let response = await fetch(
        // "http://192.168.1.180:5100/api/file-sharing/upload-files",
        // "https://raven.e2eresearch.com/video-transcription/api/file-sharing/upload-files",
        apiLink,

        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );
      console.log(response.ok, "check response");
      if (!response.ok) {
        $(".upload-loading ,.all-action-buton").addClass("hide-container");
        $(".end-message").removeClass("hide-container");
        throw new Error("Network response was not OK");
      } else {
        $(".upload-loading ,.all-action-buton").addClass("hide-container");
        $(".end-message").removeClass("hide-container");
      }
      let data = await response.json();
      $(".transcript-data").text(data?.data?.transcription);
      var viddeoFielsPath = data?.data?.videoFilePath.replace("files", "");
      var videoFullPath = videoPathLink + viddeoFielsPath;
      $("#video-Path").val(videoFullPath);
      $("#flag").val(1);
    } catch (error) {
      $(".upload-loading").addClass("hide-container");
      $(".server-errorMessage ,.all-action-button-container").removeClass(
        "hide-container"
      );
      console.error("Error:", error);
    }
  };
  // download
  function downloadVideo() {
    recorder.save("test");
  }
  // play videos
  function playVideo() {
    let blob = recorder.getBlob();
    recordedVideo.src = recordedVideo.srcObject = null;
    let url = URL.createObjectURL(blob);
    recordedVideo.src = url;
    // recordedVideo.controls = false;
    // let promisePlay = recordedVideo.play();
    $(".progress-Bg").addClass("progress-Bg-show");

    // if (promisePlay !== undefined) {
    //   promisePlay
    //     .catch((error) => {
    //       // Auto-play was prevented
    //       // Show a UI element to let the user manually start playback
    //       // errorMsgElement.innerHTML = `Exception while playing: ${error}`;
    //     })
    //     .then(() => {
    //       // Auto-play started
    //     });
    // }
  }
  // counter
  function connectionStarting() {
    connections = setInterval(() => {
      if (second > 59) {
        second = 0;
      }
      if (second < 10) {
        seconds.innerHTML = "0" + second;
        console.log(second, "second1");
      } else {
        seconds.innerHTML = second;
        console.log(second, "second");
      }
      second++;
      if (second === 60) {
        minute++;
        setTimeout(() => {
          if (minute > 59) {
            hour++;
            if (hour < 0) {
              hours.innerHTML = "0" + hour;
            } else {
              hours.innerHTML = hour;
            }
            minute = 0;
          }
          if (minute < 10) {
            minutes.innerHTML = "0" + minute;
          } else {
            minutes.innerHTML = minute;
          }
        }, 1000);
      }
    }, 1000);
  }
  //animation
  function actionButoonAnimation() {
    $(".all-action-buton").animate({ left: "0" }, 500);
    setTimeout(() => {
      $(".all-action-button-container").removeClass("hide-container");
      $("#recorded").addClass("blurback");
    }, 400);
  }
  function resetActionButoonAnimation() {
    $(".all-action-buton").animate({ left: "100%" }, 500);
    setTimeout(() => {
      $(".all-action-button-container").addClass("hide-container");
      $("#recorded").removeClass("blurback");
    }, 600);
  }
});
