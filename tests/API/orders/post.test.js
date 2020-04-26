const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../../server");
const Order = require("../../../models/order.model");

chai.use(chaiHttp);

const expext = chai.expect;
const request = chai.request;

describe("POST /api/order", () => {
  const testOrder = {
    products: ["5e9f3b1a9cb4b339d8b99a86"],
    user: "TEST",
    orderInfo: {
      adress: "Downing Str. 10",
      phone: 123456789,
    },
  };
  afterEach(async () => {
    await Order.deleteOne({ user: "TEST" });
  });

  it("should add order and return succes", async () => {
    const res = await request(server).post("/api/order").send(testOrder);
    const addedOrder = await Order.find({ user: { $eq: "TEST" } });
    expext(res.status).to.be.equal(200);
    expext(res.body.message).to.be.equal("OK");
  });
});
