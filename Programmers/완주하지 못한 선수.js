/*

문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.

입출력 예
participant	completion	return
["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"
입출력 예 설명
예제 #1
"leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
"vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
"mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

*/

function solution(participant, completion) {
  // 참여자&완주자 배열정렬.
  participant.sort();
  completion.sort();

  // 완주자 배열의 길이만큼 반복 + 참여자와 완주자가 다른 경우 찾기
  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      // 다른 경우(완주못한 사람)
      return participant[i];
    }
  }

  // 모든 완주자와 일치한 경우 == 마지막 참여자가 완주하지 못한 선수
  return participant[participant.length - 1];
}

// =========================================================

//참고할만한 다른사람 문제풀이 --1
var solution = (_, $) =>
  _.find(
    (_) => !$[_]--,
    $.map((_) => ($[_] = ($[_] | 0) + 1))
  );

/*문제풀이해설

- solution 함수는 두 개의 매개변수 _와 $를 받습니다.
- $ 배열을 map 함수를 사용하여 객체로 변환합니다. 이 객체는 각 이름의 등장 횟수를 나타내는데, 초기값은 0입니다.
- find 함수를 사용하여 참가자 배열 _에서 등장 횟수를 감소시키면서 찾습니다. 만약 등장 횟수가 0이 되면 해당 선수는 완주하지 못한 선수입니다.
  */

// 참고할만한 다른사람 문제풀이 --2

function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}
