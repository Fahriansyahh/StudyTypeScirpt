type objectData = {
  tentang: string;
  tanggal: number;
};

type data = {
  stastistik: Array<[string, string | boolean, number, boolean]>;
  description: string | boolean;
  data: Array<objectData>;
};

export type about = {
  id: number;
  nama: string;
  umur: number;
  status: boolean;
  data: data;
};
