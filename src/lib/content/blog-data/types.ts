export type BlogArticleSection = {
  title: string;
  paragraphs: string[];
};

export type BlogArticle = {
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
  introduction: string[];
  sections: BlogArticleSection[];
};
