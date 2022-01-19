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
                            "classroom-dashboard-proactivities-panel-teacher": "Mes formations",
                            "select-proactivity-title": "Sélectionnez une formation"
                        }
                    }
                });
                i18next.customLoaded = true;
                break;

            case 'en':
                i18next.addResourceBundle('en', 'translation', {
                    "aren": {
                        "ids": {
                            "classroom-dashboard-proactivities-panel-teacher": "My courses",
                            "select-proactivity-title": "Select a course"
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

        // Loading Proactivities panel
        loadCustomProActivitiesPanel(proActivities);

    } else {
        setTimeout(loadCustomProPanelTexts, 100);
    }
    
    
}

let proActivities = [{
        "name": "Cadre21",
        "image": "./assets/plugins/images/logo-cadre21.png",
        "link": "https://www.cadre21.org/inscription/",
        "color": "#D7DF21"
    },
    {
        "name": "M@gistère",
        "image": "./assets/plugins/images/logo-magistere.svg",
        "link": "https://magistere.education.fr/",
        "color": "#0095DB"
    }
];

function loadCustomProActivitiesPanel(activities) {
    $('#proactivity-grid').append(`<div class="proactivity-head" data-i18n="aren.ids.select-proactivity-title">
    </div>`);

    activities.forEach(proActivity => {
        let proActivityItem = $( /*html*/
            `<div class="proactivity-card" link="${proActivity.link}" style="--border-color:${proActivity.color};">
            <img class="proactivity-card-img" src="${proActivity.image}" alt="${proActivity.name}">
            <span class="proactivity-card-title mt-2">${proActivity.name}</span>
            </div>`);

        proActivityItem.click(function () {
            $('#current-proactivity > iframe').remove();
            $('#current-proactivity').append( /*html*/ `<iframe src="${$(this).attr('link')}" frameborder="0"></iframe>`);
            $('#current-proactivity').show();
            $('#proactivity-grid').hide();

        });
        $('#proactivity-grid').append(proActivityItem)
        $('#proactivity-grid').localize();
    });
}

function proActivityReturn() {
    $('#current-proactivity').hide();
    $('#proactivity-grid').show();
};

loadCustomProPanelTexts()