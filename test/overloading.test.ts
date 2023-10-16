describe("overloading multi func", function () {
  it("overloading multi function", function () {
    function call(value: string): string;
    function call(value: number): number;
    function call(value: any) {
      if (typeof value === "string") {
        return `hallo ${value}`;
      } else if (typeof value === "number") {
        return value * 3;
      } else {
        return "value hanya boleh dimasukan string atau number";
      }
    }
    console.log(call(12));
    console.log(call("asdsadsa"));
    // console.log(call(false));
  });
  it("function in parameter", function () {
    function funcParams(name: string, filter: (name: string) => string) {
      return `hallo ${filter(name)}`;
    }
    function sehay(world: string): string {
      return world;
    }

    console.log(funcParams("world", sehay));
  });
  it("my function", function () {
    function data(value: number, filter: (num: number) => number) {
      return `hallo ${filter(value)}`;
    }

    console.log(data(12, (num: number): number => num * 2));
  });
});
