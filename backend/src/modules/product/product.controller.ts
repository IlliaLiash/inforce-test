import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/product.create.dto';
import ProductGetQueryDto from './dtos/product.getQuery.dto';
import { ValidateMongoId } from '../../utils/pipes/isMongoId.pipe';
import { UpdateProductDto } from './dtos/product.update.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @HttpCode(200)
  public getList(@Query() query: ProductGetQueryDto) {
    return this.productService.getList(query);
  }

  @Get(':id')
  @HttpCode(200)
  async getById(@Param('id', ValidateMongoId) id: string) {
    const product = await this.productService.getById(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  @Patch(':id')
  @HttpCode(201)
  async update(@Param('id', ValidateMongoId) id: string, @Body() updateProductDto: UpdateProductDto) {
    const updatedProduct = await this.productService.update(id, updateProductDto);

    if (!updatedProduct) {
      throw new NotFoundException('Product not found');
    }

    return updatedProduct;
  }

  @Delete(':id')
  @HttpCode(200)
  async deleteOne(@Param('id', ValidateMongoId) id: string) {
    const deletedProduct = await this.productService.delete(id);

    if (!deletedProduct) {
      throw new NotFoundException('Product not found');
    }

    return deletedProduct;
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createProductDto: CreateProductDto) {
    const createdProduct = await this.productService.create(createProductDto);

    return createdProduct;
  }
}
