(() => {
// app.js : 영화 배열을 다루는 함수 6개 / 김현우(26) / 10주차
// average : 영화 배열 ⇒ 평균 평점(숫자)
const average = (list) => {
	let sum = 0;
	for (const m of list) {
		sum += m.rating;
	}
	return sum / list.length;
}
console.log("평균:", average(movies));


// 영화 배열 ⇒ 평점이 가장 높은 영화 객체
const best = (list) => {
	const max = Math.max(...list.map(m => m.rating))

	return list.find(m => m.rating === max);
}
console.log(`가장 높은 평점의 영화:`, best(movies).title);

// 영화 배열, 최소 평점 ⇒ 그 이상인 영화만 담은 새 배열
const filterByRating = (list, min) => {
	return list.filter(item => min <= item.rating);
}
console.log(`8점 이상 영화: ${filterByRating(movies, 8).length}편`);

// 영화 배열 ⇒ 평점 높은 순으로 정렬한 새 배열(원본은 그대로)
const sortByRating = (list) => {
	return [...list].sort((a, b) => b.rating - a.rating);
}
console.log(`정렬 1위: ${sortByRating(movies)[0].title}, 원본 1번: ${movies[0].title}`);

// 날짜 문자열 ⇒ 올해까지 몇 년(숫자)
const yearsSince = (dateStr) => {
	return new Date().getFullYear() - Number(dateStr.split("-")[0]);
}
console.log(`${yearsSince(movies[0].date)}년 전 개봉`);

// 포스터 경로, 크기 ⇒ TMDB 이미지 주소(문자열)
const posterUrl = (path, size) => {
	return `https://image.tmdb.org/t/p/w${size}${path}`
}
console.log(`완성된 포스터 주소: ${posterUrl(movies[0].poster, 342)}`);


document.title = `내 영화 ${movies.length}편`;
console.table(sortByRating(movies));
document.getElementById("out").textContent = `평균 ${average(movies).toFixed(1)}점, 최고 ${best(movies).title}`;

console.log(`박스오피스 1위 관객 수: ${boxTop.audience.toLocaleString("ko-KR")}명`);

/*
Live Server일 때는 로컬 ip 주소의 특정 포트로 접근해 Live Server가 보내주는 웹에 접속하지만,
GitHub Pages는 외부 서버에 업로드되고 이에 접속하기 위한 주소가 제공되므로 두 환경에서 다르게 뜨는 것 같다.
*/
console.log(navigator.language, location.href);
})();
