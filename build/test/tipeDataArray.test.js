"use strict";
describe("Tipe Data Array", function () {
    it("tipe data array", function () {
        const arrNum = [1, 2, 3, 4, 5];
        const arrStr = ["hello", "hai", "hi"];
        const arrBool = [true, false];
        arrStr.unshift("asd");
        console.log(arrNum[1]);
        console.log(arrStr[2]);
        console.log(arrBool[0]);
    });
    it("tipe data multi array", function () {
        const arrAll = [1, "adasds", false];
        console.log(arrAll);
    });
    it("tipe data tetap readOnlyArray", function () {
        const arrOnly = ["asdasdsa", "test", "why"];
        // arrOnly.push("asd"); error
        //! read only hanya bisa dipanggil
        console.log(arrOnly[1]);
    });
    it("tipe data readonly multi atau tupel", function () {
        //! hanya bisa di panggil
        const arrAll = [1, "adasds", false];
        console.log(arrAll);
    });
    it("array didalam array", function () {
        const arr = [
            ["test", "test1", 2],
            ["tes4", false, 2],
        ];
        console.log(arr);
    });
    it("Objeck di dalam array", function () {
        const arrObj = [
            {
                tentang: "test",
                tanggal: 19,
            },
            {
                tentang: "adsada",
                tanggal: 22,
            },
        ];
        const arr = [
            {
                test: "asdsada",
                num: 10,
                bool: false,
            },
            {
                anotherProp: "abc",
                yetAnotherProp: 42,
                andAnotherProp: true,
            },
        ];
        console.log(arrObj);
        console.log(arr);
    });
});
