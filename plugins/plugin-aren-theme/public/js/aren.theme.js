const changeModal = () => {
	const changeLanguageButtons = `
    <button class="btn btn-lg c-btn-secondary" onclick="changeLang('fr')">
        Francais
    </button>
    <button class="btn btn-lg c-btn-secondary" onclick="changeLang('en')">
        English
    </button>`;
	
	$('#settings-teacher-modal #switch-lang-list').empty(); ; 
	document.querySelector('#settings-teacher-modal #switch-lang-list').insertAdjacentHTML('afterbegin', changeLanguageButtons);
	$('#settings-teacher-modal #switch-lang-list').css('gap', '1em');

	$('#settings-student-modal #switch-lang-list').empty(); ; 
	document.querySelector('#settings-student-modal #switch-lang-list').insertAdjacentHTML('afterbegin', changeLanguageButtons);
	$('#settings-student-modal #switch-lang-list').css('gap', '1em');
	
}

eventChangeModal = () => {
	if(document.querySelector('#settings-teacher-modal #switch-lang-list') && document.querySelector('#settings-student-modal #switch-lang-list')){
        changeModal();
	}else{
        setTimeout(eventChangeModal, 500);
	}
}

eventChangeModal();