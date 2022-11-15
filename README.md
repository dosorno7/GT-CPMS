# Client-Project Management System
The Client-Project Management System is a web application for Georgia Tech professors of the Computer Science Junior Design Course. Professors are able to authenticate and log-in to the application using Georgia Tech's SSO Authentication service. The application will allow professors to view and manage project/team/client pairings. They will be able to filter the display and quickly grab the emails for teams, sections, clients, etc. for contacting. As students, professors, clients, and projects come and go, the Client-Project Management System is highly adaptable and allows professors to create, edit, and delete teams in one place. 

# Release Notes
## Version 0.4.0
### New Features
* Able to remove clients. 
* Able to remove projects.
* Able to add multiple students at once when creating a team.
* Able to verify initialized client is valid before submission through error checking and messages on creation page.
* Able to verify initialized project is valid before submission through error checking and messages on creation page.
* Able to manage a selected team.

### Bug Fixes
* Fixed create client/team/project modal not updating error messages when the user clicks away and returns. 

### Known Issues
* The team creation modal has 3 add student buttons instead of 1
* Resizing the teams page window does not resize the section or team number columns of the data grid.
* Unauthorized user page breifly appears even if a valid ticket is presented.
* The tab bar does not show any active tabs.
* The dropdown menu does not save the selected choice upon submission on the request access page.

## Version 0.3.0
### New Features
* Able to remove teams. 
* Able to create a new client with client name, organization, email, and status.  
* Able to create a new project with client name, section and team assigned if applicable, organization, and status. 
* Able to filter the display by team number, section, or alphabetically, so that I can view all the teams easily. 
* Able to add students and emails when creating a student team. 
* Able to verify initialized team is valid before submission through error checking and messages on creation page. 

### Bug Fixes
* Fixed tab bar only showing the first tab as active despite switching pages. 

### Known Issues
* Resizing the teams page window does not resize the section or team number columns of the data grid.
* Unauthorized user page breifly appears even if a valid ticket is presented.
* The tab bar does not show any active tabs.
* The dropdown menu does not save the selected choice upon submission on the request access page.

## Version 0.2.0
### New Features
* Able to initialize a student team with team number, section, client name, project name, and professor. 
* Able to navigate between Teams, Clients, and Projects pages via a tab bar.

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
* Able to login to the app through GT SSO 
* Able to register for the app by requesting access 
* Able to view teams in a grid format on the landing page 

### Bug Fixes
N/A

### Known Issues 
* Resizing the window does not resize the section or team number columns of the data grid. 
* The dropdown menu does not save the selected choice upon submission.
