//1번 : 페이지가 로딩 될 때 이곳의 글씨를 변경하시오.
// 기존의 페이지 로딩 -> window.onload = function()
/* (단점)
    HTML의 모든 태그를 불러온 후 코드내에 onload가 있을 경우 읽어낸다.
    그 뜻은 js,css 등 모두 읽은 후 실행이 되기 때문에 속도가 느리다.
    + 또한 onload는 가장 마지막 onload함수만 실행하게 되어 여러개의 onload 사용 시 오류발생 가능성!
*/

// 추천하는 페이지 로딩 시 함수 불러오는 법
// window.addEventListener('DOMContentLoaded', function() {
//     const idDom = document.getElementById('display');
//     idDom.innerText = '글씨가 변경되었습니다';
//     idDom.style.color = 'red';
//     // console.log(idDom);
// });

// 2번.탭을 선택하면 선택한 탭의 배경과 글자의색이 바뀌도록 하시오

const tabHost = document.getElementsByClassName(".tab");
console.log(tabHost);

tabHost.addEventListener('click',(e)=>{
    tabHost.style.background = 'yellow';
    tabHost.style.color = 'red';
});

// 왜 onclick이 아니고 addEventListener를 써야하는가?
// onclick은 이벤트를 여러개 적용하는 것이 불가능하다.
// addEventListener는 HTML 요소 뿐 아니라 DOM 요소에 대해 동작한다.
// 캡쳐링,버블링과 같은 이벤트리스너에 대한 옵션 지정가능 -> 세밀한 제어가능
