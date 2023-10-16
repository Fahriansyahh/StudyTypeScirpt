"use strict";
describe("interface typescript", function () {
    //!penggunaan interface ini tidak akan terkena build ke javascript lebih baik mengunakn ini dari pada type
    it("Objek interface", function () {
        const obj = {
            id: 2,
            nama: "sehay",
        };
        console.log(obj);
    });
    it("function interface", function () {
        const myFunc = (value1, value2, value3) => {
            return `hallo ${value3} jika ${value1} + ${value2} =${value1 + value2}`;
        };
        console.log(myFunc(1, 2, "fahri"));
    });
    it("interface array index", function () {
        const data = ["fahri", "sadasd", "sadsadsa"];
        console.log(data);
        console.log(data[1]);
    });
    it("interface obj", function () {
        const key = {
            test: "adasdas",
            test1: "sadadsa",
            test2: "asdadsa",
        };
        console.log(key["test"]);
    });
    it("interface function", function () {
        const hello = {
            name: "adsadas",
            helloWorld: (world) => {
                return world;
            },
        };
        console.log(hello.helloWorld("helloworld"));
    });
});
