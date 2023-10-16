describe("extends", function () {
  it("extends cara pemakaian", function () {
    //! pengabungan antar interface
    interface alamat {
      description?: string | undefined;
    }

    interface mhs extends alamat {
      id: number;
      nama: string;
    }
    const mhs: mhs = {
      id: 1,
      nama: "fahri",
      description: "asdsadsadsadsa",
    };
    console.log(mhs);
  });
});
