# Parcel 환경 ES6 기반 개발 sample 프로젝트
# 설치 전 준비
* git client 설치 (git clone 으로 설치 시)
* node 설치
# 설치
* 방법 1 : git cloen https://github.com/hyungsbi/ol-test.git 실행
  > git cloen https://github.com/hyungsbi/ol-test.git
* 방법 2 : "Download ZIP" 실행, 다운받은 파일 압축 풀기
* 공통
  * 설치된 곳으로 이동 후 npm install 실행
    > npm install
  * 테스트 실행을 위해 npm run start 실행
    > npm run start
  * http://localhost:1234 접속 테스트
# 테스트한 내용
* sidr 라이브러리를 참조하여 화면에 표시
* jquery-ui(sortable) 라이브러리를 참조하여 sidr 메뉴 드래그하여 이동 구현
* zTree 라이브러리를 참조하여 화면에 표시
* 이미지를 javascript 상에서 동적으로 추가
# Sample 코드 설명
* node module로 설치(npm install ~)한 library 사용법 (my.menu.js)
* ES6 모듈 작성법 (my.menu.js)
* ES6 모듈 참조 및 사용법 (index.js)
* ES5 javascript 작성법 (es5.js)
* ES5 javascript 참조 및 사용법 (index.js)
* 이미지 경로 import 후 사용법 (my.menu.js)
