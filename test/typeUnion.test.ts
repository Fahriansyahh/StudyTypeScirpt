describe("type union", function () {
  it("type union", function () {
    //? bisa memiliki banyak tipe
    let waktu: number | boolean;
    waktu = 10;
    console.log(waktu);
    waktu = true;
    console.log(waktu);
  });
  it("handle bug type union", function () {
    const myFunc = (tentang: number | boolean | string) => {
      if (typeof tentang == "number") {
        return tentang + 2;
      } else if (typeof tentang == "string") {
        return `ini adalah ${tentang}`;
      } else {
        return !tentang;
      }
    };

    console.log(myFunc(12));
    console.log(myFunc("botol"));
    console.log(myFunc(true));
  });
});
