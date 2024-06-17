import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dtos/product.create.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  // @Get()
  // @HttpCode(200)
  // public getList(@Query() query: ProductGetQueryDto) {
  //   return this.productService.getList(query);
  // }

  // @Get(':id')
  // @HttpCode(200)
  // async getById(@Param('id', ValidateMongoId) id: string) {
  //   const product = await this.productService.getById(id);

  //   if (!product) {
  //     throw new NotFoundException('Product not found');
  //   }

  //   return product;
  // }

  // @Patch(':id')
  // @HttpCode(201)
  // async update(@Param('id', ValidateMongoId) id: string, @Body() updateProductDto: UpdateProductDto) {
  //   const updatedProduct = await this.productService.update(id, updateProductDto);

  //   if (!updatedProduct) {
  //     throw new NotFoundException('Product not found');
  //   }

  //   return updatedProduct;
  // }

  // @Delete(':id')
  // @HttpCode(200)
  // async deleteOne(@Param('id', ValidateMongoId) id: string) {
  //   const deletedProduct = await this.productService.delete(id);

  //   if (!deletedProduct) {
  //     throw new NotFoundException('Product not found');
  //   }

  //   return deletedProduct;
  // }

  @Post()
  @HttpCode(201)
  async create(@Body() createProductDto: CreateCommentDto) {
    const createdProduct = await this.commentService.create(createProductDto);

    return createdProduct;
  }
}
