/* 
배열 내장함수 (length, pop, push, unshift, shift, concat, join, reverse, sort, slice, splice ... )
배열 고차함수 (map, filter, find, findIndex, reduce)
*/

// 1. 핸드폰 가운데 4자리를 '*'표시로 바꿔서 보여주는 함수를 만들어보자
function changeNum(phone) {
  // split사용해 '-'단위로 쪼개어 배열을 생성
  const phoneSplit = phone.split("-");
  // length를 활용해 그 길이만큼 '*' 반복하여 생성
  phoneSplit[1] = "*".repeat(phoneSplit[1].length);
  // join을 활용해 다시 원래 '-'형태로 바꿈
  const result = phoneSplit.join("-");
  return result;
}

console.log(changeNum("010-1234-1234"));

console.log("=".repeat(20));

// 2.

// 빈배열 생성
const arr = [];
// 반복문으로 0부터 30까지 arr에 푸쉬
for (let i = 0; i <= 30; i++) {
  arr.push(i);
}
console.log(arr);

//  맨 마지막 인덱스값 삭제(pop, splice 활용가능)
// 이렇게 변수(num)에 담아주면 뽑은 값을 저장해두었다가 활용 가능
let num = arr.pop();
console.log(num);
console.log(arr);

// splice를 활용함면 뺀 요소를 배열로 반환해준다
let splice = arr.splice(arr.length - 1, 1);
console.log(arr);

// shift, unsfhit 활용하여 맨 앞의 요소를 삭제하거나 추가가능(unshift가 추가이고, shift가 삭제)
arr.unshift(-1);
console.log(arr);
arr.shift();
console.log(arr);

// concat을 활용하여 삭제한 29, 30을 다시 넣어보자
// concat 중요사항 : concat은 합친것을 리턴하기 때문에 원본은 29, 30이 추가 되지 않았다
let result = arr.concat(29, 30);
console.log(arr);
console.log(result);

// slice활용 (N번째 인덱스부터 M직전까지!!(포함x))
// slice는 해당 값을 리턴해주고 원본을 건들지 않음! 일종의 복사본이라 생각하면 편함
console.log(result.slice(0, 10));

// map을 활용해 현재 값에서 1씩 더한 새로운 배열을 만들어보자
let newArr = result.map((item) => item + 1);
console.log(newArr);

// 이번엔 filter를 통해 짝수인놈들만 가지고있는 새로운 배열을 만들어보자

let newFilter = newArr.filter((item) => item % 2 == 0);
console.log(newFilter);

// 그러면 이번엔 10이하의 숫자들은 4를 곱해보자

let newFilter2 = newFilter.map((item) => {
  if (item <= 10) {
    return item * 4;
  } else {
    return item;
  }
});
console.log(newFilter2);
/* 
[
   8, 16, 24, 32, 40, 12,
  14, 16, 18, 20, 22, 24,
  26, 28, 30
]
*/
// 지저분하니 정렬을 해보려한다 먼저 reverse를 해보자

newFilter2.reverse();
console.log(newFilter2);
/* 
[
  30, 28, 26, 24, 22, 20,
  18, 16, 14, 12, 40, 32,
  24, 16,  8
]

// 눈치챘겠지만 reverse()는 그냥 순서만 그대로 뒤집어준것 뿐이다.
// 따라서 오름차순정렬이 되어있을경우 reverse가 내림차순의 역할을 해줄 수 있지만,
// 그냥 내림차순정렬을 위해 reverse를 사용하면 원하는 값을 얻지 못한다.
*/

// 그러면 이번엔 sort를 활용해보자
newFilter2.sort((a, b) => b - a); // 내림차순
console.log(newFilter2);

newFilter2.sort((a, b) => a - b); // 오름차순
console.log(newFilter2);

// find
// 값이 참인 첫번째 요소를 반환해준다
let find = newFilter2.find((item) => item == 16);
console.log(find);

// findIndex
// find와 비슷하지만 인덱스 번호를 반환해준다
let findIndex = newFilter2.findIndex((item) => item == 16);
console.log(findIndex);

// reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((total, value) => total + value);
console.log(sum);
