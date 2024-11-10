import { create } from "zustand";

interface GlobalState {
  idgroup: string | null;
  idsubgroup: string | null;
  idcategory: string | null;
  nameGroup: string | null;
  nameSubGroup: string | null;
  nameCategory: string | null;
  selectedDB: string;
  setIdgroup: (id: string) => void;
  setIdsubgroup: (id: string) => void;
  setIdcategory: (id: string) => void;
  setNameGroup: (name: string) => void;
  setNameSubGroup: (name: string) => void;
  setNameCategory: (name: string) => void;
  setSelectedDB: (db: string) => void;
}

const useGlobalStore = create<GlobalState>((set) => ({
  idgroup: null,
  idsubgroup: null,
  idcategory: null,
  nameGroup: null,
  nameSubGroup: null,
  nameCategory: null,
  selectedDB: "mysql",
  setIdgroup: (id) => set({ idgroup: id }),
  setIdsubgroup: (id) => set({ idsubgroup: id }),
  setIdcategory: (id) => set({ idcategory: id }),
  setNameGroup: (name) => set({ nameGroup: name }),
  setNameSubGroup: (name) => set({ nameSubGroup: name }),
  setNameCategory: (name) => set({ nameCategory: name }),
  setSelectedDB: (db) => set({ selectedDB: db }),
}));

export default useGlobalStore;
