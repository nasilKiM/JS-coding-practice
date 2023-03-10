/*
1. for문 기본
    범용적으로 사용
    for(let index = 0; index < 배열.length; index++){
      const 인덱스 = i
      const 요소 = 배열[index]
    }
    for ([초기시작카운트 : 어디부터]; [반복조건 : 어디까지]; [증감조건 : 몇씩증가?])
*/
기본for배열 = ["a", "b", "c", "d"];
for (i = 0; i < 기본for배열.length; i++) {
  console.log(기본for배열[i]);
} // 조건에 부합하는 인덱스를 기준으로 배열 객체의 인덱스로 접근하여 값을 가져오는 구조입니다.

//=============================================================================

/*
2. for each 반복문
    foreach 문은 배열 객체의 반복 형태, 배열에서 주로 사용되는 반복문
    배열 처음시작을 기준으로 마지막 요소로 반복하며 '값' 및 '인덱스' 등을 가져오게 됩니다. 
    반복하며 처리하는 로직은, 인자로 받게되는 <콜백 함수>를 통해 처리합니다.
*/

기본foreach배열 = ["a", 2, false, "d"];
기본foreach배열.forEach((elem) => {
  console.log(elem);
});
//각 항목을 반복하며 foreach 결과를 확인할 수 있음.
// a, 2, false, d

//=============================================================================

/*
3. for...of 문 
      : for(const 요소 of 배열)
      : 배열 안에서 자료를 하나씩 꺼내어 처리하고자 할 때 사용
      : iterator 속성을 가지고 있는 객체에 사용이 가능
        == arguments, querySelectorAll 등의 nodeList, Set, Map 등의 객체에서도 사용
*/
const 배열 = ["바나나", "사과", "귤"];

for (const 요소 of 배열) {
  console.log(요소);
  // 바나나 - 사과 - 귤
}

/*
4. for...in 문
      : for(const 인덱스 in 배열)
      : index 혹은 key를 리턴.  (주로 객체 처리할 떄 사용)
      : for of 와는 달리 iterator 객체가 아닌 경우 반복을 처리할 수 있음 
      == key를 기준으로 순차적으로 처리하고자 할 때 사용할 수 있습니다.
*/

for (const 인덱스 in 배열) {
  console.log(인덱스, 배열[인덱스]);
  // 0 바나나 1 사과 2 귤
}

/*
***정리하기***
    
  종류            Array(배열)     String(문자열)      Object(객체)       HTML콜렉션    Node List     참고
  ----------------------------------------------------------------------------------------------------------------------------------------------------
  for each            O               X                   X                 X              O         배열의 각 요소 순환. 중간에 나오는거 x
  for...in            O               O                   O                 X              X         속성(키값)을 순환. index 배열순회 추천x
  for...of            O               O                   X                 -              O         속성 값 순환
  for                 O               O                   X                 O              O         .length 만큼 반복                       

*/
