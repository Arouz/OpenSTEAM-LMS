function loadCustomProPanelTexts() {

    if (i18next && i18next.isInitialized) {
        let currentLang = getCookie('lng');
        if (!currentLang) {
            currentLang = 'fr';
        }
        switch (currentLang) {
            case 'fr':
                i18next.addResourceBundle('fr', 'translation', {
                    "aren": {
                        "ids": {
                            "classroom-dashboard-proactivities-panel-teacher": "Mes formations"
                        }
                    }
                });
                i18next.customLoaded = true;
                break;

            case 'en':
                i18next.addResourceBundle('en', 'translation', {
                    "aren": {
                        "ids": {
                            "classroom-dashboard-proactivities-panel-teacher": "My courses"
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
        $('#classroom-dashboard-sidebar-teacher').localize();

    } else {
        setTimeout(loadCustomProPanelTexts, 100);
    }
}

loadCustomProPanelTexts();