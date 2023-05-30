
  # break-the-square
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description
  This is an example of an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages.

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  Clone the repo from github. Open the repo in your chosen code editor.
  
  Navigate to your MongoDB Compass app, find your local server address, and copy/paste the correct address for your local connection into the /config/connection.js file on line 4 (address should start like: 'mongodb+serv://'), replacing the one that is already there.  

  Then navigate back to your code editor and open the integrated terminal from the index.js file in the root folder.  

  Then input the following commands:  
  `npm i` to install dependent packages  
  `npm start` to start local server
  
  ## Usage
  This is an example of an API for backend use for a social network database.  Check out the /models folder to see what kind of information to input in the API query JSON field.  Check out the /routes folder to see what routes you can use for api queries or read the examples below:  

  examples:  all routes start with the localhost:3001 (or whichever local host you use)  followed by /api, so it looks like `localhost:3001/api`  
  
  **User Routes**   
  `/users` GET find all users (looks like `localhost:3001/api/users`)
  `/users/:id` GET find user by ID  
  `/users/:id` PUT update user by ID  
  `/users/:id` DELETE delete user by ID  
  `/users` POST create new user  

  `users/:userId/friends/:friendId` POST add friend  
  `users/:userId/friends/:friendId` DELETE remove friend  

  **Thought Routes**  
  `/thoughts` GET find all thoughts  
  `/thoughts/:id` GET find thought by ID  
  `/thoughts/:id` PUT update thought by ID  
  `/thoughts/:id` DELETE delete thought by ID  
  `/thoughts` POST create new thought  

  `/thoughts/:thoughtId/reactions` POST add new reaction  
  `/thoughts/:thoughtId/reactions/:reactionId` DELETE remove reaction  

  
  ## Contributing
  [validators](https://mongoosejs.com/docs/tutorials/dates.html)  
  [virtuals](https://mongoosejs.com/docs/api/schema.html#Schema.prototype.virtual())  
  [Date tolocalestring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/ReferenceGlobal_Objects/Date/toLocaleString)  
  [Mongoose Docs](https://mongoosejs.com/docs/guide.html)  
  [MongoDB docs](https://www.mongodb.com/docs/manual/reference/)


  ## License
  This project retains the MIT license.

  ## Questions
  For additional information, please check out my [github profile](github.com/js-Quest)

  