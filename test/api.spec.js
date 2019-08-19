const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("API Test", () => {
  it("GET", async () => {
    let res = await request("http://dummy.restapiexample.com/api/v1").get(
      "/employee/61245"
    );
    expect(res).to.have.status(200);
    expect(res).to.be.html;
    //expect(res).to.have.param("employee_salary");
  });
});
