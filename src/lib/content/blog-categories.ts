import { projectCategories } from "./project-categories";

export const blogCategories = projectCategories;

export type BlogCategory = (typeof blogCategories)[number];
