import { Controller, Get } from '@nestjs/common';
import { FooService } from './foo.service';

@Controller('foo')
export class FooController {

  constructor(private readonly foo: FooService) {}

  @Get('/a')
  getServiceA() {
    return this.foo.getA();
  }

  @Get('b')
  getServiceB() {
    return this.foo.getB();
  }
}
