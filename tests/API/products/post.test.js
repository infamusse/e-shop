const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../../server");
const Product = require("../../../models/product.model");

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe("POST /api/product", () => {
  const testProduct = {
    title: "TEST",
    author: "some author",
    price: 666,
    cover: "hard",
    mainPhoto: "photolink.com",
  };

  afterEach(async () => {
    await Product.deleteOne({ title: "TEST" });
  });

  it("/ should add post and return success", async () => {
    const res = await request(server).post("/api/product").send(testProduct);
    const addedProduct = await Product.find({ title: { $eq: "TEST" } });
    expect(res.status).to.be.equal(200);
    expect(res.body.message).to.be.equal("OK");
  });
});
