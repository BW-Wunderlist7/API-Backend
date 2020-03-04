# API-Backend

## DEPLOYED SITE

https://wunderlist7.herokuapp.com/

## POSTMAN TESTING DOCUMENTER

https://documenter.getpostman.com/view/10342263/SzKbLuyZ?version=latest

## ENDPOINTS

| USER Feature        | Method | URL           | TESTED |
| :------------------ | :----- | :------------ | :----- |
| Login as user       | POST   | /api/login    | ✅     |
| Add a user          | POST   | /api/register | ✅     |
| Get a list of users | GET    | /api/users    | ✅     |

| PROFILE Feature  | Method | URL              | TESTED |
| :--------------- | :----- | :--------------- | :----- |
| Get profile info | GET    | /api/profile     | ✅     |
| Post to profile  | POST   | /api/profile     | ✅     |
| Update profile   | PUT    | /api/profile/:id | ✅     |
| Delete profile   | DELETE | /api/profile/:id | ✅     |

| TASK Feature        | Method | URL            | TESTED |
| :------------------ | :----- | :------------- | :----- |
| Get a list of tasks | GET    | /api/tasks     | ✅     |
| Get task by id      | GET    | /api/tasks/:id | ✅     |
| Post a new task     | POST   | /api/tasks     | ✅     |
| Update a task       | PUT    | /api/tasks/:id | ✅     |
| Delete a task       | DELETE | /api/tasks/:id | ✅     |

| TAG Feature        | Method | URL           | TESTED |
| :----------------- | :----- | :------------ | :----- |
| Get a list of tags | GET    | /api/tags     | ✅     |
| Get tag by id      | GET    | /api/tags/:id | ✅     |
| Post a new tag     | POST   | /api/tags     | ✅     |
| Update a tag       | PUT    | /api/tags/:id | ✅     |
| Delete a tag       | DELETE | /api/tags/:id | ✅     |

# TO DO ... BUT HAVENT

- Create: demo profile (to be proud of)
- Dry up code - add middleware (CodeClimate reference)

# DOING

- Testing (code)
- Activate middleware DUE: Middle of week
- Delete our Console.log(errs)

# DONE

- Cloudinary - for Avatar upload
- Write invalid ID endpoints
- Passs user-id through token in decodedToken middleware, which will allow access to user-id (without State)
- GET /tag/:id
- Testing (Postman)
- Deploy to Heroku!
- Add routers to our router index & export as one to index.js
- Write Middleware for accessing routes

# STRETCH TO DO

- Attach Tags -> Tasks (task_tags)
- Create query that joins a user's data (Profile, task, tags) `GET all`
- Stripe Integration - for paid version
- Reset Password

# CheckMark for Independent Endpoint Validation

Matthew = ✅
Jess = ⭕

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
GET /tag/:id ✅
POST /tags ✅ ⭕
PUT /tags/:id ✅ ⭕
DELETE /tags/:id ✅ ⭕

Profile
GET /profile ✅⭕
POST /profile ✅⭕
PUT /profile/:id ✅⭕
DELETE /profile/:id ✅⭕
