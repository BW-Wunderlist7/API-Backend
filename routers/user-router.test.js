console.log("Testing 1,2,3");

const request = require("supertest");
const server = require("./index");
const db = require("./db/dbConfig");

describe("user router", function() {
  it("run simple test", function() {
    expect(true).toBe(true);
  });

  // describe("GET/ tasks", function() {
  //     it("Retrieve a list of tasks", function() {
  //         request(server).get("/api/tasks").then(res => {
  //             expect(res.status).toBe(401)
  //         })
  //     });
  // });
});

describe("POST /login", function() {
  it("Should login user", function() {
    return request(server)
      .post("/api/login")
      .send({ email: "jess@jess.com", password: "123" })
      .then(res => {
        const newToken = res.body.token;
        return request(server)
          .get("/api/tasks")
          .set(Authorization, newToken)
          .then(res => {
            expect(res.status).toBeTruthy();
          });
      });
  });
  it("Should not login the invalid user", function() {
    return request(server)
      .post("/api/login")
      .send({ email: "doesnotexist@gmail.com", password: "doesnotexist" })
      .then(res => {
        expect(res.status).toBe(400);
      });
  });
});

describe("POST /register", function() {});
