import { Controller, Get } from '@nestjs/common';
import { BarService } from './bar.service';

@Controller('bar')
export class BarController {

  constructor(private readonly bar: BarService) {}

  @Get('a')
  getServiceA() {
    return this.bar.getA();
  }

  @Get('b')
  getServiceB() {
    return this.bar.getB();
  }
}
