import { Injectable } from '@nestjs/common';
import { CustomService } from '../interfaces/service.interface';

@Injectable()
export class GraultService extends CustomService {

  get() {
    return GraultService.name + ' get';
  }
}
