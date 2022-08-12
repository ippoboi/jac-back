import { Injectable } from '@nestjs/common';

const fs = require('fs');
const path = require('path');

@Injectable()
export class FileService {
  private baseRoute: string;

  constructor() {
    this.baseRoute = path.resolve(
      'C:/Users/ingan/Desktop/JAC22/jac-back/files',
    );
  }

  public async getImage(fileName: string) {
    try {
      return fs.createReadStream(path.join(this.baseRoute, fileName));
    } catch (e) {
      return null;
    }
  }

  public deleteImage(fileName: string) {
    try {
      return fs.unlinkSync(path.join(this.baseRoute, fileName));
    } catch (e) {
      return null;
    }
  }
}
