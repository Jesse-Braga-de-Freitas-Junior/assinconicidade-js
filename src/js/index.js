const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
/*
const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const catimg = document.getElementsByTagName('img')[0];
	catimg.src = await getCats();
};

loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);
*/

const getCats = async () => {
	const data = await fetch(BASE_URL)
		.then((res) => res.json())
		.catch((e) => console.log(e));

	return data.webpurl;
};

const loadImg = async () => {
	const catImg =document.getElementById('cat');
	catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();