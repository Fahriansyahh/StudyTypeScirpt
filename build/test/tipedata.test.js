"use strict";
describe("tipe data", function () {
    it("contoh", function () {
        const nama = "ini nama";
        const num = 10;
        const bool = true;
        let decimal = 6;
        let hex = 0xf00d;
        let binary = 0b1010;
        let octal = 0o744;
        let u = undefined;
        let n = null;
        let unusable = undefined;
        // OK if `--strictNullChecks` is not given
        // let big: bigint = 100n;
        console.info(nama);
        console.info(num);
        console.info(bool);
        //! tidak memiliki tipe data
        let notSure = 4;
        console.log(notSure);
        notSure = "maybe a string instead";
        console.log(notSure);
        // OK, definitely a boolean
        notSure = false;
        console.log(notSure);
    });
});
