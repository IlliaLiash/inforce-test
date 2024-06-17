import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Comment {
  @Prop()
  description: string;

  @Prop()
  date: Date;

  @Prop()
  product_id: string;
}

export interface CommentDocument extends Document, Comment {}

export const CommentSchema = SchemaFactory.createForClass(Comment);
