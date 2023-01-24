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

const tabHost = document.getElementsByClassName("tab");
console.log(tabHost);
const tabBody = document.querySelectorAll(".tab_body > div");

for (let i = 0; i < tabHost.length; i++) {
  tabHost[i].addEventListener("click", (e) => {
    for (let el of tabHost) {
      el.style.color = "";
      el.style.background = "";
    }
    // 클릭을 하면 (1) tabHost에 있는 el 모든 색과 배경색을 초기화한다.
    tabHost[i].style.background = "yellow";
    tabHost[i].style.color = "red";
    // (2) 선택한 tabHost의 배경색과 색을 변경한다.
    console.log(tabHost[i].innerHTML);
    // console.log(tabBody.innerHTML); //배열값은 innerHTML이없다.
    visible(i);
  });
}

// 왜 onclick이 아니고 addEventListener를 써야하는가?
// onclick은 이벤트를 여러개 적용하는 것이 불가능하다.
// addEventListener는 HTML 요소 뿐 아니라 DOM 요소에 대해 동작한다.
// 캡쳐링,버블링과 같은 이벤트리스너에 대한 옵션 지정가능 -> 세밀한 제어가능

//3번

//같은 숫자인지 어떻게 확인하고 (innerHTML 활용)
// 2번과 3번을 어떻게 연결하지? ()

function visible(i) {
  //인자로 넘겨줘야하니 i를 넣고
  for (let j = 0; j < tabBody.length; j++) {
    if (tabBody[j].innerHTML.includes(tabHost[i].innerHTML)) {
      //문자열.includes
      // console.log(tabBody[j].innerHTML); -> 안되는 이유 기억하기
      tabBody[j].style.visibility = "visible";
    } else tabBody[j].style.visibility = "hidden";
  }
}

// 4번
// 아래의 입력창에 숫자가 입력되지 않도록 하고 길이 제한은 10자로 하시오.
// 숫자가 입력된다면 숫자가 입력되었다고 alert로 알려주시오

const inputText = document.querySelector("#te_input");
console.log(inputText);

inputText.addEventListener("input", (e) => {
  console.log(e.target.value); //입력된 값을 읽어오기
  for (let k = 0; k <= 9; k++) {
    if (e.target.value.includes(String(k))) {
      alert("숫자다");
      // 잘못한거..(아래)
      // e.target.value = e.target.value.slice();
      // e.target.value 가 ab0이 입력되면, 복사본에서 마지막을잘라내고 (오른쪽) 잘라낸 값을 (왼쪽)에 덮어씌우는거
    }
  }
  // e.target.value에 숫자가 있으면 숫자를 걸러내고
  let str = "";
  for (let l = 0; l < e.target.value.length; l++) {
    let isNumber = false;
    for (let m = 0; m <= 9; m++) {
      //k에서 썼던거 재활용 하려면 함수가 필요.. 어케할지 고민중
      if (e.target.value[l] === String(m)) {
        isNumber = true;
      }
    }
    // 숫자가 아닐때만 추가해주는 코드
    if (!isNumber) {
      str += e.target.value[l];
    }
  }
  e.target.value = str;
});
