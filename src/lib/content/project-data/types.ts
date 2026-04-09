export type ProjectArticleSection = {
  title: string;
  paragraphs: string[];
};

export type ProjectArticle = {
  slug: string;
  title: string;
  description: string;
  deck: string;
  image: string;
  category: string;
  tags: string[];
  publishedAt: string;
  publishedLabel: string;
  cardDate: string;
  author: string;
  sourceUrl: string;
  introduction: string[];
  sections: ProjectArticleSection[];
};
