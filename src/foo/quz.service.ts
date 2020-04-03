import { Injectable } from '@nestjs/common';
import { CustomService } from '../interfaces/service.interface';

@Injectable()
export class QuzService extends CustomService {

  get() {
    return QuzService.name + ' get';
  }
}
