import useData from "./useData";

export interface Kenmerken {
  kenmerk: string;
}

const usePorps = (selectedProp: string) =>
  useData<Kenmerken>("/prop", { params: { prop: selectedProp } });

export default usePorps;
