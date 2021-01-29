const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
  it("constructor", () => {
    const steve = new Engineer("Steve", "2", "steve@gmail", "steveGit101");
    expect(steve.name).toEqual("Steve");
    expect(steve.id).toEqual("2");
    expect(steve.email).toEqual("steve@gmail");
    expect(steve.gitHub).toEqual("steveGit101");
  });
});
