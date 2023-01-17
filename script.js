
const $ = document;

const [yes, no, title] = ['yes', 'no', 'title'].map(id => $.getElementById(id));

const buttons = $.querySelector('.buttons');


$.addEventListener('click', e =>
{
	let element = e.target;

	if (element.matches("#no"))
	{
		title.innerHTML = 'Resposta correta!';
		buttons.style.display = 'none';
	}
	
	if (element.matches("#yes"))
	{

		let { top, left } = element.style;

		top  = (rng(200, 100)) * randomSign();
		left = (rng(200, 100)) * randomSign();

		element.style.top = `${ top  }px`;
		element.style.left= `${ left }px`;
	}
});

// Helper Functions -------------------------------------------------------------

function randomSign()
{
	return rng(1) ? 1 : -1; 
}

function rng(max = 100, min = 0)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

