1. Explain what a token is used for.

 • An API token is a unique identifier of an application requesting access to your service. Your service would        generate an API token for the application to use when requesting your service. An API token is the form of         authentication similar to a username/password.

2. What steps can you take in your web apps to keep your data secure? 

    • Use a Protected Routes -  Routes that we only want to render if the user has logged in and been authenticated   by our server.

    • Use a JSON Web Token - A JSON Web Token is a JSON obj that is defined in RFC 7519 as a safe way to represent a set of information between two parties. The token is composed of a header, a payload, & a signature. The authentication server then creates the JSON Web Token & sends it to the user.

 3. Describe how web servers work.

    • A Web server is a program that uses HTTP (Hypertext Transfer Protocol) to serve the files that form Web pages to users, in response to their requests, which are forwarded by their computers' HTTP clients. ... All computers that host Web sites must have Web server programs.

 4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    • CREATE procedures: Performs the INSERT statement to create a new record.

    • READ procedures: Reads the table records based on the primary keynoted within the input parameter.

    • UPDATE procedures: Executes an UPDATE statement on the table based on the specified primary key for a record    within the WHERE clause of the statement.

    • DELETE procedures: Deletes a specified row in the WHERE clause.