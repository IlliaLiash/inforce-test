import { PRODUCT_SORT_BY } from '../consts';

type TProductSortBy = (typeof PRODUCT_SORT_BY)[keyof typeof PRODUCT_SORT_BY];

type TProductGetQuery = {
  sortBy: TProductSortBy;
};

export type { TProductSortBy, TProductGetQuery };
