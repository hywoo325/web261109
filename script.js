// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 김현우(2651022)
const titles = [
    "미스 페레그린과 이상한 아이들의 집",
    "겨울왕국",
    "오디세이",
    "주토피아",
    "컨저링 2"
];
const ratings = [6.8, 7.2, 8.0, 7.8, 7.3];
const years = [2016, 2013, 2016, 2016, 2016];
let sum = 0;
for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
}
console.log("합계:", sum);

const average = sum / ratings.length;
console.log("평균:", average);

let max = ratings[0];
let maxIndex = 0;
let count = 0;
for (let i = 0; i < ratings.length; i++) {
    if (max < ratings[i]) {
        max = ratings[i];
        maxIndex = i;
    }
    if (8 <= ratings[i]) count++;
}
console.log("최고:", titles[maxIndex], max);
console.log("8점 이상:", count + "편");

for (let i = 0; i < ratings.length; i++) {
    let label;
    if (8.5 <= ratings[i]) {
        label = "명작";
    } else if (7 <= ratings[i]) {
        label = "추천";
    } else {
        label = "보통";
    }
    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}

const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);

document.getElementById("stats").textContent = "평균 " + avgText + "점";

// // document.write("외부 스크립트 방법");

// console.log("여기 부분은 웹페이지가 아니라 콘솔에 출력이 됩니다.");

// let dan = 3;

// console.log("** 엄청나다 구구단 3단! **");
// for (let i = 1; i < 10; i++) {
//     console.log(`${dan} * ${i} = ${dan * i}`);
// }

// if (dan === 3) {
//     console.log("3단이 맞습니다.");
// } else {
//     console.log("3단이 아닙니다.");
// }

// let arr = [ 80, 70, "메롱", 90, 60 ];
// console.log(arr);
// console.log(arr[2]);

// let stdScore = {
//     korean: 80,
//     english: 70,
//     math: 90,
//     science: 60,
// };

// console.log(stdScore);
// console.log(stdScore.math);
// stdScore.name = "홍길동";
// console.log(stdScore);