/*
 PC, 모바일 버젼 공용 스크립트 함수 - 필요시 넣어서 사용하시면 됩니다.
*/

// [스크립트 쿠키] 저장하기 (회원 로그인 - 아이디 저장) / 회원있는 사이트만 사용
function setCookie(cookie_name, value, days) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + days);
   var cookie_value = escape(value) + ((days == null) ? '' : ';    expires=' + exdate.toUTCString());
  document.cookie = cookie_name + '=' + cookie_value;
}

// [스크립트 쿠키] 가져오기 (회원 로그인 - 아이디 저장) / 회원있는 사이트만 사용
function getCookie(cookie_name) {
  var x, y;
  var val = document.cookie.split(';');

  for (var i = 0; i < val.length; i++) {
    x = val[i].substr(0, val[i].indexOf('='));
    y = val[i].substr(val[i].indexOf('=') + 1);
    x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
    if (x == cookie_name) {
      return unescape(y); // unescape로 디코딩 후 값 리턴
    }
  }
}