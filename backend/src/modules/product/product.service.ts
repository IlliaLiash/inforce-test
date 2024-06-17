import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dtos/product.create.dto';
import { Product, ProductDocument } from '../../shemas/product.schema';
import { UpdateProductDto } from './dtos/product.update.dto';
import { TProductGetQuery } from '../../utils/types/query.type';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private ProductModel: Model<ProductDocument>) {}

  getById(id: string): Promise<ProductDocument> {
    return this.ProductModel.findById(id).exec();
  }

  getList(queryParams: TProductGetQuery): Promise<ProductDocument[]> {
    const query = this.ProductModel.find();

    if (queryParams.sortBy) {
      query.sort({ [queryParams.sortBy]: 1 });
    }

    return query.exec();
  }

  create(newProduct: CreateProductDto): Promise<ProductDocument> {
    return this.ProductModel.create(newProduct);
  }

  update(id: string, updateProduct: UpdateProductDto): Promise<ProductDocument> {
    return this.ProductModel.findByIdAndUpdate(id, updateProduct, { new: true }).exec();
  }

  delete(id: string): Promise<ProductDocument> {
    return this.ProductModel.findByIdAndDelete(id).exec();
  }
}
