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

let proActivities = [{
        "name": "Cadre21",
        "image": "./assets/plugins/images/logo-cadre21.png",
        "link": "https://www.cadre21.org/inscription/"
    }

];

function loadCustomProActivitiesPanel(activities) {
    activities.forEach(proActivity => {
        let proActivityItem = $( /*html*/
            `<div class="proactivity-card" link="${proActivity.link}">
                <img class="proactivity-card-img" src="${proActivity.image}" alt="${proActivity.name}">
                <span class="proactivity-card-title mt-2">${proActivity.name}</span>
              </div>`);

        proActivityItem.click(function () {
            $('#current-proactivity > iframe').remove();
            $('#current-proactivity').append( /*html*/ `<iframe src="${$(this).attr('link')}" frameborder="0"></iframe>`);
            $('#current-proactivity').show();
            $('#proactivity-grid').hide();

        });
        $('#proactivity-grid').append(proActivityItem);

    });

    
}

function proActivityReturn() {
    $('#current-proactivity').hide();
    $('#proactivity-grid').show();
};


loadCustomProPanelTexts();
loadCustomProActivitiesPanel(proActivities);
