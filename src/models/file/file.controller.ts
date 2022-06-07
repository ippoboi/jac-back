import {
  Controller,
  Get,
  Header,
  Param,
  Post,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';
import { diskStorage, memoryStorage } from 'multer';
import { Response } from 'express';
import JwtAuthGuard from '../auth/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'superadmin')
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './files',
        filename: (req, file, cb) => {
          const fileName =
            'file-' +
            Date.now() +
            '-' +
            Math.round(Math.random() * 1e9) +
            '.txt';
          cb(null, fileName);
        },
      }),
    }),
  )
  async handleUpload(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return 'Success';
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('member', 'admin', 'superadmin')
  @Get('/:path')
  public async getImage(@Param('path') path: string, @Res() res: Response) {
    const stream = await this.fileService.getImage(path);
    stream.on('error', (error: any) => {
      console.log('Caught', error);
    });
    stream.pipe(res);
  }
}
