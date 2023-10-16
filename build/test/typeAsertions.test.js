"use strict";
describe("Asertions", function () {
    it("type asertions", function () {
        const obj = {
            nama: "asdsad",
            umur: "12",
            desc: "asdsadas",
        };
        const data = obj;
        console.log(data);
        //! ini akan error tetapi data ada ini adalah sebuah bug perhatikan struktur data yang mau
        //! di konversi
        // console.log(data.desc);
        //! nilai description bisa dipanggil
        console.log(data.description);
    });
});
