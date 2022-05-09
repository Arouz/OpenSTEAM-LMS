const addEmojiBtn = () => {
	//Creating the emoji element
	const emojiElm = `
	<button id="emoji-btn" class="btn c-btn-primary btn-sm">
		<i class="far fa-smile"></i> Emoji
    </button>
	<div id="emoji-picker-container">
		<emoji-picker class="light"></emoji-picker>
	</div>`;

	//Adding the emoji button to the commentary textarea & styling it
	document.querySelector('#commentary-textarea').insertAdjacentHTML('afterend', emojiElm);
	$('#commentary-textarea').css('border-radius', '0.5em 0.5em 0 0');

	//Adding the script for the emoji picker
	$('head').append('<script type="module" src="https://cdn.jsdelivr.net/npm/emoji-picker-element@^1/index.js"></script>');

	document.querySelector('emoji-picker').addEventListener('emoji-click', event => {
		$('#commentary-textarea').val($('#commentary-textarea').val() + event.detail.emoji.unicode)
		tooltip.classList.toggle('shown')
	});

	//Making the emoji button hide/show the emoji picker
	$('#activity-correction').css('overflow', 'unset');

	const body = document.querySelector('#classroom-dashboard-content');
	const button = document.querySelector('#emoji-btn')
	const tooltip = document.querySelector('#emoji-picker-container')
	var popper = new Popper(button, tooltip, {
		placement: 'top'
	});

	$('#emoji-btn').click(function () {
		tooltip.classList.toggle('shown')

		$( body ).scrollLeft( 300 );

	});
}

eventAddEmojiBtn = () => {
	if (document.querySelector('#commentary-textarea')) {
		//console.log('✅ found #commentary-textarea, injection launched');
		addEmojiBtn();
	} else {
		//console.log('❌ no #commentary-textarea, trying injection again in 500ms');
		setTimeout(eventAddEmojiBtn, 500);
	}
}

const ogLoadActivityForTeacher = loadActivityForTeacher;

loadActivityForTeacher = function () {
	ogLoadActivityForTeacher()
	eventAddEmojiBtn();
};

