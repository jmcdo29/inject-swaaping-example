import { Module } from '@nestjs/common';
import { BarService } from './bar.service';
import { BazService } from '../baz/baz.service';
import { CorgeService } from './corge.service';
import { GraultService } from './grault.service';
import { BarController } from './bar.controller';

@Module({
  providers: [
    BarService,
    BazService,
    {
      provide: 'tokenA',
      useClass: CorgeService,
    },
    {
      provide: 'tokenB',
      useClass: GraultService,
    },
  ],
  controllers: [BarController],
})
export class BarModule {}
