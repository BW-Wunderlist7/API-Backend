console.log("Testing 1,2,3");

const request = require("supertest");
const server = require("../index");
const db = require("../db/db-config");
let testToken;
let testEmail = `testing_${Date.now()}@gmail.com`

describe("user router", function() {
  it("run simple test", function() {
    expect(true).toBe(true);
  })

  // describe("GET/ tasks", function() {
  //     it("Retrieve a list of tasks", function() {
  //         return request(server).get("/api/tasks").then(res => {
  //             expect(res.status).toBe(401)
  //         })
  //     });
  // });
});

describe("POST /register", function() {
  it("Should return a 201 status", function() {
    return request(server)
    .post("/api/register")
    .send({ email: testEmail, password: "test" })
    .then(res => {
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

// describe("POST /register", function() {});
