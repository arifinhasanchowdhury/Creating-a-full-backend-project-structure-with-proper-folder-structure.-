# Creating a full backend project structure with proper folder structure. 
project-folder/
├── controllers/
│   ├── helloController.js
│   ├── authController.js
├── middlewares/
│   └── authMiddleware.js
├── models/
│   └── userModel.js
├── routes/
│   ├── helloRoutes.js
│   ├── authRoutes.js
├── app.js
├── package.json

# how to run the project
# in 15 module terminal run node app.js


# http://localhost:3000/hello 
to see Hello World.


# http://localhost:3000/auth/token 
to generate a JWT token.

# Send a POST request to 
http://localhost:3000/auth 
to get I am post body as the response Open Postman.
Select POST as the request type.
Enter the URL: http://localhost:3000/auth.
Go to the Body tab and select raw, then choose JSON from the dropdown.
Add a JSON payload (optional) in the text box, like:

{
  "key": "value"
}



 
