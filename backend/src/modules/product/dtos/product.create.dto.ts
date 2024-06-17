import { IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MaxLength(99)
  name: string;

  @IsString()
  @IsOptional()
  imageUrl: string;

  @IsInt()
  @Min(1)
  @IsOptional()
  count: number;

  @IsInt()
  @IsOptional()
  width: number;

  @IsInt()
  @IsOptional()
  height: number;

  @IsString()
  @IsOptional()
  weight: string;
}
