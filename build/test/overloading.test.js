"use strict";
describe("overloading multi func", function () {
    it("overloading multi function", function () {
        function call(value) {
            if (typeof value === "string") {
                return `hallo ${value}`;
            }
            else if (typeof value === "number") {
                return value * 3;
            }
            else {
                return "value hanya boleh dimasukan string atau number";
            }
        }
        console.log(call(12));
        console.log(call("asdsadsa"));
        // console.log(call(false));
    });
    it("function in parameter", function () {
        function funcParams(name, filter) {
            return `hallo ${filter(name)}`;
        }
        function sehay(world) {
            return world;
        }
        console.log(funcParams("world", sehay));
    });
    it("my function", function () {
        function data(value, filter) {
            return `hallo ${filter(value)}`;
        }
        console.log(data(12, (num) => num * 2));
    });
});
