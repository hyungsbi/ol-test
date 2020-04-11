/*
 * 파일 명 : es5.js
 *
 * 설명 : es5 방식의 함수를 index.js에서 import하기 위해 변환해 본 것, 기존 함수를 아래와 같이 바꾸어 주면 export 없이도 사용 가능
 * 만약 아래와 같이 변경하는 것이 번거롭다면 함수를 기존 방식으로 정의하고, 외부에서 참조할 함수나 변수를 export 해 주면 됨
 */

// 이 방식도 가능 
/* window.es5func = function () {
    console.log('logging from es5func()');
} */

// 이 방식은 IIFE 방식으로 필요한 함수 선언, 글로벌 변수도 선언할 수 있음
(function (global) {
    global.es5func = function () {
        console.log('loggin from es5func()');
    }
})(window);