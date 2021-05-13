const scramble = require("..");
const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe("Randomizes Strings", () => {
  it("Should return a string", (done) => {
    const ran = scramble.scramble("Random");
    expect(ran).to.be.a("string");
    expect(ran).to.have.lengthOf(6);
    done();
  });

  it("Should not remove spaces", (done) => {
    const ran = scramble.scramble("Random String");
    expect(ran).to.be.a("string");
    expect(ran).to.have.string(" ");
    expect(ran).to.have.lengthOf(13);
    done();
  });

  it("Should handle special characters", (done) => {
    const ran = scramble.scramble("~!@#$%^&*()_+");
    expect(ran).to.be.a("string");
    expect(ran).to.have.string("~");
    expect(ran).to.have.string("!");
    expect(ran).to.have.string("@");
    expect(ran).to.have.string("#");
    expect(ran).to.have.string("$");
    expect(ran).to.have.string("%");
    expect(ran).to.have.string("^");
    expect(ran).to.have.string("&");
    expect(ran).to.have.string("*");
    expect(ran).to.have.string("(");
    expect(ran).to.have.string(")");
    expect(ran).to.have.string("_");
    expect(ran).to.have.string("+");
    expect(ran).to.have.lengthOf(13);
    done();
  });
});
