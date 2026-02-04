$(document).ready(function () {
  $(".main-container").append('<div class="snowman-container"></div>');
  var questionTextArr = questionText.split("|");
 
  var preCodeArr = preCode.split("|");
  $(".snowman-container").append(
    ' <div class="resize-container">\
    <div class="mess-l">\
      <div class="msg-container orange-top">\
        <div class="chat-conatiner o-line">\
          <div class="question question-1">' +
      questionTextArr[0] +
      '</div>\
         <div class="textarea-container orange"> <textarea pre-code=' +
      preCodeArr[0] +
      ' class="scroll-textarea" placeholder="Click to enter your answer." name="textarea"></textarea></div>\
        </div>\
      </div>\
      <div class="msg-container eastern-top"><div class="chat-conatiner pantone-line"><div class="question question-2">' +
      questionTextArr[3] +
      '</div><div class="textarea-container eastern-blue"> <textarea class="textarea2  scroll-textarea" placeholder="Click to enter your answer." name="textarea" pre-code="' +
      preCodeArr[3] +
      '"></textarea></div></div></div></div>\
    <div class="snowman">&nbsp;</div>\
    <div class="mess-r">\
      <div class="msg-container light-yellow-top">\
        <div class="chat-conatiner r-line">\
          <div class="question question-3">' +
      questionTextArr[1] +
      '</div>\
      <div class="textarea-container light-yellow"><textarea\
            class="textarea1 scroll-textarea"\
            placeholder="Click to enter your answer." name="textarea"\
            pre-code=' +
      preCodeArr[1] +
      '></textarea></div>\
        </div>\
      </div>\
      <div class="msg-container light-blue-top">\
        <div class="chat-conatiner b-line">\
          <div class="question question-4">' +
      questionTextArr[2] +
      '</div>\
      <div class="textarea-container light-green"><textarea\
            class="textarea3 scroll-textarea"\
            placeholder="Click to enter your answer." name="textarea" \
            pre-code=' +
      preCodeArr[2] +
      "></textarea></div\
        </div>\
      </div>\
    </div>\
  </div>"
  );
  if (preCodeArr.length == 2) {
    $(".light-blue-top").css({
      visibility: "hidden",
    });
  }
  if (preCodeArr.length == 1) {
    $(".light-blue-top").css({
      visibility: "hidden",
    });
    $(".r-line").css({
      visibility: "hidden",
    });
  }
  $(
    `[pre-code=${preCodeArr[0]}], [pre-code=${preCodeArr[1]}] ,  [pre-code=${preCodeArr[2]}], [pre-code=${preCodeArr[3]}]`
  ).keyup(function (val1, val2, val3, val4) {
    val1 = $(`[pre-code=${preCodeArr[0]}]`).val();
    val2 = $(`[pre-code=${preCodeArr[1]}]`).val();
    val3 = $(`[pre-code=${preCodeArr[2]}]`).val();
    val4 = $(`[pre-code=${preCodeArr[3]}]`).val();
    runTimeOutPut(val1, val2, val3, val4);
  });
  $(
    `[pre-code=${preCodeArr[0]}], [pre-code=${preCodeArr[1]}] ,  [pre-code=${preCodeArr[2]}], [pre-code=${preCodeArr[3]}]`
  ).change(function (val1, val2, val3, val4) {
    val1 = $(`[pre-code=${preCodeArr[0]}]`).val();
    val2 = $(`[pre-code=${preCodeArr[1]}]`).val();
    val3 = $(`[pre-code=${preCodeArr[2]}]`).val();
    val4 = $(`[pre-code=${preCodeArr[3]}]`).val();
    runTimeOutPut(val1, val2, val3, val4);
  });
  $(
    `[pre-code=${preCodeArr[0]}], [pre-code=${preCodeArr[1]}] ,  [pre-code=${preCodeArr[2]}], [pre-code=${preCodeArr[3]}]`
  ).on("input", function (val1, val2, val3, val4) {
    val1 = $(`[pre-code=${preCodeArr[0]}]`).val();
    val2 = $(`[pre-code=${preCodeArr[1]}]`).val();
    val3 = $(`[pre-code=${preCodeArr[2]}]`).val();
    val4 = $(`[pre-code=${preCodeArr[3]}]`).val();
    runTimeOutPut(val1, val2, val3, val4);
  });
  $("textarea").bind("keyup blur", function () {
    var node = $(this);
    node.val(node.val());
  });
  if (backpunch) {
    var val1 = backpunchData1.split("^")[1];
    var val2 = backpunchData2.split("^")[1];
    var val3 = backpunchData3.split("^")[1];
    var val4 = backpunchData4.split("^")[1];
    if (val1 == undefined) {
      val1 = "";
    }
    if (val2 == undefined) {
      val2 = "";
    }
    if (val3 == undefined) {
      val3 = "";
    }
    if (val4 == undefined) {
      val4 = "";
    }
    function backpunchTextboxData(val1, val2, val3, val4) {
      $(`[pre-code=${preCodeArr[0]}]`).val(val1);
      $(`[pre-code=${preCodeArr[1]}]`).val(val2);
      $(`[pre-code=${preCodeArr[2]}]`).val(val3);
      $(`[pre-code=${preCodeArr[3]}]`).val(val4);

      runTimeOutPut(val1, val2, val3, val4);
    }
    backpunchTextboxData(val1, val2, val3, val4);
  } else {
    output("", "", "", "", 0);
  }
  function runTimeOutPut(val1, val2, val3, val4) {
    var flagValue = 0;
    if (val1 != "" && val2 != "" && val3 != "" && val4) {
      flagValue = 1;
    }
    var str = "";
    for (let index = 0; index < preCodeArr.length; index++) {
      var val = "";
      if (index == 0) {
        val = val1;
      }
      if (index == 1) {
        val = val2;
      }
      if (index == 2) {
        val = val3;
      }
      if (index == 3) {
        val = val4;
      }
      str += `${preCodeArr[index]}:${val}`;
    }
    for (let index = 0; index < preCodeArr.length; index++) {
      var stp = $(`[pre-code=${preCodeArr[index]}]`).val();
      if (/[a-zA-Z]{2,}/.test(stp)) {
      } else {
        flagValue = 0;
      }
    }
    OutputValue(val1, val2, val3, val4, flagValue);
  }
  function OutputValue(output1, output2, output3, output4, flag) {
    if (output1 != "") {
      output1 = `${preCodeArr[0]}^${output1}`;
    }
    if (output2 != "") {
      output2 = `${preCodeArr[1]}^${output2}`;
    }
    if (output3 != "") {
      output3 = `${preCodeArr[2]}^${output3}`;
    }
    if (output4 != "") {
      output4 = `${preCodeArr[3]}^${output4}`;
    }
    output(output1, output2, output3, output4, flag);
  }
   // Dynamic changes
$(".question").css({
  "font-family": `${StatementsFontFamily}`,
  "font-weight": `${StatementsFontWeight}`,
  color: `${StatementsTextColor}`,
 
});
if ( $(window).width() > 1280 ){

  $(".question").css({
    "font-size" : `${ StatementsFontSize}px`,
  });
  }
});
