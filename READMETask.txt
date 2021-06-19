# Yeganeh Soft - Frontend Test v1.1

Welcome to this test. We needs an admin interface for our users and applications.
Your task is to implement a single page application (frontend only) where users can:
    - View/Create/modify/remove users
    - View/Create/modify/remove apps
    - Grant/Revoke ownership of apps to users
	
An user account is an entity with the following information:
    - User account id
    - First name
    - Last name
    - E-mail address
    - Password
    - Date of birth
	
An ownership is an entity that connects a user account with a application and has the
following information:
    - Ownership id
    - User account id
    - Application id
    - State (indicates owned/revoked)
    - Registered date
	
A application is an entity with the following information:
    - Application id
    - Name
    - Thumbnail (PNG or JPG)
	
You don't need to implement a backend, and can assume that the admin is already logged in into the interface.
There is no need to persistently store the data, but you get bonus points for storing them in the local storage.
There is no need to provide test data. On first use there shouldn't be any user or application available.
Objective:
    - Implement the web interface
    - It's highly adviced to use TypeScript with strong typing
	- Only use JavaScript if TypeScript is not possible for you
    - It's recommended to build the application using React.js.
	- Handle the state of your application in a state management framework like: Redux,...
    - You are allowed to use CSS frameworks
    - You are allowed to use Babel, less, packers, etc.
    - You are allowed to use CLIs to construct the boilerplate application 
    
Bonus:
    - Store data in local storage
    - Implement a login for the interface, based on the user accounts
    - Support mobile
    
Provide your source code as ZIP to us. Avoid zipping dependencies, but use package definitions.


Have fun and good luck!

