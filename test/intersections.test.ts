describe("intersesctions", function () {
  it("intersections pengabungan singkat antar interface", function () {
    interface mhs {
      nama: string;
    }
    interface alamat {
      alamat: string;
    }

    type data = mhs & alamat;

    const obj: data = {
      nama: "asdada",
      alamat: "asdsadsa",
    };
    console.log(obj);
  });
});
