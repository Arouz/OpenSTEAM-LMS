function loadLoginPageFAQStrings() {

    if (i18next && i18next.isInitialized) {
        let currentLang = getCookie('lng');
        if (!currentLang) {
            currentLang = 'fr';
        }
        switch (currentLang) {
            case 'fr':
                i18next.addResourceBundle('fr', 'translation', {
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

loadLoginPageFAQStrings();