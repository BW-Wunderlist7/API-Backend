console.log("Testing 1,2,3");

const request = require("supertest");
const server = require("../index");
const db = require("../db/db-config");
let testToken;
let testEmail = `testing_${Date.now()}@gmail.com`;
let testEmail2 = `testing${Date.now()}@gmail.com`
let testToken2;
let testTask = `Testing_${Date.now()}`;

describe("user router", function() {
  it("run simple test", function() {
    expect(true).toBe(true);
  })
});

describe("POST /register", function() {
  it("Should return a 201 status", function() {
    return request(server)
    .post("/api/register")
    .send({ email: testEmail, password: "test" })
    .then(res => {
      console.log("~~~ERROR~~~",testEmail)
      expect(res.status).toBe(201)
    })
    .then(res => {
      return db("tasks")
    })
  })
});


describe("POST /login", function() {
  it("Should login user", function() {
    return request(server)
      .post("/api/login")
      .send({ email: "anotherone@gmail.com", password: "test" })
      .then(res => {
        console.log(res.body.token);
        testToken = res.body.token;
      });
  });



  it("Should not login the invalid user", function() {
    return request(server)
      .post("/api/login")
      .send({ email: "doesnotexist@gmail.com", password: "123" })
      .then(res => {
        expect(res.status).toBe(401);
      });
  });
});

// describe("API functionality for tasks data", function() {

//   it("Should register this user", function() {
//     return request(server)
//     .post("/api/register")
//     .send({ email: testEmail, password: "test" })
//     .then(res => {
//       console.log("HEREs THE ISSUE", res);
//       testToken = res.body.token;
//       expect(res.status).toBe(201)
//   })
//   })

  
// });

describe("API Functionality for retrieving Tasks", function() {
  // testToken2 = res.body.token;

  it("Should return a 201 status", function() {
    return request(server)
    .post("/api/register")
    .send({ email: testEmail2, password: "test" })
    .then(res => {
      testToken2 = res.body.token;
      console.log("~~~ERROR~~~",testEmail)
      expect(res.status).toBe(201)
    })
    .then(res => {
      return db("tasks")
    })
  })

  it("Get a list of tasks", function() {
    return request(server)
    .get(`/api/tasks`);
    testToken2 = res.body.token
    .set("Authorization", testToken2)
    .then(res => {
      console.log("ARRAY CONSOLELOG",testToken2);
      expect(Array.isArray(res.body).toBe(true));
    })
  })

  it("Adds a new task", function() {
    return request(server)
    .post(`/api/tasks`)
    testToken2 = res.body.token
    .set("Authorization", testToken2)
    .send({ task: testTask, description: "testing 1,2,3" })
    .then(res => {
      let testTaskId = res.body
      expect(Array.isArray(res.body).toBe(true))
    })
  })
});

