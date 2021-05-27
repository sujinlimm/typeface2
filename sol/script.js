function fade() {
  //글자 본뜨기 페이드 인

  if (screen.width >= 1920) {
    if (
      document.body.scrollTop > 3300 ||
      document.documentElement.scrollTop > 3300
    ) {
      document.getElementById("background5").className = "pade";
    } else {
      document.getElementById("background5").className = "";
    }
  } else if (screen.width >= 1680) {
    if (
      document.body.scrollTop > 2860 ||
      document.documentElement.scrollTop > 2860
    ) {
      document.getElementById("background5").className = "pade";
    } else {
      document.getElementById("background5").className = "";
    }
  } else if (screen.width >= 1440) {
    if (
      document.body.scrollTop > 2560 ||
      document.documentElement.scrollTop > 2560
    ) {
      document.getElementById("background5").className = "pade";
    } else {
      document.getElementById("background5").className = "";
    }
  } else {
    if (
      document.body.scrollTop > 2340 ||
      document.documentElement.scrollTop > 2340
    ) {
      document.getElementById("background5").className = "pade";
    } else {
      document.getElementById("background5").className = "";
    }
  }
}
window.onscroll = function () {
  fade();
};

function change() {
  //가로/세로 변경
  var btn = document.getElementById("changeB");

  String.prototype.replaceAll = function (org, dest) {
    return this.split(org).join(dest);
  };

  if (btn.value === "가로쓰기") {
    btn.value = "세로쓰기";

    var a = "lr-tb"; //현재: 가로쓰기
    document.getElementById("main_preview").style.writingMode = a;

    var x = document.getElementById("main_preview").innerHTML;
    var result1 = x.replaceAll("。", ".").replaceAll("、", ",");
    document.getElementById("main_preview").innerHTML = result1;
  } else {
    btn.value = "가로쓰기";

    var b = "tb-rl"; //현재: 세로쓰기
    document.getElementById("main_preview").style.writingMode = b;

    var x = document.getElementById("main_preview").innerHTML;
    var result2 = x.replaceAll(".", "。").replaceAll(",", "、");
    document.getElementById("main_preview").innerHTML = result2;
  }
}

function myFunction() {
  // 타이핑 빈칸
  var x = document.getElementById("typingText").value;
  document.getElementById("main_preview").innerHTML = x;

  String.prototype.replaceAll = function (org, dest) {
    return this.split(org).join(dest);
  };

  var result2 = x.replaceAll(".", "。").replaceAll(",", "、");
  document.getElementById("main_preview").innerHTML = result2;
}

function typesize() {
  // 조절
  var v = document.getElementById("typesize").value;
  document.getElementById("main_preview").style.fontSize = v + "pt";
  document.getElementById("main_preview").style.lineHeight = v * 1.7 + "pt";
  document.getElementById("sizePt").innerHTML = "글자 크기 " + v + "pt";
}

function line() {
  var v = document.getElementById("line").value;
  document.getElementById("main_preview").style.lineHeight = v + "pt";
  document.getElementById("linePt").innerHTML = "글줄 사이 " + v + "pt";
}

//랜덤텍스트
var A = new Array();

A[0] =
  "마침내 그날의 논의와 인상들、분노와 웃음과 함께 그날의 구겨진 껍질을 말아서 울타리 밖으로 내던져 버려야 할 시간이라고 생각했습니다。푸르고 광막한 하늘에는 수천 개의 별들이 반짝이고 있었습니다。마치 불가사의한 사회에 혼자 버려진 듯한 느낌입니다。<br><br> &nbsp;&nbsp;버지니아울프、<br> &nbsp;&nbsp;자기만의 방";
A[1] =
  "그것들은 땅바닥에 단단하게 결합되어 있기 때문이다。그러나 보라。그것마저도 다만 그렇게 보일 뿐이다<br><br>&nbsp;&nbsp;프란츠 카프카、 <br>&nbsp;&nbsp;나무들";

rand = Math.floor(A.length * Math.random());
randText = A[rand];

document.getElementById("main_preview").innerHTML = randText;

//슬라이드
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
