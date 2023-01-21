
const $ = document;
const buttons = $.querySelector('.buttons');
const [yes, no, title] = ['yes', 'no', 'title'].map(id => $.getElementById(id));

let cloned = false;

$.addEventListener('click', e =>
{
	e = e.target;

	if (e.matches("#no"))                               
	{                                                   
		title.setAttribute("contenteditable", false);   
		title.innerHTML = 'Resposta correta!';
		buttons.style.display = 'none';
	}
	if (e.matches("#yes"))
	{
		let { width: button_width, height: button_height } = getDimensions(e);
		let { innerWidth: body_width, innerHeight: body_height } = window;

		let top  = rng(0, body_height - button_height);
		let left = rng(0, body_width  - button_width );

		// When #yes becomes absolutely positioned, the other button moves.
		// The easiest way to prevent that is by creating a copy of the button
		// and have it take its place.
		if (!cloned)
		{
			// I could track the state with querySelector(), but I think this is
			// better.
			cloned = true;

			let clone = e.cloneNode(true);

			clone.id = 'clone';
			clone.style.opacity = '0';
			buttons.prepend(clone);
		}
		e.style.position = 'absolute';
		e.style.top = `${top}px`;
		e.style.left= `${left}px`;
	}
});



// Helper Function 😳 -----------------------------------------------------------

function getDimensions(element)
{
	const pattern = /\-?(\d+(\.\d+)?|\.d+)/;

	let { width, height } = getComputedStyle(element);

	width = +width.match(pattern)[0];
	height = +height.match(pattern)[0];

	return { width, height }
}

function rng(max = 100, min = 0)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

