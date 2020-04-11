/*
 * 파일 명 : my.menu.js
 *
 * 설명 : 메뉴 기능(좌 측에 토글방식의 메뉴 표시, 이미지 동적 로딩, 트리 표시) 제공 
 */

// css file import
import './jquery.sidr.dark.css';
import './style.css';
import '/node_modules/@ztree/ztree_v3/css/zTreeStyle/zTreeStyle.css';
// jquery ($, jQuery 변수 참조 가능 버전)
import './jquery-export';
// jquery-ui 
import '/node_modules/jquery-ui-dist/jquery-ui';
// sidr
import '/node_modules/sidr/dist/jquery.sidr';
// image
import menuImg from './menu.gif';
// zTree
import '/node_modules/@ztree/ztree_v3/js/jquery.ztree.all';

// class 선언 및 export
export class MyMenu {
    // static method 정의 : MyMenu 인스턴스를 생성하지 않고도 참조 가능 (예: 사용 처에서 MyMenu.initLeftMenu() 호출)
    static initLeftMenu() {
        $(document).ready(function () {
            $('#simple-menu').sidr({
              timing: 'ease-in-out',
              speed: 500
            });
        });
        
        $( window ).resize(function () {
            $.sidr('close', 'sidr');
        });

        this.loadImg();

        this.initSortable();

        this.initTree();
    }

    static loadImg() {
        // 방법 1: dist 폴더에 이미지를 미리 가져 놓는 방법
        /*
        $('#imgContainer').append('<img src="/images/menu.gif" width="34" height="31">');
        */

        // 방법 2: 이미지 경로를 import, 단 빌드시 소스 폴더의 이미지 경로와는 다른 이름과 위치로 이미지가 생성됨
        $('#imgContainer').append('<img src="' + menuImg + '" width="34" height="31">');
    }

    static initSortable() {
        $(document).ready( function() {
            $('.mySortable').sortable();
            $('.mySortable' ).disableSelection();
        });
    }

    static initTree() {
        const setting = {
            data: {
				simpleData: {
					enable: true
				}
			}
        };

        const zNodes =[
			{ id:1, pId:0, name:"pNode 1", open:true},
			{ id:11, pId:1, name:"pNode 11"},
			{ id:111, pId:11, name:"leaf node 111"},
			{ id:112, pId:11, name:"leaf node 112"},
			{ id:113, pId:11, name:"leaf node 113"},
			{ id:114, pId:11, name:"leaf node 114"},
			{ id:12, pId:1, name:"pNode 12"},
			{ id:121, pId:12, name:"leaf node 121"},
			{ id:122, pId:12, name:"leaf node 122"},
			{ id:123, pId:12, name:"leaf node 123"},
			{ id:124, pId:12, name:"leaf node 124"},
			{ id:13, pId:1, name:"pNode 13 - no child", isParent:true},
			{ id:2, pId:0, name:"pNode 2"},
			{ id:21, pId:2, name:"pNode 21", open:true},
			{ id:211, pId:21, name:"leaf node 211"},
			{ id:212, pId:21, name:"leaf node 212"},
			{ id:213, pId:21, name:"leaf node 213"},
			{ id:214, pId:21, name:"leaf node 214"},
			{ id:22, pId:2, name:"pNode 22"},
			{ id:221, pId:22, name:"leaf node 221"},
			{ id:222, pId:22, name:"leaf node 222"},
			{ id:223, pId:22, name:"leaf node 223"},
			{ id:224, pId:22, name:"leaf node 224"},
			{ id:23, pId:2, name:"pNode 23"},
			{ id:231, pId:23, name:"leaf node 231"},
			{ id:232, pId:23, name:"leaf node 232"},
			{ id:233, pId:23, name:"leaf node 233"},
			{ id:234, pId:23, name:"leaf node 234"},
			{ id:3, pId:0, name:"pNode 3 - no child", isParent:true}
        ];
        
        $(document).ready(function(){
			$.fn.zTree.init($("#treeDemo"), setting, zNodes);
		});
    }
};