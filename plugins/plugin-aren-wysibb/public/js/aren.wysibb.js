function customWysibb() {
	if (typeof document.getElementsByClassName('wysibb')[0] == undefined) {
		setTimeout(customWysibb, 250);
	} else {
		// Erasing default wysibb interface
		let wysibbFormContentElt = document.getElementsByClassName('wysibb')[0];
		let customWysibbFormContentElt = document.createElement('textarea');
		customWysibbFormContentElt.id = 'activity-form-content';
		wysibbFormContentElt.replaceWith(customWysibbFormContentElt);

		// Adding strings to the string list
		if (getLangInCookie() == 'fr' || /fr\.vittascience/.test(window.location.href)) {
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

		// Redefining the buttons in the wysibb menu (it's mandatory for the feature to work)
		wbbOpt = {
			showHotkeys: false,
			buttons: ",bold,italic,underline,|,fontcolor,fontsize,|,justifyleft,justifycenter,justifyright,bullist,img,link,|,vittapdf,video,instruction,|,vittaiframe,genialyiframe,gdocsiframe,officeiframe,zoom"
		}

		// Replacing the wysibb.init() method by a custom one
		$.wysibb.prototype.init = function () {
			// Here we change the various bb tags and their behavior
			this.options.allButtons = {
				vittaiframe: {
					title: CURLANG.vittaiframe,
					buttonHTML: '<img src="/learn/assets/media/SigleRondGris.png" height="26" height="26" style="margin-top: 2px;"/>',
					hotkey: '',
					modal: {
						title: CURLANG.modal_vitta_title,
						width: "500px",
						tabs: [{
							input: [{
								param: "URL",
								title: CURLANG.modal_vitta_url,
								validation: '^http(s)?:\/\/(fr.|en.|valpha.|vgamma.|vdelta.|vbeta.|)vittascience(.com)?'
							}]
						}]
					},
					transform: {
						'<div>{URL}</div>': '[iframe]{URL}[/iframe]'
					}
				},
				cabriiframe: {
					title: CURLANG.cabriiframe,
					buttonHTML: '<span class="btn-inner btn-span-cabri"><img class="btn-cabri" src="/classroom/assets/media/cabri_logo.png"></span>',
					hotkey: '',
					modal: {
						title: CURLANG.modal_cabri_title,
						width: "500px",
						tabs: [{
							input: [{
								param: "URL",
								title: CURLANG.modal_cabri_url,
								validation: '^http(s)?:\/\/cabricloud.com?'
							}]
						}]
					},
					transform: {
						'<div>{URL}</div>': '[iframe]{URL}[/iframe]'
					}
				},
				vittapdf: {
					title: CURLANG.vittapdf,
					buttonHTML: '<i class="fas fa-file-pdf" style="height:27px;width:31px;font-size:20px;text-align:center;padding-top: 5px;"></i>',
					hotkey: '',
					modal: {
						title: CURLANG.modal_vitta_title_pdf,
						width: "500px",
						tabs: [{
							input: [{
								param: "URL",
								title: CURLANG.modal_vitta_url_pdf
							}]
						}]
					},
					transform: {
						'<embed src="{URL}" width=100% height=500 type="application/pdf" />': '[embed]{URL}[/embed]'
					}
				},
				bold: {
					title: CURLANG.bold,
					buttonHTML: '<span class="fonticon ve-tlb-bold1">\uE018</span>',
					excmd: 'bold',
					hotkey: 'ctrl+b',
					transform: {
						'<b>{SELTEXT}</b>': "[b]{SELTEXT}[/b]",
						'<strong>{SELTEXT}</strong>': "[b]{SELTEXT}[/b]"
					}
				},
				italic: {
					title: CURLANG.italic,
					buttonHTML: '<span class="fonticon ve-tlb-italic1">\uE001</span>',
					excmd: 'italic',
					hotkey: 'ctrl+i',
					transform: {
						'<i>{SELTEXT}</i>': "[i]{SELTEXT}[/i]",
						'<em>{SELTEXT}</em>': "[i]{SELTEXT}[/i]"
					}
				},
				underline: {
					title: CURLANG.underline,
					buttonHTML: '<span class="fonticon ve-tlb-underline1">\uE002</span>',
					excmd: 'underline',
					hotkey: 'ctrl+u',
					transform: {
						'<u>{SELTEXT}</u>': "[u]{SELTEXT}[/u]"
					}
				},
				strike: {
					title: CURLANG.strike,
					buttonHTML: '<span class="fonticon fi-stroke1 ve-tlb-strike1">\uE003</span>',
					excmd: 'strikeThrough',
					transform: {
						'<strike>{SELTEXT}</strike>': "[s]{SELTEXT}[/s]",
						'<s>{SELTEXT}</s>': "[s]{SELTEXT}[/s]"
					}
				},
				sup: {
					title: CURLANG.sup,
					buttonHTML: '<span class="fonticon ve-tlb-sup1">\uE005</span>',
					excmd: 'superscript',
					transform: {
						'<sup>{SELTEXT}</sup>': "[sup]{SELTEXT}[/sup]"
					}
				},
				sub: {
					title: CURLANG.sub,
					buttonHTML: '<span class="fonticon ve-tlb-sub1">\uE004</span>',
					excmd: 'subscript',
					transform: {
						'<sub>{SELTEXT}</sub>': "[sub]{SELTEXT}[/sub]"
					}
				},
				link: {
					title: CURLANG.link,
					buttonHTML: '<span class="fonticon ve-tlb-link1">\uE007</span>',
					hotkey: 'ctrl+shift+2',
					modal: {
						title: CURLANG.modal_link_title,
						width: "500px",
						tabs: [{
							input: [{
									param: "SELTEXT",
									title: CURLANG.modal_link_text,
									type: "div"
								},
								{
									param: "URL",
									title: CURLANG.modal_link_url,
									validation: '^(http(s)?:\/\/|mailto:)'
								}
							]
						}]
					},
					transform: {
						'<a href="{URL}" target="_blank">{SELTEXT}</a>': "[url={URL}]{SELTEXT}[/url]",
						'<a href="{URL}" target="_blank">{URL}</a>': "[url]{URL}[/url]"
					}
				},
				img: {
					title: CURLANG.img,
					buttonHTML: '<span class="fonticon ve-tlb-img1">\uE006</span>',
					hotkey: 'ctrl+shift+1',
					addWrap: true,
					modal: {
						title: CURLANG.modal_img_title,
						width: "600px",
						tabs: [{
							title: CURLANG.modal_img_tab1,
							//the place to check adding button
							input: [{
								param: "SRC",
								title: CURLANG.modal_imgsrc_text,
								validation: '^http(s)?://.*?\.(jpg|png|gif|jpeg)$'
							}]
						}],
						onLoad: this.imgLoadModal
					},
					transform: {
						'<img src="{SRC}" />': "[img]{SRC}[/img]",
						'<img src="{SRC}" width="{WIDTH}" height="{HEIGHT}"/>': "[img width={WIDTH},height={HEIGHT}]{SRC}[/img]"
					}
				},
				bullist: {
					title: CURLANG.bullist,
					buttonHTML: '<span class="fonticon ve-tlb-list1">\uE009</span>',
					excmd: 'insertUnorderedList',
					transform: {
						'<ul>{SELTEXT}</ul>': "[list]{SELTEXT}[/list]",
						'<li>{SELTEXT}</li>': "[*]{SELTEXT}[/*]"
					}
				},
				numlist: {
					title: CURLANG.numlist,
					buttonHTML: '<span class="fonticon ve-tlb-numlist1">\uE00a</span>',
					excmd: 'insertOrderedList',
					transform: {
						'<ol>{SELTEXT}</ol>': "[list=1]{SELTEXT}[/list]",
						'<li>{SELTEXT}</li>': "[*]{SELTEXT}[/*]"
					}
				},
				quote: {
					title: CURLANG.quote,
					buttonHTML: '<span class="fonticon ve-tlb-quote1">\uE00c</span>',
					hotkey: 'ctrl+shift+3',
					//subInsert: true,
					transform: {
						'<blockquote>{SELTEXT}</blockquote>': "[quote]{SELTEXT}[/quote]"
					}
				},
				code: {
					title: CURLANG.code,
					buttonText: '[code]',
					buttonHTML: '<span class="fonticon">\uE00d</span>',
					hotkey: 'ctrl+shift+4',
					onlyClearText: true,
					transform: {
						'<code>{SELTEXT}</code>': "[code]{SELTEXT}[/code]"
					}
				},
				vimeo: {
					title: CURLANG.vimeo,
					buttonHTML: '<span class="fab fa-vimeo-v" style="height:27px;width:31px;font-size:20px;text-align:center;padding-top: 3px;" ></span>',
					modal: {
						title: CURLANG.vimeo,
						width: "600px",
						tabs: [{
							title: CURLANG.vimeo,
							input: [{
								param: "SRC",
								title: CURLANG.modal_video_text
							}]
						}],
						onSubmit: function (cmd, opt, queryState) {
							var url = this.$modal.find('input[name="SRC"]').val();
							if (url) {
								url = url.replace(/^\s+/, "").replace(/\s+$/, "");
							}
							var a;
							a = url.match(/^http[s]*:\/\/vimeo\.com\/([0-9])+/i);
							if (a && a.length == 2) {
								var code = url.substr(-8);
								this.insertAtCursor(this.getCodeByCommand(cmd, {
									src: code
								}));
							}
							this.closeModal();
							this.updateUI();
							return false;
						}
					},
					transform: {
						'<iframe src="https://player.vimeo.com/video/{SRC}" allowfullscreen allow="autoplay"></iframe>': '[vimeo]{SRC}[/vimeo]'
					}
				},
				peertube: {
					title: CURLANG.peertube,
					buttonHTML: '<span class="btn-inner btn-span-peertube"><img class="btn-peertube" src="/public/content/img/peertube_logo.svg"></span>',
					modal: {
						title: CURLANG.peertube,
						width: "600px",
						tabs: [{
							title: CURLANG.peertube,
							input: [{
								param: "SRC",
								title: CURLANG.modal_peertube_text
							}]
						}],
						onSubmit: function (cmd, opt, queryState) {
							var url = this.$modal.find('input[name="SRC"]').val();
							if (url) {
								url = url.replace(/^\s+/, "").replace(/\s+$/, "");
								// Replacing the /watch/ in the src by /embed/ to provide only the video (without comments and other features)
								if (url.match(/watch/)) {
									url = url.replace(/\/watch\//, '/embed/');
								}
								this.insertAtCursor(this.getCodeByCommand(cmd, {
									src: url
								}));
							}
							this.closeModal();
							this.updateUI();
							return false;
						}
					},
					transform: {
						'<div>{SRC}</div>': '[peertube]{SRC}[/peertube]'
					}
				},
				offtop: {
					title: CURLANG.offtop,
					buttonText: 'offtop',
					transform: {
						'<span style="font-size:10px;color:#ccc">{SELTEXT}</span>': "[offtop]{SELTEXT}[/offtop]"
					}
				},
				fontcolor: {
					type: "colorpicker",
					title: CURLANG.fontcolor,
					excmd: "foreColor",
					valueBBname: "color",
					subInsert: true,
					colors: "#000000,#444444,#666666,#999999,#b6b6b6,#cccccc,#d8d8d8,#efefef,#f4f4f4,#ffffff,-, \
								#ff0000,#980000,#ff7700,#ffff00,#00ff00,#00ffff,#1e84cc,#0000ff,#9900ff,#ff00ff,-, \
								#f4cccc,#dbb0a7,#fce5cd,#fff2cc,#d9ead3,#d0e0e3,#c9daf8,#cfe2f3,#d9d2e9,#ead1dc, \
								#ea9999,#dd7e6b,#f9cb9c,#ffe599,#b6d7a8,#a2c4c9,#a4c2f4,#9fc5e8,#b4a7d6,#d5a6bd, \
								#e06666,#cc4125,#f6b26b,#ffd966,#93c47d,#76a5af,#6d9eeb,#6fa8dc,#8e7cc3,#c27ba0, \
								#cc0000,#a61c00,#e69138,#f1c232,#6aa84f,#45818e,#3c78d8,#3d85c6,#674ea7,#a64d79, \
								#900000,#85200C,#B45F06,#BF9000,#38761D,#134F5C,#1155Cc,#0B5394,#351C75,#741B47, \
								#660000,#5B0F00,#783F04,#7F6000,#274E13,#0C343D,#1C4587,#073763,#20124D,#4C1130",
					transform: {
						'<font color="{COLOR}">{SELTEXT}</font>': '[color={COLOR}]{SELTEXT}[/color]'
					}
				},
				table: {
					type: "table",
					title: CURLANG.table,
					cols: 10,
					rows: 10,
					cellwidth: 20,
					transform: {
						'<td>{SELTEXT}</td>': '[td]{SELTEXT}[/td]',
						'<tr>{SELTEXT}</tr>': '[tr]{SELTEXT}[/tr]',
						'<table class="wbb-table">{SELTEXT}</table>': '[table]{SELTEXT}[/table]'
					},
					skipRules: true
				},
				fontsize: {
					type: 'select',
					title: CURLANG.fontsize,
					options: "fs_verysmall,fs_small,fs_normal,fs_big,fs_verybig"
				},
				fontfamily: {
					type: 'select',
					title: CURLANG.fontfamily,
					excmd: 'fontName',
					valueBBname: "font",
					options: [{
							title: "Arial",
							exvalue: "Arial"
						},
						{
							title: "Comic Sans MS",
							exvalue: "Comic Sans MS"
						},
						{
							title: "Courier New",
							exvalue: "Courier New"
						},
						{
							title: "Georgia",
							exvalue: "Georgia"
						},
						{
							title: "Lucida Sans Unicode",
							exvalue: "Lucida Sans Unicode"
						},
						{
							title: "Tahoma",
							exvalue: "Tahoma"
						},
						{
							title: "Times New Roman",
							exvalue: "Times New Roman"
						},
						{
							title: "Trebuchet MS",
							exvalue: "Trebuchet MS"
						},
						{
							title: "Verdana",
							exvalue: "Verdana"
						}
					],
					transform: {
						'<font face="{FONT}">{SELTEXT}</font>': '[font={FONT}]{SELTEXT}[/font]'
					}
				},
				smilebox: {
					type: 'smilebox',
					title: CURLANG.smilebox,
					buttonHTML: '<span class="fonticon ve-tlb-smilebox1">\uE00b</span>'
				},
				justifyleft: {
					title: CURLANG.justifyleft,
					buttonHTML: '<span class="fonticon ve-tlb-textleft1">\uE015</span>',
					groupkey: 'align',
					transform: {
						'<p style="text-align:left">{SELTEXT}</p>': '[left]{SELTEXT}[/left]'
					}
				},
				justifyright: {
					title: CURLANG.justifyright,
					buttonHTML: '<span class="fonticon ve-tlb-textright1">\uE016</span>',
					groupkey: 'align',
					transform: {
						'<p style="text-align:right">{SELTEXT}</p>': '[right]{SELTEXT}[/right]'
					}
				},
				justifycenter: {
					title: CURLANG.justifycenter,
					buttonHTML: '<span class="fonticon ve-tlb-textcenter1">\uE014</span>',
					groupkey: 'align',
					transform: {
						'<p style="text-align:center">{SELTEXT}</p>': '[center]{SELTEXT}[/center]'
					}
				},
				video: {
					title: CURLANG.video,
					buttonHTML: '<span class="fonticon ve-tlb-video1">\uE008</span>',
					modal: {
						title: CURLANG.video,
						width: "600px",
						tabs: [{
							title: CURLANG.video,
							input: [{
								param: "SRC",
								title: CURLANG.modal_video_text
							}]
						}],
						onSubmit: function (cmd, opt, queryState) {
							var url = this.$modal.find('input[name="SRC"]').val();
							if (url) {
								url = url.replace(/^\s+/, "").replace(/\s+$/, "");
							}
							var a;
							for (let i = 0; i < WHITELIST.length; i++) {
								if (url.indexOf(WHITELIST[i][0]) != -1) {
									a = url.match(WHITELIST[i][1]);
									var iframeHtml = WHITELIST[i][2]
								}
							}
							if (a && a.length == 2) {
								var code = a[1];
								this.insertAtCursor(this.getCodeByCommand(cmd, {
									src: code
								}));
							}
							this.closeModal();
							this.updateUI();
							return false;
						}
					},
					transform: {
						'<iframe src="https://www.youtube.com/embed/{SRC}" width="640" height="480" frameborder="0"></iframe>': '[video]{SRC}[/video]'
					}
				},

				//select options
				fs_verysmall: {
					title: CURLANG.fs_verysmall,
					buttonText: "fs1",
					excmd: 'fontSize',
					exvalue: "1",
					transform: {
						'<font size="1">{SELTEXT}</font>': '[size=50]{SELTEXT}[/size]'
					}
				},
				fs_small: {
					title: CURLANG.fs_small,
					buttonText: "fs2",
					excmd: 'fontSize',
					exvalue: "2",
					transform: {
						'<font size="2">{SELTEXT}</font>': '[size=85]{SELTEXT}[/size]'
					}
				},
				fs_normal: {
					title: CURLANG.fs_normal,
					buttonText: "fs3",
					excmd: 'fontSize',
					exvalue: "3",
					transform: {
						'<font size="3">{SELTEXT}</font>': '[size=100]{SELTEXT}[/size]'
					}
				},
				fs_big: {
					title: CURLANG.fs_big,
					buttonText: "fs4",
					excmd: 'fontSize',
					exvalue: "4",
					transform: {
						'<font size="4">{SELTEXT}</font>': '[size=150]{SELTEXT}[/size]'
					}
				},
				fs_verybig: {
					title: CURLANG.fs_verybig,
					buttonText: "fs5",
					excmd: 'fontSize',
					exvalue: "6",
					transform: {
						'<font size="6">{SELTEXT}</font>': '[size=200]{SELTEXT}[/size]'
					}
				},

				removeformat: {
					title: CURLANG.removeFormat,
					buttonHTML: '<span class="fonticon ve-tlb-removeformat1">\uE00f</span>',
					excmd: "removeFormat"
				},
				genialyiframe: {
					title: CURLANG.genialy,
					buttonHTML: '<img class="fonticon ve-tlb-link1" src="/learn/assets/media/SigleGenially.png" width="26" height="26" style="margin-top: 2px;" />',
					hotkey: '',
					modal: {
						title: CURLANG.modal_genialy_title,
						width: "500px",
						tabs: [{
							input: [{
								param: "genialy-URL",
								title: CURLANG.modal_genialy_url,
								validation: '^http(s)?:\/\/view.genial.ly'
							}]
						}]
					},
					transform: {
						'<div>{genialy-URL}</div>': '[iframe]{genialy-URL}[/iframe]'
					}
				},
				gdocsiframe: {
					title: CURLANG.gdocs,
					buttonHTML: '<i class="fab fa-google" style="height:27px;width:31px;font-size:20px;text-align:center;padding-top: 5px;"></i>',
					hotkey: '',
					modal: {
						title: CURLANG.modal_gdocs_title,
						width: "500px",
						tabs: [{
							input: [{
								param: "gdocs-URL",
								title: CURLANG.modal_gdocs_url,
								validation: '^http(s)?:\/\/docs.google.com\/(document|spreadsheets|presentation)\/'
							}]
						}]
					},
					transform: {
						'<div>{gdocs-URL}</div>': '[iframe]{gdocs-URL}[/iframe]'
					}
				},
				instruction: {
					title: CURLANG.instruction,
					buttonHTML: '<i class="fas fa-book" style="height:27px;width:31px;font-size:20px;text-align:center;padding-top: 5px;"></i>',
					modal: { 
						title: "Modal title",
						width: "600px",
						tabs: [{
							input: [
								{
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
				},
				officeiframe: {
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
				},
				zoom: {
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
				},
			}

			$.log("Init", this);
			//check for mobile
			this.isMobile = function (a) {
				(/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|meego.+mobile|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a))
			}(navigator.userAgent || navigator.vendor || window.opera);

			//use bbmode on mobile devices
			//this.isMobile = true; //TEMP
			if (this.options.onlyBBmode === true) {
				this.options.bbmode = true;
			}
			//create array of controls, for queryState
			this.controllers = [];

			//convert button string to array
			this.options.buttons = this.options.buttons.toLowerCase();
			this.options.buttons = this.options.buttons.split(",");

			//init system transforms
			this.options.allButtons["_systr"] = {};
			this.options.allButtons["_systr"]["transform"] = this.options.systr;

			this.smileFind();
			this.initTransforms();
			this.build();
			this.initModal();
			if (this.options.hotkeys === true && !this.isMobile) {
				this.initHotkeys();
			}

			//sort smiles
			if (this.options.smileList && this.options.smileList.length > 0) {
				this.options.smileList.sort(function (a, b) {
					return (b.bbcode.length - a.bbcode.length);
				})
			}

			this.$txtArea.parents("form").bind("submit", $.proxy(function () {
				this.sync();
				return true;
			}, this));


			//phpbb2
			this.$txtArea.parents("form").find("input[id*='preview'],input[id*='submit'],input[class*='preview'],input[class*='submit'],input[name*='preview'],input[name*='submit']").bind("mousedown", $.proxy(function () {
				this.sync();
				setTimeout($.proxy(function () {
					if (this.options.bbmode === false) {
						this.$txtArea.removeAttr("wbbsync").val("");
					}
				}, this), 1000);
			}, this));
			//end phpbb2

			if (this.options.initCallback) {
				this.options.initCallback.call(this);
			}

			$.log(this);
		}

		// Injecting the wysibb interface in the #activity-form-content textarea
		$("#activity-form-content").wysibb(wbbOpt);
	}

}


$(document).ready(function () {
	customWysibb();
});


function bbcodeToHtml(html) {
	console.info("using Arèn BBCode parser");
	//iframes
	html = html.replace(/(\[iframe\])(https:\/\/(fr\.|en\.|)vittascience\.com[a-zA-Z0-9?=&\/﻿]+)(\[\/iframe\])/gi, "<iframe width='100%' height='500' frameborder='0' allowfullscreen style='border:1px #d6d6d6 solid;' src=\"$2&embed=1&frameid=" + generateRandomString(6) + "\"></iframe>")
	html = html.replace(/(\[iframe\])(http:\/\/51\.178\.95\.45[a-zA-Z0-9?=&\/]+)(\[\/iframe\])/gi, "<iframe width='100%' height='500' frameborder='0' allowfullscreen style='border:1px #d6d6d6 solid;' src=\"$2&embed=1&frameid=" + generateRandomString(6) + "\"></iframe>")
	html = html.replace(/(\[iframe\])(http:\/\/vittascience[a-zA-Z0-9?=&\/\\]+)(\[\/iframe\])/gi, "<iframe width='100%' height='500' frameborder='0' allowfullscreen style='border:1px #d6d6d6 solid;' src=\"$2&embed=1&frameid=" + generateRandomString(6) + "\"></iframe>")
	html = html.replace(/(\[iframe\])(https:\/\/(vgamma|valpha|vbeta|vdelta|vdemo).vittascience[a-zA-Z0-9?=&\/\\\.]+)(\[\/iframe\])/gi, "<iframe width='100%' height='500' frameborder='0' allowfullscreen style='border:1px #d6d6d6 solid;' src=\"$2&embed=1&frameid=" + generateRandomString(6) + "\"></iframe>")

	html = html.replace(/(\[iframe\])(https:\/\/view\.genial\.ly[a-zA-Z0-9?=&_\-\/﻿]+)(\[\/iframe\])/gi, "<iframe width='100%' height='500' frameborder='0' allowfullscreen style='border:1px #d6d6d6 solid;' src=\"$2\"></iframe>");
	html = html.replace(/(\[iframe\])(https:\/\/docs\.google\.com[a-zA-Z0-9?=&_\-\/﻿]+)(\[\/iframe\])/gi, "<iframe width='100%' height='500' frameborder='0' allowfullscreen style='border:1px #d6d6d6 solid;' src=\"$2\"></iframe>");
	// Cabri iframe
	html = html.replace(/(\[iframe\])(http(s)?:\/\/.*?)(\[\/iframe\])/gi, "<iframe width='100%' height='620' frameborder='0' allowfullscreen style='border:1px #d6d6d6 solid;' src=\"$2\"></iframe>");

	//url
	html = html.replace(/(href=)/gi, " target=\"_blank\" $1")
	html = html.replace(/(\[url=)(.+?(?=\]))(\])(.+?(?=\[))(\[\/url\])/gi, "<a href='$2' target=\"_blank\">$4</a>")

	//pdf
	html = html.replace(/(\[embed\])(.+)(\[\/embed\])/gi, "<embed width=100% height=500 type=\"application/pdf\" src=\"$2\"/>")
	html = html.replace(/\[embed=A4\](.+)\[\/embed\]/gi, "<embed class='pdf-a4' type='application/pdf' src='$1'/>")

	//vimeo
	html = html.replace(/(\[vimeo\])([a-zA-Z0-9?=\-_&\/]+)(\[\/vimeo\])/gi, "<iframe src=\"https://player.vimeo.com/video/$2\" allowfullscreen allow='autoplay'>")

	//youtube
	html = html.replace(/(\[video\])([a-zA-Z0-9?=\-_&\/]+)(\[\/video\])/gi, "<iframe src='https://www.youtube.com/embed/$2' width=\"100%\" height=\"480\" frameborder=\"0\" allowfullscreen></iframe>")

	//peertube
	html = html.replace(/(\[peertube\])([a-zA-Z0-9?=\-_&.:\/]+)(\[\/peertube\])/gi, "<iframe src='$2' width=\"100%\" height=\"480\" frameborder=\"0\" allowfullscreen></iframe>")

	//bold
	html = html.replace(/\[b\]/gi, "<strong>")
	html = html.replace(/\[\/b\]/gi, "</strong>")
	//list
	html = html.replace(/\[list\]/gi, "<ul>")
	html = html.replace(/\[\/list\]/gi, "</ul></br>")
	html = html.replace(/\[\*\]/gi, "<li>")
	html = html.replace(/\[\/\*\]/gi, "</li>")
	//italic
	html = html.replace(/\[i\]/gi, "<i>")
	html = html.replace(/\[\/i\]/gi, "</i>")
	//underline
	html = html.replace(/\[u\]/gi, "<u>")

	html = html.replace(/\[\/u\]/gi, "</u>")
	//image
	html = html.replace(/(\[img)([a-zA-Z0-9?=&\/\\:\-,\+%._]*)(\])([a-zA-Z0-9éàçèïîôâàë?=&\/\\:%.\-\+\)\(_]+)(\[\/img\])/gi, "<img src='$4'/>")
	//line return
	html = html.replace(/\n/gi, "</br>")
	//exponent
	html = html.replace(/\[exp\]/gi, "<sup>")
	html = html.replace(/\[\/exp\]/gi, "</sup>")
	//right
	html = html.replace(/\[right\]/gi, "<p style='text-align:right;'>")
	html = html.replace(/\[\/right\]/gi, "</p>")
	//left
	html = html.replace(/\[left\]/gi, "<p style='text-align:left;'>")
	html = html.replace(/\[\/left\]/gi, "</p>")
	//center
	html = html.replace(/\[center\]/gi, "<p style='text-align:center;'>")
	html = html.replace(/\[\/center\]/gi, "</p>")
	//quote
	html = html.replace(/\[quote([=]?.*?)\]/gi, "<p style='font-style: italic;'>$1 a dit : </p><p style='text-align:center;background-color:var(--bg-1);'><span style='font-size:2em;'>\"</span>")
	html = html.replace(/\[\/quote\]/gi, "<span style='font-size:2em;'>\"</span></p>")

	//color
	html = html.replace(/\[color\=(#[a-zA-Z0-9]{1,6})]/gi, "<span style='color:$1;'>")
	html = html.replace(/\[\/color\]/gi, "</span>")

	//size
	html = html.replace(/\[size\=([0-9]{1,3})]/gi, "<span style='font-size:$1%;'>")
	html = html.replace(/\[\/size\]/gi, "</span>")

	/* ADDED REGEX FOR AREN */
	html = html.replace(/(\[instruction=)(.+?(?=\]))(\])(.+?(?=\[))(\[\/instruction\])/gi, "<div class='instruction' header='$2'>$4</div>")
	html = html.replace(/(\[instruction=)(.+?(?=\]))(\])(.+?(?=\[))(\[\/instruction\])/gi, "<div class='instruction' header='$2'>$4</div>")

	html = html.replace(/\[instruction\]/gi, "<div class='instruction'>")
	html = html.replace(/\[\/instruction\]/gi, "</div>")
	/* ADDED REGEX FOR AREN */
	return html
}