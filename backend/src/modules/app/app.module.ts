import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CommandModule } from 'nestjs-command';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO_URI), CommandModule, ProductModule]
})
export class AppModule {}
