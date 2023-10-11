import { HelloWorld } from "./hello-world";
describe("HelloWorld", function () {
    it("should return hello world", function () {
        expect(HelloWorld("world")).toBe("hello world");
        console.log(HelloWorld("world"));
    });
});
