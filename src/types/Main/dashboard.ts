export interface CategoryItem {
  id: string;
  title: string;
  summary: string;
  analysisStatus: 'completed' | 'pending' | 'failed';
  analysisId: string;
}

export interface CategoryGroup {
  categoryId: number;
  categoryName: string;
  totalCount: number;
  articles: CategoryItem[];
}
