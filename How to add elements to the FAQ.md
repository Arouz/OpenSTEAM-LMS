# How to add elements to the FAQ

## On the homepage

1. Open the `plugins\plugin-aren-loginpage-faq\public\js\add-loginpage-faq-strings.js` file.
2. Add the translations for the new questions on both the french and english variables: 
- in the **"faqInfo"** part of the JSON
- following the current setup
- in the correct section (note the number of the section)
- note the number of questions in the section

3. Search for the `index` variable in the `loginFaq` function (it should be an array) and update the question counts for the corresponding section.
4. Run the `gulp build` command and the pages should be updated.
5. Commit your changes to the git repository.

## In the user FAQs

1. Open the `plugins\plugin-aren-loginpage-faq\public\js\add-loginpage-faq-strings.js` file.
2. Add the translations for the new questions on both the french and english variables: 
- in the **"faqStudent" & "faqStudent"** part of the JSON
- following the current setup
- in the correct section (note the number of the section)
- note the number of questions in the section

3. Search for the `index` variable in the `classroom_dashboard_help_panel` & `classroom_dashboard_help_panel_teacher` functions (it should be an array) and update the question counts for the corresponding sections.
4. Run the `gulp build` command and the pages should be updated.
5. Commit your changes to the git repository.