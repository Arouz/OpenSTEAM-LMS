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
                    "faqStudent": {
                        "1": {
                            "section_title": "Activités",
                            "question_list": {
                                "1": {
                                    "title": "À quoi sert l’onglet Mes activités?",
                                    "answer": "Dans l’onglet Mes Activités, tu pourras : Réaliser les activités déposées par ton ou tes enseignants. Tu peux sauvegarder celles que tu n’as pas encore terminées, et revoir celles que tu as faites !"
                                },
                                "2": {
                                    "title": "Qu’est-ce qu’une activité?",
                                    "answer": "Une activité est un contenu interactif qui peut inclure du texte, des images, des vidéos, des PDF, des interfaces ainsi que des outils externes. Le format d'affichage est basé sur les technologies du Web (HTML), ce qui permet de s'adapter à toute taille d'écran et de profiter d'options d'accessibilité avancées (police, couleurs, taille...)."
                                },
                                "3": {
                                    "title": "Qu’est-ce que la Banque de Ressources?",
                                    "answer": "La Banque de Ressources, ce sont des contenus et des activités gratuits et ou sous licence partagées par ton ou tes enseignants. À tout moment, tu peux y chercher des activités pour t’exercer et apprendre au-delà de ce que ton enseignant te fournis."
                                }
                            }
                        },
                        "2": {
                            "section_title": "Aide",
                            "question_list": {
                                "1": {
                                    "title": "À quoi sert l’onglet Aide?",
                                    "answer": "Dans l’onglet Appel à l’aide, tu vas pouvoir : Demander de l’aide à ton ou tes enseignants à tout moment et consulter les questions fréquemment posées. Tu pourras suivre l’échange de tes messages dans l’onglet Profil."
                                }
                            }
                        },
                        "3": {
                            "section_title": "Profil",
                            "question_list": {
                                "1": {
                                    "title": "À quoi sert l’onglet Profil?",
                                    "answer": "Dans l’onglet Profil, tu vas pouvoir : Gérer tes paramètres de compte, visualiser tes statistiques et échanger des messages avec ton enseignant."
                                },
                                "2": {
                                    "title": "Comment changer de mot de passe ou d’autres paramètres de compte?",
                                    "answer": "Pour changer de mot de passe ou d’autres paramètres, vas sur l’onglet Profil."
                                },
                                "3": {
                                    "title": "Comment change-t-on la langue?",
                                    "answer": "Le module Classe est actuellement disponible en français et en anglais. Pour changer de langue, allez va dans l'onglet profil, clique s sur le bouton « Paramètres », puis sélectionne s la langue qui te convient."
                                }
                            }
                        },
                    },
                    "faqTeacher": {
                        "1": {
                            "section_title": "Activités",
                            "question_list": {
                                "1": {
                                    "title": "À quoi sert l’onglet Mes activités?",
                                    "answer": "Dans l’onglet Mes activités, vous allez pouvoir : Utiliser une Banque de Ressources collaboratives pour découvrir des activités à faire avec vos apprenants, vos propres activités et parcours. Puis les attribuer à vos apprenants !"
                                },
                                "2": {
                                    "title": "Qu’est-ce qu’une activité?",
                                    "answer": "Une activité est un contenu interactif qui peut alterner du texte, des images, des vidéos, des PDF, ainsi que des outils externes comme des applications intégrées que vous ou votre collectivité aurez sélectionnées et bien d'autres. Le format d'affichage est basé sur les technologies du Web (HTML), ce qui permet de s'adapter à toute taille d'écran et de profiter d'options d'accessibilité avancées (police, couleurs, taille...)."
                                },
                                "3": {
                                    "title": "Comment créer ou modifier une activité?",
                                    "answer": "Le format de sauvegarde des activités s'appelle BBcode, un langage très simple à manipuler, que l’on retrouve également sur des sites comme WordPress. Vous pouvez donc facilement créer ou modifier des activités. Pour modifier une activité, rendez-vous dans l’onglet Mes activités et cliquez sur l’icône de votre activité, puis cliquez sur Modifier. N’oubliez pas de sauvegarder vos modifications."
                                },
                                "4": {
                                    "title": "Comment attribuer une activité?",
                                    "answer": "Vous pouvez attribuer une activité à toutes les classes que vous avez créées ou seulement à un apprenant en particulier. Pour attribuer une activité, vous avez trois options.<ol><li>Soit, vous vous rendez dans l’onglet Mes activités et cliquez sur l’icône de votre activité, puis cliquez sur Attribuer. Ensuite, vous n’aurez plus qu’à suivre les étapes. </li><li>L’option Attribuer est également disponible dans l’activité elle-même une fois ouverte. </li><li>Sinon, vous allez dans l’onglet Mes classes et cliquez sur une classe. Une fois arrivé sur le tableau de bord de la classe, vous n’avez plus qu’à cliquer sur le bouton « Ajouter une activité ».</li></ol>"
                                },
                                "5": {
                                    "title": "Comment tester une activité?",
                                    "answer": "Pour tester une activité, vous avez deux options.<ol><li>Soit aller dans Profil et cliquer sur le bouton « Passer en mode apprenant » puis sélectionner la classe dans laquelle vous souhaitez vous placer. Vous vous retrouvez sur le compte fictif d’un apprenant appelé «   Arendemo », vous pourrez y découvrir l’interface « Apprenant » et réaliser les activités que vous avez attribuées.</li><li>Soit aller sur Mes classes dans le tableau de bord d’une classe, vous pourrez alors vous placer dans la peau de l’apprenant depuis « Arendemo ». Pour cela, cliquer sur l’icône à cet effet et vous aurez la possibilité de devenir un apprenant de la classe et d’essayer les activités. Pour revenir au mode « Enseignant », il suffit d’aller dans l’onglet Profil du compte « Arendemo » et de cliquer sur  « Retourner au mode enseignant ».</li></ol>"
                                },
                                "6": {
                                    "title": "Comment supprimer l’attribution d’une activité sans supprimer l’activité?",
                                    "answer": "Pour supprimer l’attribution d’une activité, aller dans l’onglet Classe, ouvrir le tableau de bord d’une des classes, puis cliquez sur l’activité puis sur Modifier l’attribution. Vous n’avez plus qu’à modifier les paramètres, sélectionner ou désélectionner les apprenants."
                                },
                            }
                        },
                        "2": {
                            "section_title": "Classe",
                            "question_list": {
                                "1": {
                                    "title": "À quoi sert l’onglet Mes classes?",
                                    "answer": "Dans l’onglet Mes Classes, vous allez pouvoir : Créer vos propres classes et ajouter des apprenants, corriger les réponses de vos apprenants aux activités, et suivre leur progression."
                                },
                                "2": {
                                    "title": "Comment ajouter mes apprenants à ma classe?",
                                    "answer": "Plusieurs options s’offrent à vous : En classe, vous pouvez projeter le code au tableau. Pour cela, rendez-vous dans votre classe et cliquez sur le bouton afficher en plein écran. Vos apprenants n’auront plus qu’à s'inscrire ou se connecter sur le site en inscrivant le code. Ils pourront également noter ce code pour se connecter à la maison. Vous pouvez également créer des apprenants avec le bouton « Ajouter un apprenant » et ensuite leur communiquer leur mot de passe et le code individuellement, celui-ci est visible depuis le Tableau de bord de la classe. L’ajout d’apprenants par CSV est aussi possible, un exemple de fichier CSV est téléchargeable depuis la plateforme."
                                },
                                "3": {
                                    "title": "Un apprenant peut-il se trouver dans deux classes différentes?",
                                    "answer": "Cela est possible si le compte de l’apprenant est dupliqué dans une autre classe, ou avec un autre enseignant."
                                },
                                "4": {
                                    "title": "Comment attribuer une activité?",
                                    "answer": "Vous pouvez attribuer une activité à toutes les classes que vous avez créées ou seulement à un apprenant en particulier. Pour attribuer une activité, vous avez trois options.<ol><li>Soit, vous vous rendez dans l’onglet Mes activités et cliquez sur l’icône de votre activité puis cliquez sur Attribuer. Ensuite, vous n’aurez plus qu’à suivre les étapes.</li><li>Cette option Attribuer est également disponible dans l’activité elle-même une fois ouverte.</li><li>Sinon, vous allez dans l’onglet Mes classes et cliquez sur une classe. Une fois arrivé sur le tableau de bord de la classe, vous n’avez plus qu’à cliquer sur le bouton « Ajouter une activité ».</li></ol>"
                                },
                                "5": {
                                    "title": "Peut-on revenir sur l'attribution d’une activité?",
                                    "answer": "Pour revenir sur l’attribution d’une activité, aller dans l’onglet, ouvrir le tableau de bord d’une des classes, puis cliquez sur l’activité (l’icône change de couleur quand on passe dessus avec le curseur)puis sur Modifier l’attribution. Vous n’avez plus qu’à modifier les paramètres, sélectionner ou désélectionner les apprenants."
                                },
                                "6": {
                                    "title": "Comment l’évaluation des activités se fait-elle?",
                                    "answer": "Les évaluations se font manuellement sur 4 niveaux, soit : Très bonne maîtrise ; Maîtrise suffisante ; Maîtrise faible et Maîtrise insuffisante. Soit automatiquement sur 2 niveaux : Très bonne maîtrise et Maîtrise faible. Ce type d’évaluation permet à l’apprenant d’obtenir sa correction immédiatement et pour l’enseignant de bénéficier d’un gain de temps non négligeable. Une fois que l’apprenant a terminé son activité, il a la possibilité de la recommencer si l’enseignant a sélectionné le mode « Exercice » lors de l’attribution. Dans le mode « Évaluation », l’élève ne peut pas recommencer une fois l’activité validée. Pour visualiser les résultats, il vous suffit de vous rendre dans le Tableau de bord de la classe. Une activité non corrigée est symbolisée par un crayon dans le Tableau de bord. Pour la corriger, cliquez sur le crayon, ensuite il vous suffit d’évaluer et commenter le travail de l’apprenant. Pour aller plus vite, vous avez également la possibilité d’enregistrer vocalement votre commentaire grâce au microphone."
                                },
                                "7": {
                                    "title": "Comment sait-on lorsque les apprenants ont terminé leurs activités?",
                                    "answer": "Lorsqu’un apprenant a terminé son activité, vous recevrez une notification par courriel(e-mail). Ce paramètre sera ajustable à l’avenir, pour l’instant ce n’est pas paramétrable."
                                },
                                "8": {
                                    "title": "Comment modifier le nom d’une classe?",
                                    "answer": "Pour changer le nom de votre classe, il faudra cliquer sur l’icône d’une classe depuis l’onglet Mes classes, puis sur modifier. Vous n’aurez plus qu’à changer son nom."
                                },
                                "9": {
                                    "title": "Comment supprimer un apprenant d’une classe?",
                                    "answer": "Pour supprimer un apprenant, il suffit de cliquer sur l’icône de la classe à côté du nom de l’apprenant sur le Tableau de bord de la classe. Attention, cette action est irréversible et supprime le compte de l’apprenant."
                                },
                                "10": {
                                    "title": "À quoi sert le bouton anonymiser dans le Tableau de bord?",
                                    "answer": "Ce bouton remplace le nom des apprenants par des numéros. Cela permet de projeter les résultats des élèves au tableau anonymement pour ne pas stigmatiser certains élèves."
                                }
                            }
                        },
                        "3": {
                            "section_title": "Profil",
                            "question_list": {
                                "1": {
                                    "title": "À quoi sert l’onglet Profil?",
                                    "answer": "Dans l’onglet Profil, vous pourrez : Gérer vos paramètres de compte, visualiser vos statistiques, et échanger des messages avec vos apprenants."
                                },
                                "2": {
                                    "title": "Comment changer de mot de passe ou d’autres paramètres de compte?",
                                    "answer": "Pour changer de mot de passe ou d’autres paramètres, allez sur l’onglet Profil."
                                },
                                "3": {
                                    "title": "Comment change-t-on la langue?",
                                    "answer": "Le module Classe est actuellement disponible en français et en anglais. Pour changer de langue, allez dans l'onglet Profil, cliquez sur le bouton  « Paramètres », puis sélectionnez la langue qui vous convient."
                                },
                                "4": {
                                    "title": "Qu’est-ce que le mode apprenant?",
                                    "answer": "Dans votre profil, cliquez sur le bouton « Passer en mode apprenant ». Après avoir choisi une classe, vous vous retrouvez sur le compte fictif d’un apprenant appelé « Arendemo », dans lequel vous pourrez découvrir l’interface Apprenant et réaliser les activités que vous avez attribuées. Pour revenir au mode « Enseignant », il suffit d’aller dans l’onglet du compte Arendemo et de cliquer sur  « Retourner au mode enseignant »."
                                }
                            }
                        },
                        "4": {
                            "section_title": "Questions générales",
                            "question_list": {
                                "1": {
                                    "title": "Comment maitriser le module Classe?",
                                    "answer": "Nous organisons régulièrement des présentations et des webinaires. Pour réserver une démonstration en visioconférence avec l’un de nos délégués pédagogiques, contactez le info@areneducation.com"
                                },
                                "2": {
                                    "title": "Sur quel support le module Classe est-il compatible?",
                                    "answer": "Les interfaces fonctionnent sans installation, sur ordinateur, tablette et téléphones intelligents ! Les mises à jour sont automatiques et vos programmes sont sauvegardés dans le cloud. Pour profiter pleinement de toutes les fonctionnalités, nous vous conseillons d’utiliser le navigateur Chrome."
                                }
                            }
                        },
                        "5": {
                            "section_title": "Difficulté technique",
                            "question_list": {
                                "1": {
                                    "title": "Comment signaler un problème ou faire part de mes commentaires?",
                                    "answer": "Vous pouvez nous contacter depuis l’onglet Profil en cliquant sur le bouton « Aide »."
                                }
                            }
                        },
                        "6": {
                            "section_title": "Abonnement",
                            "question_list": {
                                "1": {
                                    "title": "Pour en savoir plus au sujet des abonnements?",
                                    "answer": "Contactez le info@areneducation.com"
                                }
                            }
                        },
                        "7": {
                            "section_title": "Licences et autorisations",
                            "question_list": {
                                "1": {
                                    "title": "Peut-on faire une description ou présentation du module Classe?",
                                    "answer": "Oui, vous pouvez réutiliser les visuels du module Classe pour créer une description, présentation, formation, tutoriel, cours ou autre. Si vous souhaitez inclure des images ou contenus d'activités, il est important de mentionner le nom de l'auteur ou la source."
                                },
                                "2": {
                                    "title": "Peut-on réutiliser les activités de la communauté?",
                                    "answer": "Oui, toutes les activités visibles dans la banque de ressources sont sous licence Creative Commons. Deux cas sont possibles.<ol><li>L'auteur souhaite que le contenu soit partagé dans un usage non-commercial uniquement et à condition de mentionner son nom. Le contenu peut être modifié.</li><li>L'auteur souhaite que le contenu soit partagé dans un usage non-commercial uniquement et à condition de mentionner son nom. Le contenu ne peut pas être modifié.</li></ol>"
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
                    "faqStudent": {
                        "1": {
                            "section_title": "Activities",
                            "question_list": {
                                "1": {
                                    "title": "What is the My Activities tab for?",
                                    "answer": "In the My Activities tab, you can: Carry out the activities submitted by your teacher(s). You can save the ones you haven't finished yet and review the ones you've done!"
                                },
                                "2": {
                                    "title": "What is an activity?",
                                    "answer": "An activity is interactive content that can include text, images, videos, PDFs, interfaces, and external tools. The display format is based on Web technologies (HTML), which makes it possible to adapt to any screen size and enjoy advanced accessibility options (font, colors, size...)."
                                },
                                "3": {
                                    "title": "What is the Resource Bank?",
                                    "answer": "The Resource Bank is free and/or licensed content and activities shared by your teacher(s). At any time, you can look for activities to practice and learn beyond what your teacher provides."
                                }
                            }
                        },
                        "2": {
                            "section_title": "Help",
                            "question_list": {
                                "1": {
                                    "title": "What is the Help tab for?",
                                    "answer": "In the Call for Help tab, you'll be able to: Ask your teacher(s) for help at any time and view frequently asked questions. You will be able to track the exchange of your messages in the Profile tab."
                                }
                            }
                        },
                        "3": {
                            "section_title": "Profile",
                            "question_list": {
                                "1": {
                                    "title": "What is the Profile tab for?",
                                    "answer": "In the Profile tab, you will be able to: Manage your account settings, view your statistics, and exchange messages with your teacher."
                                },
                                "2": {
                                    "title": "How to change password or other account settings?",
                                    "answer": "To change your password or other settings, go to the Profile tab."
                                },
                                "3": {
                                    "title": "How do we change the language?",
                                    "answer": "The Class module is currently available in French and English. To change the language, go to the profile tab, click on the \"Settings\" button, then select the language that suits you."
                                }
                            }
                        },
                    },
                    "faqTeacher": {
                        "1": {
                            "section_title": "Activities",
                            "question_list": {
                                "1": {
                                    "title": "What is the My Activities tab for?",
                                    "answer": "In the My Activities tab, you will be able to: Use a Collaborative Resource Bank to discover activities to do with your learners, your own activities, and paths. Then assign them to your learners!"
                                },
                                "2": {
                                    "title": "What is an activity?",
                                    "answer": "An activity is interactive content that can alternate text, images, videos, PDFs, as well as external tools such as integrated applications that you or your community have selected and many others. The display format is based on Web technologies (HTML), which makes it possible to adapt to any screen size and enjoy advanced accessibility options (font, colors, size...)."
                                },
                                "3": {
                                    "title": "How do I create or edit an activity?",
                                    "answer": "The format for saving activities is called BBcode, a very simple language to manipulate, which is also found on sites like WordPress. So, you can easily create or edit activities. To edit an activity, go to the My Activities tab and click your activity icon, then click Edit. Don't forget to save your changes."
                                },
                                "4": {
                                    "title": "How do I assign an activity?",
                                    "answer": "You can assign an activity to all the classes you have created or only to a specific learner. To assign an activity, you have three options.<ol><li>Either you go to the My Activities tab and click on the icon of your activity, then click on Assign. Then you will only have to follow the steps.</li><li>Either you go to the My Activities tab and click on the icon of your activity, then click on Assign. Then you will only have to follow the steps.</li><li>Otherwise, you go to the My Classes tab and click on a class. Once you have arrived on the class dashboard, all you have to do is click on the \"Add an activity\" button.</li></ol>"
                                },
                                "5": {
                                    "title": "How do I test an activity?",
                                    "answer": "To test an activity, you have two options. <ol><li>Either go to Profile and click on the \"Switch to learning mode\" button and select the class in which you want to place yourself. You will find yourself on the fictitious account of a learner called \"Arendemo\", you will be able to discover the \"Learner\" interface and carry out the activities you have assigned.</li><li>Either go to My Classes in the dashboard of a class, you can then place yourself in the shoes of the learner from \"Arendemo\". To do this, click on the icon for this purpose and you will have the opportunity to become a learner of the class and try the activities. To return to the \"Teacher\" mode, simply go to the Profile tab of the \"Arendemo\" account and click on \"Return to Teacher Mode\".</li></ol>"
                                },
                                "6": {
                                    "title": "How to remove the assignment of an activity without deleting the activity?",
                                    "answer": "To remove the assignment of an activity, go to the Class tab, open the dashboard of one of the classes, then click on the activity and then on Edit Assignment. All you have to do is change the settings, select or deselect the learners."
                                },
                            }
                        },
                        "2": {
                            "section_title": "Class",
                            "question_list": {
                                "1": {
                                    "title": "What is the My Classes tab for?",
                                    "answer": "In the My Classes tab, you will be able to: Create your own classes and add learners, correct your learners' responses to activities, and track their progress."
                                },
                                "2": {
                                    "title": "How do I add my learners to my class?",
                                    "answer": "Several options are available to you: In class, you can project the code on the board. To do this, go to your class and click on the show button in full screen. Your learners will only have to register or log in to the site by entering the code. They will also be able to write down this code to connect to the house. You can also create learners with the \"Add Learner\" button and then give them their password and code individually, which is visible from the Class Dashboard. The addition of learners by CSV is also possible, an example of a CSV file can be downloaded from the platform. "
                                },
                                "3": {
                                    "title": "Can a learner be in two different classes?",
                                    "answer": "This is possible if the learner's account is duplicated in another class, or with another teacher."
                                },
                                "4": {
                                    "title": "How do I assign an activity?",
                                    "answer": "You can assign an activity to all the classes you have created or only to a specific learner. To assign an activity, you have three options.<ol><li>Either you go to the My Activities tab and click on the icon of your activity then click on Assign. Then you will only have to follow the steps.</li><li>This Assign option is also available in the activity itself once opened. </li><li>Otherwise, you go to the My Classes tab and click on a class. Once you have arrived on the class dashboard, all you must do is click on the \"Add an activity\" button.</li></ol>"
                                },
                                "5": {
                                    "title": "Can we go back on the allocation of an activity?",
                                    "answer": "To return to the assignment of an activity, go to the tab, open the dashboard of one of the classes, then click on the activity (the icon changes color when you switch to it with the cursor) then on Edit attribution. All you must do is change the settings, select or deselect the learners."
                                },
                                "6": {
                                    "title": "How is the evaluation of activities done?",
                                    "answer": "Assessments are done manually on 4 levels, namely: Very good mastery; Sufficient mastery; Weak mastery and insufficient mastery. Either automatically on 2 levels: Very good mastery and low mastery. This type of assessment allows the learner to obtain his correction immediately and for the teacher to benefit from a significant time saving. Once the learner has completed their activity, they have the option to start it again if the teacher has selected the \"Exercise\" mode during the assignment. In the \"Assessment\" mode, the student cannot start again once the activity has been validated. To view the results, simply go to the Class Dashboard. An undirected activity is symbolized by a pencil in the Dashboard. To correct it, click on the pencil, then you just must evaluate and comment on the learner's work. To go faster, you also have the option to voice record your comment through the microphone."
                                },
                                "7": {
                                    "title": "How do we know when learners have completed their activities?",
                                    "answer": "When a learner has completed their activity, you will receive an email notification. This parameter will be adjustable in the future, for the moment it is not configurable."
                                },
                                "8": {
                                    "title": "How do I change the name of a class?",
                                    "answer": "To change the name of your class, click on the icon of a class from the My Classes tab, then click on edit. All you must do is change its name."
                                },
                                "9": {
                                    "title": "How to remove a learner from a class?",
                                    "answer": "To delete a learner, simply click on the class icon next to the learner's name on the Class Dashboard. Be careful, this action is irreversible and deletes the learner's account."
                                },
                                "10": {
                                    "title": "What is the purpose of the anonymize button in the Dashboard?",
                                    "answer": "This button replaces learners' names with numbers. This makes it possible to project the students' results on the board anonymously so as not to stigmatize certain students."
                                }
                            }
                        },
                        "3": {
                            "section_title": "Profile",
                            "question_list": {
                                "1": {
                                    "title": "What is the Profile tab for?",
                                    "answer": "In the Profile tab, you will be able to: Manage your account settings, view your statistics, and exchange messages with your learners."
                                },
                                "2": {
                                    "title": "How to change password or other account settings?",
                                    "answer": "To change your password or other settings, go to the Profile tab."
                                },
                                "3": {
                                    "title": "How do we change the language?",
                                    "answer": "The Class module is currently available in French and English. To change the language, go to the Profile tab, click on the \"Settings\" button, then select the language that suits you."
                                },
                                "4": {
                                    "title": "What is Learner Mode?",
                                    "answer": "In your profile, click on the \"Switch to learning mode\" button. After choosing a class, you find yourself on the fictitious account of a learner called \"Arendemo\", in which you can discover the Learner interface and perform the activities you have assigned. To return to the \"Teacher\" mode, simply go to the Arendemo account tab and click on \"Return to Teacher Mode\"."
                                }
                            }
                        },
                        "4": {
                            "section_title": "General questions",
                            "question_list": {
                                "1": {
                                    "title": "How to master the Class module?",
                                    "answer": "We regularly organize presentations and webinars. To book a videoconference demonstration with one of our teaching representatives, contact info@areneducation.com"
                                },
                                "2": {
                                    "title": "On which media is the Class module compatible?",
                                    "answer": "The interfaces work without installation, on computer, tablet and smart phones! Updates are automatic and your programs are backed up to the cloud. To take full advantage of all the features, we recommend that you use the Chrome browser."
                                }
                            }
                        },
                        "5": {
                            "section_title": "Technical difficulty",
                            "question_list": {
                                "1": {
                                    "title": "How do I report a problem or provide feedback?",
                                    "answer": "You can contact us from the Profile tab by clicking on the \"Help\" button. "
                                }
                            }
                        },
                        "6": {
                            "section_title": "Subscription",
                            "question_list": {
                                "1": {
                                    "title": "Want to know more about subscriptions?",
                                    "answer": "Contact info@areneducation.com"
                                }
                            }
                        },
                        "7": {
                            "section_title": "Licenses and Permissions",
                            "question_list": {
                                "1": {
                                    "title": "Can I make a description or presentation of the Class module?",
                                    "answer": "Yes, you can reuse the visuals in the Class module to create a description, presentation, training, tutorial, course, or other. If you want to include images or content of activities, it is important to mention the name of the author or the source."
                                },
                                "2": {
                                    "title": "Can community activities be reused?",
                                    "answer": "Yes, all activities visible in the asset store are licensed under a Creative Commons license. Two cases are possible.<ol><li>The author wants the content to be shared for non-commercial use only and provided that his name is mentioned. The content can be modified.</li><li>The author wants the content to be shared for non-commercial use only and provided that his name is mentioned. The content cannot be edited.</li></ol>"
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


// Changing the classroom_dashboard_help_panel method in DisplayPanel
DisplayPanel.prototype.classroom_dashboard_help_panel = function () {
    // Check if the custom i18next translations have been loaded
    if (typeof i18next.customLoaded == 'undefined') {
        let displayPanel = new DisplayPanel();
        setTimeout(displayPanel.classroom_dashboard_help_panel, 250);
        return;
    }

    if (!Main.getClassroomManager()._myTeachers) {
        Main.getClassroomManager().getTeachers(Main.getClassroomManager()).then(function () {
            teachersList()
        })
    } else {
        teachersList()
    }

    let html = ''
    let index = [4, 2, 4]
    for (let i = 1; i <= index.length; i++) {
        html += "<h4 data-i18n='[html]faqStudent." + i + ".section_title'></h4>";
        for (let j = 1; j < index[i - 1]; j++) {
            html += `<div class="kit-faq-box">
            <div class="faq-box-header" style="transform: rotate(0deg); transform-origin: 50% 50% 0px;">
                <div class="faq-box-dropdown">
                    <span class="fa fa-chevron-right" style="line-height:40px; font-size:16px;"></span>
                </div>
                <p style="font-size:16px; margin:0; padding:0;">
                    <b data-i18n='[html]faqStudent.` + i + `.question_list.` + j + `.title'></b>
                </p>
            </div>
            <div class="faq-box-content">
            <p data-i18n='[html]faqStudent.` + i + `.question_list.` + j + `.answer'></p>
            </div>
        </div>`

        }
    }

    $('#student-faq-container').html(html);
    if (!UserManager.getUser().isFromGar) {
        $('#student-faq-container').localize();
    }

    var headers = document.getElementsByClassName("faq-box-header");
    $(headers).rotate({
        bind: {
            click: function () {
                var drop = $(this).find(".faq-box-dropdown");
                var content = $(this).parent().find(".faq-box-content");
                if (drop.hasClass("dropped")) {
                    drop.rotate({
                        angle: drop.getRotateAngle(),
                        animateTo: 0
                    });
                    content.fadeOut("slow", function () {
                        drop.removeClass("dropped");
                    });
                } else {
                    drop.rotate({
                        angle: drop.getRotateAngle(),
                        animateTo: 90
                    });
                    content.fadeIn("slow", function () {
                        drop.addClass("dropped");
                    });
                }
            }
        }
    });
}

// Changing the classroom_dashboard_help_panel_teacher method in DisplayPanel
DisplayPanel.prototype.classroom_dashboard_help_panel_teacher = function () {
    // Check if the custom i18next translations have been loaded
    if (typeof i18next.customLoaded == 'undefined') {
        let displayPanel = new DisplayPanel();
        setTimeout(displayPanel.classroom_dashboard_help_panel_teacher, 250);
        return;
    }
    let html = ''
    let index = [7, 11, 5, 3, 2, 2, 3] // number of questions+1 per category in faq
    for (let i = 1; i <= index.length; i++) {
        html += "<h4 data-i18n='[html]faqTeacher." + i + ".section_title'></h4>";
        for (let j = 1; j < index[i - 1]; j++) {
            html += `<div class="kit-faq-box">
            <div class="faq-box-header" style="transform: rotate(0deg); transform-origin: 50% 50% 0px;">
                <div class="faq-box-dropdown">
                    <span class="fa fa-chevron-right" style="line-height:40px; font-size:16px;"></span>
                </div>
                <p style="font-size:16px; margin:0; padding:0;">
                    <b data-i18n='[html]faqTeacher.` + i + `.question_list.` + j + `.title'></b>
                </p>
            </div>
            <div class="faq-box-content">
            <p data-i18n='[html]faqTeacher.` + i + `.question_list.` + j + `.answer'></p>
            </div>
        </div>`

        }
    }

    $('#teacher-faq-container').html(html);
    if (!UserManager.getUser().isFromGar) {
        $('#teacher-faq-container').localize();
    }

    var headers = document.getElementsByClassName("faq-box-header");
    $(headers).rotate({
        bind: {
            click: function () {
                var drop = $(this).find(".faq-box-dropdown");
                var content = $(this).parent().find(".faq-box-content");
                if (drop.hasClass("dropped")) {
                    drop.rotate({
                        angle: drop.getRotateAngle(),
                        animateTo: 0
                    });
                    content.fadeOut("slow", function () {
                        drop.removeClass("dropped");
                    });
                } else {
                    drop.rotate({
                        angle: drop.getRotateAngle(),
                        animateTo: 90
                    });
                    content.fadeIn("slow", function () {
                        drop.addClass("dropped");
                    });
                }
            }
        }
    });
}