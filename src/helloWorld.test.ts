import { HelloWorld } from "./hello-world";

describe("HelloWorld", function (): void {
  it("should return hello world", function (): void {
    expect(HelloWorld("world")).toBe("hello world");
    console.log(HelloWorld("world"));
  });
});
