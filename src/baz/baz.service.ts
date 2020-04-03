import { Injectable, Inject } from '@nestjs/common';
import { CustomService } from '../interfaces/service.interface';

@Injectable()
export class BazService {
  constructor(
    @Inject('tokenA') private readonly serviceA: CustomService,
    @Inject('tokenB') private readonly serviceB: CustomService,
  ) {}

  getA() {
    return BazService.name + 'getA' + this.serviceA.get();
  }

  getB() {
    return BazService.name + 'getB' + this.serviceB.get();
  }
}
