describe("Asertions", function () {
  it("type asertions", function () {
    interface objInterface {
      nama: string;
      umur: number;
      description?: string | boolean;
    }

    const obj: any = {
      nama: "asdsad",
      umur: "12",
      desc: "asdsadas",
    };

    const data: objInterface = obj as objInterface;
    console.log(data);
    //! ini akan error tetapi data ada ini adalah sebuah bug perhatikan struktur data yang mau
    //! di konversi
    // console.log(data.desc);
    //! nilai description bisa dipanggil
    console.log(data.description);
  });
});
