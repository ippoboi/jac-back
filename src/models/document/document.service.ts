import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { Document } from './entity/Document.entity';

@Injectable()
export class DocumentService {
  constructor(
    @InjectRepository(Document)
    private documentRepository: Repository<Document>,
  ) {}
  create(createDocumentDto: CreateDocumentDto) {
    const newDoc = this.documentRepository.create(createDocumentDto);
    return this.documentRepository.save(newDoc);
  }

  findAll() {
    return this.documentRepository.find();
  }

  findOne(id: number) {
    return this.documentRepository.findOne({
      select: [],
      where: { id },
    });
  }

  async update(id: number, updateDocumentDto: UpdateDocumentDto) {
    const document = await this.findOne(id);

    document.title = updateDocumentDto.title;
    document.path = updateDocumentDto.path;
    document.eventId = updateDocumentDto.eventId;

    return this.documentRepository.save(document);
  }

  async remove(id: number) {
    const document = await this.findOne(id);
    return this.documentRepository.remove(document);
  }
}
