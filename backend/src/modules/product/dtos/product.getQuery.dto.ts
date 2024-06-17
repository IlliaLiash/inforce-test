import { IsEnum, IsOptional } from 'class-validator';
import { PRODUCT_SORT_BY } from '../../../utils/consts';
import { TProductSortBy } from '../../../utils/types/query.type';

export default class ProductGetQueryDto {
  @IsOptional()
  @IsEnum(PRODUCT_SORT_BY)
  sortBy: TProductSortBy;
}
