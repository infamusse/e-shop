const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../../server");
const Order = require("../../../models/order.model");

chai.use(chaiHttp);

const expext = chai.expect;
const request = chai.request;

describe("PUT /api/post", () => {
  beforeEach(async () => {
    const testOrder = new Order({
      _id: "5d9f1140f10a81216cfd4401",
      products: ["5e9f3b1a9cb4b339d8b99a86"],
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

  const changedOrder = {
    _id: "5d9f1140f10a81216cfd4401",
    products: ["5e9f3b1a9cb4b339d8b99a86"],
    user: "Prime minister",
    orderInfo: {
      adress: "Downing Str. 10",
      phone: 123456789,
    },
  };

  it("shoud change data properly", async () => {
    const res = await request(server)
      .put("/api/order/5d9f1140f10a81216cfd4401")
      .send(changedOrder);
    const resChangedOrder = await Order.findById("5d9f1140f10a81216cfd4401");
    expext(res.status).to.be.equal(200);
    expext(res.body.message).to.be.equal("OK");
    expext(resChangedOrder.user).to.be.equal("Prime minister");
  });
});
