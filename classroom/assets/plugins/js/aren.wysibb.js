function arenWysibb() {
	if (typeof document.getElementsByClassName('wysibb')[0] == undefined) {
		setTimeout(arenWysibb, 250);
	} else {
		// Adding strings to the string list
		if (getLangInCookie() == 'fr') {
			let arenFr = {
				vittaiframe: "Vittascience",
				modal_vitta_title: "Insérer IDE Vittascience",
				modal_vitta_url: "Insérer l'URL d'un projet Vittascience.",
				instruction: "Bloc consigne d'exercice",
				office: "Insérer Office Word, PowerPoint ou Excel",
				modal_office_title: "Insérer Office Word, PowerPoint ou Excel",
				zoomLink: "Insérer un lien Zoom",
				modal_zoom_title: "Insérer un lien Zoom",
				inDev: "En cours de développement."
			};
			let arenLang = Object.assign(WBBLANG['fr'], arenFr);
			WBBLANG['fr'] = CURLANG = arenLang;
		} else {
			let arenEn = {
				vittaiframe: "Vittascience",
				modal_vitta_title: "Insert Vittascience IDE",
				modal_vitta_url: "Insert a Vittascience project URL.",
				instruction: "Exercise instruction block",
				office: "Insert Office Word, PowerPoint or Excel",
				modal_office_title: "Insert Office Word, PowerPoint or Excel",
				zoomLink: "Insert Zoom link",
				modal_zoom_title: "Insert Zoom link",
				inDev: "Currently under development."
			};
			let arenLang = Object.assign(WBBLANG['en'], arenEn);
			WBBLANG['en'] = CURLANG = arenLang;
		}

		/*
		// Replacing the wysibb.init() method by a custom one
		$.wysibb.prototype.init = function () {

			// Here we change the various bb tags and their behavior
			this.options.allButtons['instruction'] = {
				title: CURLANG.instruction,
				buttonHTML: '<i class="fas fa-book" style="height:27px;width:31px;font-size:20px;text-align:center;padding-top: 5px;"></i>',
				modal: {
					title: "Modal title",
					width: "600px",
					tabs: [{
						input: [{
								param: "HEADER",
								title: "Entrez le titre (facultatif)",
							},
							{
								param: "CONTENT",
								title: "Entrez le contenu",
							}
						]
					}]
				},
				transform: {
					'<div class="instruction" header="{HEADER}">{CONTENT}</div>': '[instruction={HEADER}]{CONTENT}[/instruction]',
					'<div class="instruction">{CONTENT}</div>': '[instruction]{CONTENT}[/instruction]'
				}
			}
			this.options.allButtons['officeiframe'] = {
				title: CURLANG.office,
				buttonHTML: '<img src="/plugins/plugin-aren-wysibb/public/images/office-icon.svg" height="26" height="26" style="margin-top: 2px;"/>',
				hotkey: '',
				modal: {
					title: CURLANG.modal_office_title,
					width: "500px",
					tabs: [{
						html: "<p>" + CURLANG.inDev + "</p>"
					}]
				}
			}
			this.options.allButtons['zoom'] = {
				title: CURLANG.zoomLink,
				buttonHTML: '<img src="/plugins/plugin-aren-wysibb/public/images/zoom-icon.svg" height="26" height="26" style="margin-top: 2px;"/>',
				hotkey: '',
				modal: {
					title: CURLANG.modal_zoom_title,
					width: "500px",
					tabs: [{
						html: "<p>" + CURLANG.inDev + "</p>"
					}]
				}
			}
		}
		*/
	}


	console.log("Wysibb plugin loaded");
}


//	buttons: ",bold,italic,underline,|,fontcolor,fontsize,|,justifyleft,justifycenter,justifyright,bullist,img,link,|,vittapdf,video,instruction,|,vittaiframe,cabriiframe,|,genialyiframe,gdocsiframe,officeiframe,zoom,answer"}

$(document).ready(function () {
	arenWysibb();
});

const ogBbcodeToHtml = bbcodeToHtml;


bbcodeToHtml = function (html) {
	console.info("using Arèn BBCode parser");

	html = ogBbcodeToHtml(html);

	/* ADDED REGEX FOR AREN */
	html = html.replace(/(\[instruction=)(.+?(?=\]))(\])(.+?(?=\[))(\[\/instruction\])/gi, "<div class='instruction' header='$2'>$4</div>")
	html = html.replace(/(\[instruction=)(.+?(?=\]))(\])(.+?(?=\[))(\[\/instruction\])/gi, "<div class='instruction' header='$2'>$4</div>")

	html = html.replace(/\[instruction\]/gi, "<div class='instruction'>")
	html = html.replace(/\[\/instruction\]/gi, "</div>")
	/* ADDED REGEX FOR AREN */
	return html
}