describe("function typescript", function () {
  it("penggunakan function void dan biasa", function () {
    //! :string di maksud untuk pengeluaran string
    function test(): string {
      return "hallo world";
    }

    //! sedangkan void di maksud untuk function tanpa return
    function test2(): void {
      console.log("helllo world");
    }
    console.log(test());
    test2();
  });
  it("function paramaters", function () {
    function mhs(
      nama: string,
      umur: number,
      alamat: string = "belum di isi",
      description?: string,
      ...rest: string[]
    ): Object {
      const data: {
        nama: string;
        umur: number;
        alamat: string;
        description?: string;
      } = {
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
