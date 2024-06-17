import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ValidateMongoId implements PipeTransform<string> {
  transform(value: string): string {
    if (isValidObjectId(value)) {
      return value;
    }
    throw new BadRequestException('Invalid ObjectId');
  }
}
