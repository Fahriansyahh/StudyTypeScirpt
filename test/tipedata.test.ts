describe("tipe data", function () {
  it("contoh", function () {
    const nama: string = "ini nama";
    const num: number = 10;
    const bool: boolean = true;
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    let u: undefined = undefined;
    let n: null = null;
    let unusable: void = undefined;
    // OK if `--strictNullChecks` is not given
    // let big: bigint = 100n;
    console.info(nama);
    console.info(num);
    console.info(bool);

    //! tidak memiliki tipe data
    let notSure: unknown = 4;
    console.log(notSure);
    notSure = "maybe a string instead";
    console.log(notSure);
    // OK, definitely a boolean
    notSure = false;
    console.log(notSure);
  });
});
