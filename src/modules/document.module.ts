import { Module } from '@nestjs/common';
import { DocumentService } from '../services/document.service';
import { DocumentController } from '../controllers/document.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Document } from '../entities/Document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Document])],
  controllers: [DocumentController],
  providers: [DocumentService],
})
export class DocumentModule {}
