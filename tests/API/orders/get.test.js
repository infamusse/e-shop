const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../../server");
const Order = require("../../../models/order.model");

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe("GET /api/order", () => {
  beforeEach(async () => {
    const testOrder = new Order({
      _id: "5d9f1140f10a81216cfd4401",
      products: [{ product: "5e9f3b1a9cb4b339d8b99a86", count: 1 }],
      user: "Example user",
      orderInfo: {
        adress: "Downing Str. 10",
        phone: 123456789,
      },
    });
    await testOrder.save();
  });

  afterEach(async () => {
    const deleteOrder = await Order.findById("5d9f1140f10a81216cfd4401");
    deleteOrder.remove();
  });

  it("it shoud return all orders", async () => {
    const res = await request(server).get("/api/order");
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("/ should return choosen product by ID", async () => {
    const res = await request(server).get(
      "/api/order/5d9f1140f10a81216cfd4401"
    );
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an("object");
    expect(res.body.user).to.be.equal("Example user");
  });
});
