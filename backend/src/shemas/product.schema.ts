import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop()
  count: number;

  @Prop()
  imageUrl: string;

  @Prop()
  width: number;

  @Prop()
  height: number;

  @Prop()
  weight: string;
}

export interface ProductDocument extends Document, Product {}

export const ProductSchema = SchemaFactory.createForClass(Product);
