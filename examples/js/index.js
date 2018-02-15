let $ = document.querySelector.bind(document);
let $$ = el => Array.from(document.querySelectorAll(el));

let coordinates = new ElementCoordinates($('.box'));

let props = ['top', 'bottom', 'height', 'left', 'right', 'width'];

let updateInfo = () => {
	
	let text = '';
	let borderBox = coordinates.borderBox;
	props.forEach(prop => {
		text  += `${prop}: ${borderBox[prop]}</br>`;
	});
	$('.border-info').innerHTML = text;
	
	text = '';
	let paddingBox = coordinates.paddingBox;
	props.forEach(prop => {
		text  += `${prop}: ${paddingBox[prop]}</br>`;
	});
	$('.padding-info').innerHTML = text;
	
	text = '';
	let contentBox = coordinates.contentBox;
	props.forEach(prop => {
		text  += `${prop}: ${contentBox[prop]}</br>`;
	});
	$('.content-info').innerHTML = text;

	setTimeout(updateInfo, 100);
};

updateInfo();
