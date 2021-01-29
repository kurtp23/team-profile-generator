const Intern = require("../lib/intern.js");

describe("Intern", () => {
  it("constructor", () => {
    const steve = new Intern("Steve", "2", "steve@gmail", "University of Oregon");
    expect(steve.name).toEqual("Steve");
    expect(steve.id).toEqual("2");
    expect(steve.email).toEqual("steve@gmail");
    expect(steve.school).toEqual("University of Oregon");
  });
});
