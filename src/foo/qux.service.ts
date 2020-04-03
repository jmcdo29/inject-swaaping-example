import { Injectable } from '@nestjs/common';
import { CustomService } from '../interfaces/service.interface';

@Injectable()
export class QuxService extends CustomService {

  get() {
    return QuxService.name + ' get';
  }
}
