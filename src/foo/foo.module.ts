import { Module } from '@nestjs/common';
import { FooService } from './foo.service';
import { BazService } from '../baz/baz.service';
import { QuxService } from './qux.service';
import { QuzService } from './quz.service';
import { FooController } from './foo.controller';

@Module({
  providers: [
    FooService,
    BazService,
    {
      provide: 'tokenA',
      useClass: QuxService,
    },
    {
      provide: 'tokenB',
      useClass: QuzService,
    },
  ],
  controllers: [FooController],
})
export class FooModule {}
