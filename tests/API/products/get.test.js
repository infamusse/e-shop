const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../../server");
const Product = require("../../../models/product.model");

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe("GET /api/product", () => {
  beforeEach(async () => {
    const testProduct = new Product({
      _id: "5d9f1140f10a81216cfd4408",
      title: "Super product",
      text: "Desc of super product",
      price: 666,
      cover: "hard",
      color: "blue",
      mainPhoto: "photolink.com",
    });
    await testProduct.save();
  });

  afterEach(async () => {
    const deleteProduct = await Product.findById("5d9f1140f10a81216cfd4408");
    deleteProduct.remove();
  });

  it("/ should return all products", async () => {
    const res = await request(server).get("/api/product");
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("/ should return choosen product by ID", async () => {
    const res = await request(server).get(
      "/api/product/5d9f1140f10a81216cfd4408"
    );
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an("object");
    expect(res.body.title).to.be.equal("Super product");
  });

  it("/ should status 500 if product not match", async () => {
    const res = await request(server).get("/api/product/123");
    expect(res.status).to.be.equal(500);
  });
});
