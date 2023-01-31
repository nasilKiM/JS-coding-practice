/* 요소정리
  1. .list_btn_group > ul
      - li태그의 자식요소로 이미지를 갖고
      - 해당 ul의 자식으로서 추가

  2. .list_btn_group > button:first-child
     .list_btn_group > button:last-child
      ps. let currentPlayIndex = 0;  // 현재 포커싱된게 어떤것일지 알 수 있다.
  
  3. diskInner
      선택된 노래가 바뀔때마다 디스크 내부의 원은 바뀐다
  
  4. main
      선택된 노래가 바뀔 때마다 배경화면이 바뀐다 (backdrop filter)
      선택된 노래가 실행되면 앨범 이미지로 바뀐다
      ps. let playstatus = 0(false);
  
  5. .disk에 active 추가(애니메이션)
  
  6. .play_btn_group > button:first-child
     .play_btn_group > button:last-child
     *플레이 버튼이 눌러졌을 때 배경화면이 그라데이션에서 앨범 이미지로 변경 및 디스크 회전
     *중지 버튼이 눌러지면 디스크회전 중지 배경화면 그라데이션으로
  
  7. 생성된 ul의 li의 이미지 태그를 가지고 올 것
     *현재 선택된 노래의 focus 
     *흰색테두리 + 크기 커짐
     
  8. 이미지 눌렀을 때도 이동 가능(재생 중일 때 클릭되면 재생 노래도 변경)
  */

// mock data
const musicListData = [
  {
    src: "./assets/iu_0.jpg",
    color: ["#0272a4", "#f6a564"],
    musicSrc: "./assets/music/01_iu.mp3",
  },
  {
    src: "./assets/iu_1.jpg",
    color: ["#b6bfc8", "#36595b"],
    musicSrc: "./assets/music/02_iu.mp3",
  },
  {
    src: "./assets/iu_2.jpg",
    color: ["#e58e82", "#6f569f"],
    musicSrc: "./assets/music/03_iu.mp3",
  },
];

// list에 이미지 넣기 + 이미지 클릭하면 배경화면 바뀌기
const $playList = document.getElementById("ls");
const backgroundImg = document.getElementById("main");
// 음악파일 재생
const musicPlay = document.querySelector("audio"); // 이미지클릭 > 오디오재생

for (let i = 0; i < musicListData.length; i++) {
  const $createLi = document.createElement("li");
  $playList.appendChild($createLi); //ul태그 안에 자식요소로 추가해라
  const createImg = document.createElement("img");
  createImg.setAttribute("src", musicListData[i].src);
  $createLi.appendChild(createImg); // li 태그 안에 img를 자식요소로 추가
  createImg.addEventListener("click", () => {
    setMusic(i);
    console.log(musicListData[i].musicSrc);
  });
}

let currentMusicIndex = 0; // 지금몇번째노래가 실행되는지 알려주는 변수

// 뮤직 src 바꿔주는 함수
function setMusic(musicIndex) {
  currentMusicIndex = musicIndex; // 현재 노래 몇번째거 실행하는지
  console.log(musicListData[musicIndex].src); // 그림 클릭하면 그림주소 console.log 찍기
  backgroundImg.style.backgroundImage = `url(${musicListData[musicIndex].src})`;
  // 이미지 클릭 시, 음악파일 재생
  const musicSource = musicPlay.querySelector("source");
  musicSource.setAttribute("src", musicListData[musicIndex].musicSrc);
  musicPlay.load();
  diskPlay();
  //앨범아트에 테두리 + 크기키우기
  const imgBorder = document.querySelectorAll("ul>li>img");
  for (let j = 0; j < imgBorder.length; j++) {
    imgBorder[j].classList.remove("play");
    // 테두리 + 크기 효과 우선 지우고
  }
  imgBorder[musicIndex].classList.add("play");
  // 선택한 앨범아트 인덱스를 확인해서 play class속성 추가하기
}

const musicPlayBtn = document.querySelectorAll(".play_btn_group > button");
//재생버튼
musicPlayBtn[0].addEventListener("click", () => {
  diskPlay();
});
//멈춤버튼
musicPlayBtn[1].addEventListener("click", () => {
  diskPause();
});
//중지버튼
musicPlayBtn[2].addEventListener("click", () => {
  diskStop();
});

// 음악이 재생되었을 때, disk 태그에 active 기능이 추가되는 함수
function diskPlay() {
  musicPlay.play();
  const diskDiv = document.querySelector(".disk");
  diskDiv.classList.add("active"); // 클래스에 active 추가해주기.. classList!
}

//음악 pause 버튼 눌렀을 때, disk 정지
function diskPause() {
  musicPlay.pause();
  const diskDiv = document.querySelector(".disk");
  diskDiv.classList.remove("active");
}

//음악 stop 버튼 눌렀을 때, disk 정지
function diskStop() {
  musicPlay.pause();
  musicPlay.currentTime = 0;
  const diskDiv = document.querySelector(".disk");
  diskDiv.classList.remove("active");
}

// < | > 화살표 클릭
const buttons = document.querySelectorAll(".list_btn_group > button");

// < 화살표
buttons[0].addEventListener("click", () => {
  // 현재 재생하는 노래 -1 인덱스번호의 노래를 가져온다.
  if (currentMusicIndex > 0) {
    setMusic(currentMusicIndex - 1);
  } else {
    currentMusicIndex = musicListData.length - 1;
    setMusic(currentMusicIndex);
  }
});

// > 화살표
buttons[1].addEventListener("click", () => {
  // 현재 재생하는 노래 +1 인덱스번호의 노래를 가져온다.
  if (currentMusicIndex < musicListData.length) {
    setMusic(currentMusicIndex + 1);
  } else {
    currentMusicIndex = 0;
    setMusic(currentMusicIndex);
  }
});
