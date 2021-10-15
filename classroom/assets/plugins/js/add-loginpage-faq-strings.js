function loadLoginPageFAQStrings() {

    if (i18next && i18next.isInitialized) {
        let currentLang = getCookie('lng');
        if (!currentLang) {
            currentLang = 'fr';
        }
        switch (currentLang) {
            case 'fr':
                i18next.addResourceBundle('fr', 'translation', {
                    "faqInfo": {
                        "title": "Foire Aux Questions",
                        "1": {
                            "section_title": "Questions générales",
                            "question_list": {
                                "1": {
                                    "title": "Qu’est-ce que le module Classe?",
                                    "answer": "Le module Classe facilite l'attribution de contenus pédagogiques et le suivi des apprenants. Les enseignants peuvent utiliser les contenus de la communauté, ou bien créer leurs propres activités et les partager."
                                },
                                "2": {
                                    "title": "Qui utilise le module Classe?",
                                    "answer": "En cours comme à la maison ou en atelier périscolaire, le module Classe est utilisé par des enseignants (professeurs, animateurs, formateurs, etc.) et leurs apprenants (élèves, étudiants, apprentis, etc.)."
                                },
                                "3": {
                                    "title": "Sur quels supports peut-on utiliser le module Classe?",
                                    "answer": "Le module Classe fonctionne sur ordinateurs, tablettes et téléphones intelligents avec la plupart des navigateurs et une connexion internet."
                                },
                                "4": {
                                    "title": "Peut-on demander une démonstration?",
                                    "answer": "Nous organisons régulièrement des webinaires de présentation du module Classe. Pour en savoir plus, vous pouvez communiquer avec nous au info@areneducation.com"
                                },
                                "5": {
                                    "title": "Comment signaler un problème et faire part de mes commentaires concernant le module Classe?",
                                    "answer": "Vous pouvez nous contacter au sujet du module Classe dans l’onglet Profil avec le bouton  « Aide »."
                                },
                                "6": {
                                    "title": "Est-ce que le module Classe est disponible en plusieurs langues?",
                                    "answer": "Oui, le module Classe est actuellement disponible en français et en anglais. Pour changer de langue, allez dans l'onglet Profil, cliquez sur le bouton  « Paramètres », puis sélectionnez la langue qui vous convient."
                                },
                            }
                        },
                        "2": {
                            "section_title": "Licences et autorisations",
                            "question_list": {
                                "1": {
                                    "title": "Peut-on faire une description ou présentation du module Classe?",
                                    "answer": "Oui, vous pouvez réutiliser les visuels du module Classe pour créer une description, présentation, formation, tutoriel, cours ou autre. Si vous souhaitez inclure des images ou contenus d'activités, il est important de mentionner l'auteur ou la source."
                                },
                                "2": {
                                    "title": "Peut-on réutiliser les activités de la communauté?",
                                    "answer": "Oui, toutes les activités visibles dans la banque de ressources sont sous licence Creative Commons. Deux cas sont possibles.<ol><li>L'auteur souhaite que le contenu soit partagé dans un usage non-commercial uniquement et à condition de mentionner son nom. Le contenu peut être modifié.</li><li>L'auteur souhaite que le contenu soit partagé dans un usage non-commercial uniquement et à condition de mentionner son nom. Le contenu ne peut pas être modifié.</li></ol>"
                                }
                            }
                        },
                        "3": {
                            "section_title": "Comptes",
                            "question_list": {
                                "1": {
                                    "title": "Comment se connecter au module Classe?",
                                    "answer": "Il est possible de se connecter au module Classe de trois façons.<ol><li>Code classe : permet aux apprenants de s'inscrire ou se connecter rapidement avec seulement un pseudonyme (sans renseigner d'adresse courriel). Un code classe est généré automatiquement pour chaque classe créée par l'enseignant.</li><li>Code enseignant : permet à l'enseignant de se connecter grâce à un compte ARÉN+(adresse courriel et mot de passe). Cette méthode est réservée aux enseignants et ne convient pas aux apprenants (RGPD).</li><li>Compte authentifier : le gestionnaire d’accès aux ressources qui a pour objectif de simplifier et sécuriser les accès authentifiés entre les usagers des espaces numériques de travail et leurs ressources numériques.</li></ol>Plus de renseignements sont disponibles sur la page d’accueil de l’ARÉN+ concernant le respect de la vie privée et concernant la politique de la protection des données personnelles."
                                },
                                "2": {
                                    "title": "Comment créer un compte?",
                                    "answer": "Cliquez simplement sur « S’abonner » de la page d’accueil de l’ARÉN Éducation ou de l’ARÉN+. Un courriel (e-mail)vous sera envoyé pour confirmer votre compte. Cliquez sur le lien pour confirmer votre compte. Une fois votre compte confirmé, vous pourrez explorer l’interface, créer vos activités et les partager. Si vous avez opté pour une offre payante, vous pourrez procéder à la création d’un devis pour votre établissement ou à son achat, puis votre compte sera activé."
                                },
                                "3": {
                                    "title": "Qu’est-ce qu’un compte enseignant?",
                                    "answer": "Tout compte créé à partir d'une adresse courriel ou du GAR peut être utilisé comme compte enseignant. Un compte enseignant possède des fonctionnalités pour créer des comptes apprenants, organiser les activités et échanger des commentaires avec ses apprenants."
                                },
                                "4": {
                                    "title": "Qu’est-ce qu’un compte apprenant?",
                                    "answer": "Un compte apprenant permet de réaliser les activités demandées par des enseignants, d’explorer les interfaces et de partager ses propres réalisations. Seul un pseudonyme est requis pour la création d'un compte apprenant. Un code à 4 chiffres est généré automatiquement pour sécuriser l'accès des apprenants, seul l'enseignant peut modifier celui-ci."
                                },
                                "5": {
                                    "title": "Nom d’utilisateur ou mot de passe oublié?",
                                    "answer": "Si vous avez un compte enseignant, vous pouvez recevoir un courriel (e-mail)de récupération de mot de passe via votre adresse courriel. En tant qu'apprenant, vous devez demander à votre enseignant de réinitialiser votre code à 4 chiffres."
                                },
                                "6": {
                                    "title": "Comment changer de mot de passe ou d’autres paramètres de compte?",
                                    "answer": "Pour changer de mot de passe ou d’autres paramètres, allez sur l’onglet Profil et cliquer sur le bouton « Paramètres », ou nous écrire au info@areneducation.com."
                                }
                            }
                        },
                    },
                    "aren": {
                        "login": {
                            "subtitle": "Une nouvelle façon pour les enseignants de profiter pleinement de la technologie !",
                            "features": {
                                "paragraph": "Pour en savoir plus : Découvrez les nombreux outils de notre application"
                            }
                        }
                    }
                });
                i18next.customLoaded = true;
                break;

            case 'en':
                i18next.addResourceBundle('en', 'translation', {
                    "faqInfo": {
                        "title": "FAQ",
                        "1": {
                            "section_title": "General questions",
                            "question_list": {
                                "1": {
                                    "title": "What is the Class module?",
                                    "answer": "The Classroom module facilitates the assignment of educational content and the follow-up of learners. Teachers can use community content or create their own activities and share them."
                                },
                                "2": {
                                    "title": "Who uses the Class module?",
                                    "answer": "In classes as well as at home or in extracurricular workshops, the Class module is used by teachers (teachers, facilitators, trainers, etc.) and their learners (pupils, students, apprentices, etc.)."
                                },
                                "3": {
                                    "title": "On which media can the Class module be used?",
                                    "answer": "The Class module works on computers, tablets and smartphones with most browsers and an internet connection."
                                },
                                "4": {
                                    "title": "Can I request a demonstration?",
                                    "answer": "We regularly organize webinars to present the Class module. For more information, you can contact us at info@areneducation.com"
                                },
                                "5": {
                                    "title": "How do I report a problem and provide feedback on the Class module?",
                                    "answer": "You can contact us about the Class module in the Profile tab with the \"Help\" button."
                                },
                                "6": {
                                    "title": "Is the Class module available in several languages?",
                                    "answer": "Yes, the Class module is currently available in French and English. To change the language, go to the Profile tab, click on the \"Settings\" button, then select the language that suits you"
                                },
                            }
                        },
                        "2": {
                            "section_title": "Licenses and Permissions",
                            "question_list": {
                                "1": {
                                    "title": "Can I make a description or presentation of the Class module?",
                                    "answer": "Yes, you can reuse the visuals in the Class module to create a description, presentation, training, tutorial, course, or other. If you want to include images or activity content, it is important to mention the author or source."
                                },
                                "2": {
                                    "title": "Can community activities be reused?",
                                    "answer": "Yes, all activities visible in the asset store are licensed under a Creative Commons license. Two cases are possible.<ol><li>The author wants the content to be shared for non-commercial use only and provided that his name is mentioned. The content can be modified.</li><li>The author wants the content to be shared for non-commercial use only and provided that his name is mentioned. The content can be modified.</li></ol>"
                                }
                            }
                        },
                        "3": {
                            "section_title": "Accounts",
                            "question_list": {
                                "1": {
                                    "title": "How do I connect to the Class module?",
                                    "answer": "It is possible to connect to the Class module in three ways.<ol><li>Class code: allows learners to register or log in quickly with only a pseudonym (without entering an email address). A class code is automatically generated for each class created by the teacher.</li><li>Teacher code: allows the teacher to log in using an ARÉN+ account (email address and password). This method is reserved for teachers and is not suitable for learners (GDPR).</li><li>Authenticate account: the asset access manager who aims to simplify and secure authenticated access between users of digital workspaces and their digital resources.</li></ol>More information is available on the ARÉN+ homepage regarding privacy and the personal data protection policy."
                                },
                                "2": {
                                    "title": "How do I create an account?",
                                    "answer": "Simply click on \"Subscribe\" on the ARÉN Education or ARÉN+ homepage. An email will be sent to you to confirm your account. Click the link to confirm your account. Once your account is confirmed, you'll be able to explore the interface, create your activities, and share them. If you have opted for a paid offer, you will be able to proceed with the creation of a quote for your establishment or its purchase, then your account will be activated."
                                },
                                "3": {
                                    "title": "What is a teacher account?",
                                    "answer": "Any account created from an email address or RBM can be used as a teacher account. A teacher account has features to create learner accounts, organize activities, and exchange feedback with its learners."
                                },
                                "4": {
                                    "title": "What is a learner account?",
                                    "answer": "A learner account allows you to carry out the activities requested by teachers, explore interfaces, and share your own achievements. Only a pseudonym is required for the creation of a learner account. A 4-digit code is automatically generated to secure learners' access, only the teacher can modify it."
                                },
                                "5": {
                                    "title": "Forgot your username or password?",
                                    "answer": "If you have a teacher account, you can receive a password recovery email via your email address. As a learner, you need to ask your teacher to reset your 4-digit code."
                                },
                                "6": {
                                    "title": "How to change password or other account settings?",
                                    "answer": "To change your password or other settings, go to the Profile tab and click on the \"Settings\" button, or write to us at info@areneducation.com"
                                }
                            }
                        },
                    },
                    "aren": {
                        "login": {
                            "subtitle": "A new way for teachers to take full advantage of technology!",
                            "features": {
                                "paragraph": "To know more : Discover the many tools of our application"
                            }
                        }
                    }
                });
                i18next.customLoaded = true;
                break;

            default:
                i18next.customLoaded = true;
                break;
        }

        // Sections to format
        $("body").localize();

    } else {
        setTimeout(loadLoginPageFAQStrings, 100);
    }
}

function loginFaq() {
    let html = ''
    let index = [7, 3, 7]
    for (let i = 1; i < 4; i++) {
        html += "<h3 data-i18n='[html]faqInfo." + i + ".section_title'></h3>";
        for (let j = 1; j < index[i - 1]; j++) {
            html += `<div class="kit-faq-box">
            <div class="faq-box-header" style="transform: rotate(0deg); transform-origin: 50% 50% 0px;">
                <div class="faq-box-dropdown">
                    <span class="fa fa-chevron-right" style="line-height:40px; font-size:16px;"></span>
                </div>
                <p style="font-size:16px; margin:0; padding:0;">
                    <b data-i18n='[html]faqInfo.` + i + `.question_list.` + j + `.title'></b>
                </p>
            </div>
            <div class="faq-box-content">
            <p data-i18n='[html]faqInfo.` + i + `.question_list.` + j + `.answer'></p>
            </div>
        </div>`

        }
    }
    $('#classroom-faq div h2').after(html)
    if ($("#classroom-faq").localize) {
        $("#classroom-faq").localize();
    }
}

loadLoginPageFAQStrings();