"use strict";
describe("Any", function () {
    it("declarasi object bebas", function () {
        let obj = {
            id: 122323,
            nama: "fahri",
        };
        obj.id = 18;
        console.log(obj);
    });
});
