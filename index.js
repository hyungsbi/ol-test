/*
 * 파일 명 : index.js
 *
 * 설명 : index.html에서 참조되어 필요한 모듈 기능을 호출하는 역할
 */

// index.html에 필요한 css 파일 import
import './jquery.sidr.dark.css';
import './style.css';
// es6 모듈 MyMenu 를 my.menu.js에서 import
import {MyMenu} from './my.menu';
// es5 자바스크립트 파일 es5.js import
import './es5';

// my.menu.js에서 import한 MyMenu의 정적 함수 initLeftMenu() 호출
MyMenu.initLeftMenu();

// 기존 방식(es5)의 es5.js 파일 내 함수 es5func() 호출 
es5func();