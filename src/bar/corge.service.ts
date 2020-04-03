import { Injectable } from '@nestjs/common';
import { CustomService } from '../interfaces/service.interface';

@Injectable()
export class CorgeService extends CustomService {

  get() {
    return CorgeService.name + ' get';
  }
}
