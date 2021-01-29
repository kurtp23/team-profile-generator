const { it, expect } = require("@jest/globals");
const Employee = require("../lib/employee.js");

describe("Employee", () => {
  it("constructor", () => {
    const steve = new Employee("Steve", "2", "steve@gmail");
    expect(steve.name).toEqual("Steve");
    expect(steve.id).toEqual("2");
    expect(steve.email).toEqual("steve@gmail");
  });
});
