# Client-Project Management System
The Client-Project Management System is a web application for Georgia Tech professors of the Computer Science Junior Design Course. Professors are able to authenticate and log-in to the application using Georgia Tech's SSO Authentication service. The application will allow professors to view and manage project/team/client pairings. They will be able to filter the display and quickly grab the emails for teams, sections, clients, etc. for contacting. As students, professors, clients, and projects come and go, the Client-Project Management System is highly adaptable and allows professors to create, edit, and delete teams in one place. 

# Release Notes

## Version 0.1.0
### New Features
* [AUTHENTICATION STUFF HERE PLZ]
* Added a login page that uses SSO to verify a user. SSO appends a session ticket to the URL and routes you to the home page on successful login. 
* Added a landing page for the applciation after logging in. It contains the framework for upcoming features. The layouts for the tab bar and buttons to create teams, import from excel, copy emails to clipboard, and manage teams are in place.
* Able to filter the columns of the grid in ascending & descending order for each column, or by a custom value inputted by the user. 
* Added a request access page for new users with placeholder alerts for when the backend is implemented.

### Bug Fixes
N/A

### Known Issues 
* Resizing the window does not resize the section or team number columns of the data grid. 
* The dropdown menu does not save the selected choice upon submission.
