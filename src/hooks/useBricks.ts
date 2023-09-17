import useData from "./useData";

export interface Brick {
  id: number;
  code: string;
  description: string;
}

const useBricks = () => useData<Brick>("/bricks");

export default useBricks;
