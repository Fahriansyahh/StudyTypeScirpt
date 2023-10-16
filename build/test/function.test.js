"use strict";
describe("function typescript", function () {
    it("penggunakan function void dan biasa", function () {
        //! :string di maksud untuk pengeluaran string
        function test() {
            return "hallo world";
        }
        //! sedangkan void di maksud untuk function tanpa return
        function test2() {
            console.log("helllo world");
        }
        console.log(test());
        test2();
    });
    it("function paramaters", function () {
        function mhs(nama, umur, alamat = "belum di isi", description, ...rest) {
            const data = {
                nama,
                umur,
                alamat,
                description,
            };
            return data;
        }
        console.log(mhs("asdsa", 18, "asdsa", "asdasdsa", "adsa", "sadsa"));
    });
});
