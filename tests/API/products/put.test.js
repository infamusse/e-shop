const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../../server");
const Product = require("../../../models/product.model");

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe("PUT /api/product/:id", () => {
  beforeEach(async () => {
    const testProduct = new Product({
      _id: "5d9f1140f10a81216cfd4408",
      title: "TEST",
      author: "some author",
      price: 666,
      cover: "hard",
      mainPhoto: "photolink.com",
    });
    await testProduct.save();
  });

  afterEach(async () => {
    const deleteProduct = await Product.findById("5d9f1140f10a81216cfd4408");
    deleteProduct.remove();
  });

  const changedTestProduct = {
    _id: "5d9f1140f10a81216cfd4408",
    title: "TEST",
    author: "some author",
    price: 999,
    cover: "soft",
    mainPhoto: "photolink.com",
  };

  it("shoud change attributes in choosen post", async () => {
    const res = await request(server)
      .put("/api/product/5d9f1140f10a81216cfd4408")
      .send(changedTestProduct);
    const resChangedPost = await Product.findById("5d9f1140f10a81216cfd4408");
    expect(res.status).to.be.equal(200);
    expect(res.body.message).to.be.equal("OK");
    expect(resChangedPost.price).to.be.equal(999);
    expect(resChangedPost.cover).to.be.equal("soft");
  });
});
