describe("Any", function () {
    it("declarasi object bebas", function () {
        //!bisa di ubah atau di tambah
        let obj = {
            id: 122323,
            nama: "fahri",
        };
        obj.id = 18;
        console.log(obj);
    });
    it("declration object alias", function () {
        let ObjAlias = {
            id: 1,
            nama: "fahri",
            umur: 19,
            status: true,
            data: {
                stastistik: [
                    ["asdasdas", "sadsadsa", 10, false],
                    ["asdad", false, 11, true],
                ],
                data: [
                    { tentang: "asdadsa", tanggal: 23 },
                    { tentang: "asdadsa", tanggal: 23 },
                ],
                description: "adasda",
            },
        };
        console.log(ObjAlias.data);
    });
    it("declration simple alias", function () {
        const objSimple = {
            id: 1,
            name: "fahri",
        };
        console.log(objSimple);
    });
    it("declarasi objek options ? ", function () {
        const option = {
            id: 1,
            nama: "fahri",
            description: undefined,
        };
        console.log(option);
    });
});
export {};
