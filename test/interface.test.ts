describe("interface typescript", function () {
  //!penggunaan interface ini tidak akan terkena build ke javascript lebih baik mengunakn ini dari pada type
  it("Objek interface", function () {
    interface objInterface {
      id: number;
      nama: string;
    }

    const obj: objInterface = {
      id: 2,
      nama: "sehay",
    };
    console.log(obj);
  });
  it("function interface", function () {
    interface funcInterface {
      (value1: number, value2: number, value3: string): string;
    }

    const myFunc: funcInterface = (
      value1: number,
      value2: number,
      value3: string
    ): string => {
      return `hallo ${value3} jika ${value1} + ${value2} =${value1 + value2}`;
    };
    console.log(myFunc(1, 2, "fahri"));
  });
  it("interface array index", function () {
    interface arrIndex {
      [index: number]: string;
    }

    const data: arrIndex = ["fahri", "sadasd", "sadsadsa"];
    console.log(data);
    console.log(data[1]);
  });
  it("interface obj", function () {
    interface ObjKey {
      [key: string]: string;
    }
    const key: ObjKey = {
      test: "adasdas",
      test1: "sadadsa",
      test2: "asdadsa",
    };
    console.log(key["test"]);
  });
  it("interface function", function () {
    interface objInt {
      name: string;
      helloWorld(world: string): string;
    }

    const hello: objInt = {
      name: "adsadas",
      helloWorld: (world: string): string => {
        return world;
      },
    };

    console.log(hello.helloWorld("helloworld"));
  });
});
