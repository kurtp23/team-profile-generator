const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  it("constructor", () => {
    const steve = new Manager("Steve", "2", "steve@gmail", "101");
    expect(steve.name).toEqual("Steve");
    expect(steve.id).toEqual("2");
    expect(steve.email).toEqual("steve@gmail");
    expect(steve.officeNumber).toEqual("101");
  });
});
