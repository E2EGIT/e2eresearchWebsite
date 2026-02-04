$(document).ready(function () {
  // for split array
  var statementCodeArr = statementCode.split("|");
  var statmentStrArr = statementStr.split("|");
  var priceCodeArr = priceCode.split("|");

  // for add cart value

  $(".main-container").append(`<div class="slider_container">
        <div id="slider" class="slider">
          <div class="slider-content">
            <div class="slider-content-wrapper"></div>
          </div>
        </div>
      </div>`);

  function checkURL(url) {
    return url.match(/\.(jpeg|jpg|png|svg)$/) != null;
  }
  for (let index = 0; index < statementCodeArr.length; index++) {
    if (checkURL(statmentStrArr[index])) {
      $(".slider-content-wrapper").append(
        '<div class="slider-content__item dataVal' +
          index +
          ' " data-info=' +
          [index + 1] +
          '> \
      <div class="slide_img" style="background-image:url(' +
          statmentStrArr[index] +
          ');"></div>\
      <div class="price" data-info="' +
          priceCodeArr[index] +
          '">' +
          currencyVal +
          priceCodeArr[index] +
          "</div></div>"
      );
    } else {
      $(".slider-content-wrapper").append(
        '<div class="slider-content__item dataVal' +
          index +
          ' " data-info=' +
          [index + 1] +
          '> \
      <div class="slide_img slide_text">' +
          statmentStrArr[index] +
          '</div>\
      <div class="price" data-info="' +
          priceCodeArr[index] +
          '">' +
          currencyVal +
          priceCodeArr[index] +
          "</div></div>"
      );
    }
  }

  $(".slider").append(`<div class="slider-controls">
    <div class="prev-control" data-info="${highpriceVal}">${highpriceTxt}</div>
    <div class="next-control" data-info='${lowpriceVal}'>${lowpriceTxt}</div>
    </div>`);

  // Custom output Slider
  var currentSlide = [];
  var nextButton = [];
  var prevButton = [];
  var currentPrice = [];
  var outputResult = [];
  var outputVal = [];
  var outputVal1 = [];
  var index = 0;
  var sliderWrapper = document.querySelector(".slider-content-wrapper");
  var nextAttr = 1;
  var prevAttr = 1;
  var slideHide = 100;
  $(".next-control").attr("show-attr", nextAttr);
  $(".next-control").click(function (e, i) {
    $(".next-control").attr("show-attr", nextAttr);
    if (priceCodeArr.length - 1 >= nextAttr) {
      sliderWrapper.style.transform = "translateY(".concat(-slideHide, "%)");
      slideHide += 100;
    } else {
      $(".next-control").css({
        "pointer-events": "none",
        cursor: "none",
        opacity: "0.5",
      });
      $(".prev-control").css({
        "pointer-events": "none",
        cursor: "none",
        opacity: "0.5",
      });
      var flag = $(".complete_outputData").attr("value", "1");
      var flagVal = $(flag).attr("value");
    }
    if (priceCodeArr.length >= nextAttr) {
      outputResult.push(outputVal[index]);
      outputValues(outputResult.join("|"), flagVal);
    }
    nextAttr += 1;
    prevAttr += 1;
    index += 1;
  });

  $(".prev-control").click(function (e, i) {
    $(".prev-control").attr("show-attr", prevAttr);
    if (priceCodeArr.length - 1 >= prevAttr) {
      sliderWrapper.style.transform = "translateY(".concat(-slideHide, "%)");
      slideHide += 100;
    } else {
      $(".prev-control").css({
        "pointer-events": "none",
        cursor: "none",
        opacity: "0.5",
      });
      $(".next-control").css({
        "pointer-events": "none",
        cursor: "none",
        opacity: "0.5",
      });
      var flag = $(".complete_outputData").attr("value", "1");
      var flagVal = $(flag).attr("value");
    }
    if (priceCodeArr.length >= prevAttr) {
      outputResult.push(outputVal1[index]);
      outputValues(outputResult.join("|"), flagVal);
    }
    nextAttr += 1;
    prevAttr += 1;
    index += 1;
  });

  for (let index = 0; index < statementCodeArr.length; index++) {
    currentSlide.push(
      $(".slider-content__item[data-info]")[index].dataset.info + ":"
    );
    nextButton.push($(".next-control[data-info]")[0].dataset.info + "~");
    prevButton.push($(".prev-control[data-info]")[0].dataset.info + "~");
    currentPrice.push(
      $(".slider-content__item[data-info] .price[data-info]")[index].dataset
        .info
    );
    outputVal.push(
      currentSlide[index] + nextButton[index] + currentPrice[index]
    );
    outputVal1.push(
      currentSlide[index] + prevButton[index] + currentPrice[index]
    );
  }
  // END Custom Slider and Output

  // Backpunch

  if (backpunch == "true" || backpunch == true) {
    var currSlideBackpunch = [];
    var backpunchDataArr = backpunchData.split(":");
    var backpunchDataArr1 = backpunchDataArr.toString().split("~");
    for (let index = 0; index < backpunchDataArr1.length; index++) {
      var backpunchDataArr2 = backpunchDataArr1.toString().split("|");
    }
    for (let index = 0; index < backpunchDataArr2.length; index++) {
      var element = backpunchDataArr2[index];
      currSlideBackpunch.push(element.toString().split(",")[1]);
      if (currSlideBackpunch[index] == 0) {
        $(".prev-control").click();
      }
      if (currSlideBackpunch[index] == 1) {
        $(".next-control").click();
      }
    }

    outputValues(backpunchDataArr);
  }

  // END Backpunch

  function dynamicVaraibleFunctionality() {
    if ($(window).width() >= 1366) {
      if (toolWidth && toolHeight) {
        $(".slider").css({
          width: toolWidth + "px",
          height: toolHeight + "px",
        });

        $(".main-container").css({
          width: toolWidth + "px",
          height: toolHeight + "px",
        });

        $(".slide_img").css({
          height: "85%",
        });

        $(".slider-content-wrapper").css({
          height: toolHeight - 35 + "px",
        });
      }

      priceFontSize &&
        $(".price").css({
          "font-size": priceFontSize + "px",
        });
    }

    $(".price").css({
      "background-color": priceBgcolor,
      color: priceFontColor,
      "font-family": priceFontFamily,
    });

    toolBorderColor &&
      $(".slider").css({
        "border-color": toolBorderColor,
        "box-shadow": `-6px 6px 0 ${toolBorderColor}`,
      });

    $(".prev-control").css({
      "font-weight": upDonwArrowFontWeight,
      color: upArrowFontColor,
      "font-family": upDownArrowFontFamily,
    });

    $(".next-control").css({
      "font-weight": upDonwArrowFontWeight,
      color: downArrowFontColor,
      "font-family": upDownArrowFontFamily,
    });
    $(".next-control").css({
      "background-image": `url(${lowpriceBtnImage})`,
    });
    $(".prev-control").css({
      "background-image": `url(${highpriceBtnImage})`,
    });
  }

  dynamicVaraibleFunctionality();
});
