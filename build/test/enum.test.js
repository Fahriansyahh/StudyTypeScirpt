import { FileAccess } from "../src/aliasObjectEnum.test";
describe("macam macam enum", function () {
    it("decration enum ", function () {
        //! tipe enum bisa di ubah dan ganti ganti
        let datas = {
            id: 1,
            nama: "asdsa",
            kelas: "asdadsa",
            tentang: FileAccess.Read,
        };
        console.log(datas);
    });
});
