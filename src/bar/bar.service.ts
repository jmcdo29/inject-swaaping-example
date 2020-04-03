import { Injectable } from '@nestjs/common';
import { BazService } from '../baz/baz.service';

@Injectable()
export class BarService {

  constructor(private readonly baz: BazService) {}

  getA() {
    return this.baz.getA();
  }

  getB() {
    return this.baz.getB();
  }
}
