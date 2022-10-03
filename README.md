# Client-Project Management System
The Client-Project Management System is a web application for Georgia Tech professors of the Computer Science Junior Design Course. Professors are able to authenticate and log-in to the application using Georgia Tech's SSO Authentication service. The application will allow professors to view and manage project/team/client pairings. They will be able to filter the display and quickly grab the emails for teams, sections, clients, etc. for contacting. As students, professors, clients, and projects come and go, the Client-Project Management System is highly adaptable and allows professors to create, edit, and delete teams in one place. 

# Release Notes

## Version 0.2.0
### New Features
* Added a client and project page in addition to the landing team page, with appropriate routing added to the tab bar to ensure these pages can be reached.
* The create team button on the teams page displays a pop-up modal which prompts for team information. Submitting the new team adds a new row to the team datagrid populated with the entered team information.
* Added ticketing authorization for users based on the ticket SSO returns after successful authentication. Developed authorization logic and page.
* The tab bar can be used to navigate between the different pages of the website.

### Bug Fixes
* Fixed paging issue in the teams data-grid where, after creating a new team, the new team would multiply with each page navigation. 
* Fixed new team creation issue where the new team would only be located in the 1st position of the grid even after filtering. 

### Known Issues
* Resizing the teams page window does not resize the section or team number columns of the data grid.
* Unauthorized user page breifly appears even if a valid ticket is presented.
* When a new page is navigated to, the tab bar does not accurately reflect the active page.
* The dropdown menu does not save the selected choice upon submission on the request access page.

## Version 0.1.0
### New Features
* Added a login page that uses SSO to verify a user. SSO appends a session ticket to the URL and routes you to the home page on successful login. 
* Added a landing page for the applciation after logging in. It contains the framework for upcoming features. The layouts for the tab bar and buttons to create teams, import from excel, copy emails to clipboard, and manage teams are in place.
* Able to filter the columns of the grid in ascending & descending order for each column, or by a custom value inputted by the user. 
* Added a request access page for new users with placeholder alerts for when the backend is implemented.

### Bug Fixes
N/A

### Known Issues 
* Resizing the window does not resize the section or team number columns of the data grid. 
* The dropdown menu does not save the selected choice upon submission.
