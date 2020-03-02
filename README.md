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
