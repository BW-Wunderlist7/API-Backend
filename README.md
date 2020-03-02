# API-Backend

# CheckMark for Independent Endpoint Validation

Matthew = ✅
Jess = ⭕

## ENDPOINTS

User
POST /register ✅⭕
POST /login ✅⭕
GET /users ✅⭕

Task
GET /tasks ✅⭕
GET /tasks/:id ✅⭕
POST /tasks ✅⭕
PUT /tasks/:id ✅⭕
DELETE /task:id ✅⭕

Tag
GET /tags ✅⭕
GET /tag/:id
POST /tags ✅ ⭕
PUT /tags/:id ✅ ⭕
DELETE /tags/:id ✅ ⭕

Profile
GET /profile ✅⭕
POST /profile ✅⭕
PUT /profile/:id ✅⭕
DELETE /profile/:id ✅⭕

| USER Feature        | Method | URL           |
| :------------------ | :----- | :------------ |
| Login as user       | POST   | /api/login    |
| Add a user          | POST   | /api/register |
| Get a list of users | GET    | /api/users    |

| TASK Feature        | Method | URL            |
| :------------------ | :----- | :------------- |
| Get a list of tasks | GET    | /api/tasks     |
| Get task by id      | GET    | /api/tasks/:id |
| Post a new task     | POST   | /api/tasks     |
| Update a task       | PUT    | /api/tasks/:id |
| Delete a task       | DELETE | /api/tasks/:id |

| TAG Feature        | Method | URL           |
| :----------------- | :----- | :------------ |
| Get a list of tags | GET    | /api/tags     |
| Get tag by id      | GET    | /api/tags/:id |
| Post a new tag     | POST   | /api/tags     |
| Update a tag       | PUT    | /api/tags/:id |
| Delete a tag       | DELETE | /api/tags/:id |

# TO DO ... BUT HAVENT

- Delete our Console.log(errs)
- dry up code - add middleware (CodeClimate reference)
- Write our invalid id endpoints
- Activate middleware DUE: Middle of week
  - Figure out a way to passs user-id through token in decodedToken middleware, which will allow access to user-id (without State).
- Deploy to Heroku!
- Postgres walkthrough
- Testing
- Create: demo profile (to be proud of)

# DOING

- Add routers to our router index & export as one to index.js

# DONE

- Write Middleware for accessing routes
