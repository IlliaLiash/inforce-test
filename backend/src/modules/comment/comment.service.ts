import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dtos/product.create.dto';
import { CommentDocument } from '../../shemas/comment.schema';
// import { TCommentGetQuery } from '../../utils/types/query.type';
// import { UpdateCommentDto } from './dtos/product.update.dto';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment.name) private CommentModel: Model<CommentDocument>) {}

  // getById(id: string): Promise<CommentDocument> {
  //   return this.CommentModel.findById(id).exec();
  // }

  // getList(queryParams: TCommentGetQuery): Promise<CommentDocument[]> {
  //   const query = this.CommentModel.find();

  //   if (queryParams.sortBy) {
  //     query.sort({ [queryParams.sortBy]: 1 });
  //   }

  //   return query.exec();
  // }

  create(newComment: CreateCommentDto): Promise<CommentDocument> {
    return this.CommentModel.create(newComment);
  }

  // update(id: string, updateComment: UpdateCommentDto): Promise<CommentDocument> {
  //   return this.CommentModel.findByIdAndUpdate(id, updateComment, { new: true }).exec();
  // }

  // delete(id: string): Promise<CommentDocument> {
  //   return this.CommentModel.findByIdAndDelete(id).exec();
  // }
}
