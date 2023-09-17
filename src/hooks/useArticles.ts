import useData from "./useData";
import { Brick } from "./useBricks";

export interface Article {
  id: number;
  code: string;
  description: string;
  gpc: string;
  vrd: number;
}

const useArticles = (selectedBrick: Brick | null) =>
  useData<Article>("/Articles", { params: { bricks: selectedBrick?.code } }, [
    selectedBrick?.code,
  ]);

export default useArticles;
